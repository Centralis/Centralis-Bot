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
  
  if(command === "snipe") {
    message.channel.send("```Snipe Match Launching");
    message.channel.send("Starting in...");
    message.channel.send("3");
    message.channel.send("2");
    message.channel.send("1");
    message.channel.send("Queue```");
    const channel = message.member.voiceChannel;
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

client.login(config.token);
