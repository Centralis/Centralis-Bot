const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`CenBot has started.`); 
  client.user.setActivity(`Official Bot of CentralisWin`);
});


client.on("message", async message => {
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "leaderboards") {
    message.channel.send("Leaderboards:");
    message.channel.send("1. Centralis");
  }
});

client.login(config.token);
