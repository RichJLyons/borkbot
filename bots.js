const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
var fs = require('fs');
var items = fs.readFileSync('DD.txt').toString().split(";");
var quotes = fs.readFileSync('cookie.2.txt').toString().split("%%");
quotes = quotes.filter(a => a.includes("--"));

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
    message.channel.send(quotes[Math.floor(Math.random()*quotes.length)]);
  }
});

bot.login(process.env.token);
