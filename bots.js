const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const quoteApi = "https://talaikis.com/api/quotes/random/";
const rlApi = "https://www.reddit.com/r/RocketLeague/.json";
var pupsApi = "https://www.reddit.com/r/";
const snekfetch = require("snekfetch");
var fs = require('fs');
var items = fs.readFileSync('DD.txt').toString().split(";");
var quotes = fs.readFileSync('quotes.txt').toString();
var commands = ["ping","ding","pika","bork","people","resolve","pups","free","rl"];

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`What is my purpose?`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '/'; //identifier of command for bot to look for
  let messageArray = message.content.split(" "); //split entire message by spaces
  let cmd = messageArray[0]; //command has to be first item in message
  let args = messageArray.slice(1); // join together rest of message for later parsing

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
//   if (cmd === `${prefix}quote`){
//       snekfetch.get(quoteApi).then(r => {
//           let entry = r.body;
//           let embed = new Discord.RichEmbed()
//               .setAuthor(entry.author)
//               .setDescription(entry.quote);
//           message.channel.send({embed: embed});
//           //console.log(body);
//       });
//   }
  if (cmd === `${prefix}rl`){
      snekfetch.get(rlApi).then(r => {
          let rand = [];
          for (var i=0; i<r.body.data.children.length; i++){
            if (r.body.data.children[i].data.media != null){
                if (r.body.data.children[i].data.media.type =='gfycat.com'){
                    rand.push(i)    
                }
            }
          }
          message.channel.send(r.body.data.children[rand[Math.floor(Math.random() * rand.length)]].data.url).catch(console.error);
      });
  }
  if (cmd === `${prefix}pups`){
      if (typeof args[0] !== 'undefined'){
          var pups = pupsApi+args[0]+"/.json";
      } else {
          var pups = pupsApi+"puppies/.json";
      }
      snekfetch.get(pups).then(r => {
          let rand = [];
          for (var i=0; i<r.body.data.children.length; i++){
            if (r.body.data.children[i].data.post_hint == 'image'){
                rand.push(i)    
             }
          }
          message.channel.send(r.body.data.children[rand[Math.floor(Math.random() * rand.length)]].data.url).catch(console.error); 
      });
  }
  if (cmd === `${prefix}free`){
    message.channel.send(new Discord.Attachment('./photos/Tim.gif')).catch(console.error);
  }
  if (cmd === `${prefix}roll`){
    let rolls = args[0].split("d");
    for (var i=0; i<rolls[0]; i++){
      message.channel.send(Math.floor(Math.random()*(rolls[1]) + 1)).catch(console.error);
    }
  }
  
  if (cmd === `${prefix}alien`){
    var files = fs.readdirSync('./photos/Alien_Reactions/')
    let chosenFile = files[Math.floor(Math.random()*files.length)] 
    message.channel.send(new Discord.Attachment('./photos/Alien_Reactions/'+chosenFile)).catch(console.error);
  }
  
  if (cmd === `${prefix}newquote`){
    var Github = require('github-api');
    // Creates a new instance of the Github object exposed by Github.js
    var github = new Github({
      username: 'RichJLyons',
      password: '!1reccoS',
      auth: 'basic'
    });
    
    var repository = github.getRepo('RichJLyons', 'borkbot');
    var quote = ''
    for (var i=0; i<args.length; i++){
      quote = quote + args[i] + ' ';
    }

    repository.write(
       'master', // e.g. 'master'
       'quotes.txt', // e.g. 'blog/index.md'
       quotes + ' ::\n' + quote, // e.g. 'Hello world, this is my new content'
       'New Quote Added', // e.g. 'Created new index'
       function(err) {}
    );
  }
  
  if (cmd === `${prefix}quote`){
      var randquote = quotes.split("::\n");
      message.channel.send(randquote[Math.floor(Math.random()*randquote.length)]);
  }
  
});

//Resolve everyday at 8am
var schedule = require('node-schedule');
var j = schedule.scheduleJob('0 0 12 * * *', function(){
  bot.channels.get('517415434195173380').send(items[Math.floor(Math.random()*items.length)]);
});


bot.login(process.env.token);
