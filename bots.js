const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const api = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
const snekfetch = require("snekfetch");
var fs = require('fs');
var items = fs.readFileSync('DD.txt').toString().split(";");

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
          let body = r.body;
          let entry = body.find(post => !isNaN(post.ID));
          //let quote = entry.content.toString()
          let embed = new Discord.RichEmbed()
              .setAuthor(entry.title)
              .setDescription(entry.content.toString().slice(3,-7))
           message.channel.send({embed: embed});
      });
  }
});

bot.login(process.env.token);
