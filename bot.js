const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`CenBot is now online.`); 
  client.user.setActivity(`Use !schedule for upcoming dates`);
});


client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "schedule") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("schedule?");
    m.edit(`The next tournament is scheduled for July 7th from 12 PM EST - 4 PM EST.`);
  }
});

client.login(config.token);
