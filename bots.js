const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const api = "https://talaikis.com/api/quotes/random/";
const snekfetch = require("snekfetch");
var fs = require('fs');
var items = fs.readFileSync('DD.txt').toString().split(";");
var commands = ["ping","ding","pika","bork","people","resolve","quote","spidey"];

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`What is my purpose?`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '/';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`){
    let comGrid = "\n";
    for (var i in commands) {
      comGrid = comGrid + " /"+commands[i]+" ";
      for (var j=1; j < (10-commands[i].length);j++) {
          if ((i+1)%3==0){
            comGrid = comGrid + "\n";
            break;
          }
          comGrid = comGrid + "-";
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle("Here are the current commands:")
      .setDescription(comGrid);
    //message.channel.send("Here are the current commands: "+comGrid);
    message.channel.send({embed});
  }
  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
  if (cmd === `${prefix}ding`){
    message.channel.send("Dong!");
  }
  if (cmd === `${prefix}pika`){
    message.channel.send(new Discord.Attachment('./photos/pika.png')).catch(console.error);
  }
  if (cmd === `${prefix}bork`){
    message.channel.send(new Discord.Attachment('./photos/bork.jpg')).catch(console.error);
  }
  if (cmd === `${prefix}people`){
    message.channel.send(new Discord.Attachment('./photos/people.png')).catch(console.error);
  }
  if (cmd === `${prefix}resolve`){
    message.channel.send(items[Math.floor(Math.random()*items.length)]);
  }
  if (cmd === `${prefix}quote`){
      snekfetch.get(api).then(r => {
          let entry = r.body;
          let embed = new Discord.RichEmbed()
              .setAuthor(entry.author)
              .setDescription(entry.quote);
          message.channel.send({embed: embed});
          //console.log(body);
      });
  }
  if (cmd === `${prefix}pups`){
    var files = fs.readdirSync('./photos/puppy/')
    let chosenFile = files[Math.floor(Math.random()*files.length)] 
    message.channel.send(new Discord.Attachment('./photos/puppy/'+chosenFile)).catch(console.error);
  }
});

bot.login(process.env.token);
