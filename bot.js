const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.channel.send('Discord Bot Commands');
        message.channel.send('!fornitestats <player>: Displays stats of a specific player.');
  	}
});

client.on('message', message => {
    if (message.content === '!fortnitestats') {
        let player = args[0]
    	message.reply('${player}'s Stats: https://fortnitetracker.com/profile/pc/${player}');
  	}
});

client.login(process.env.BOT_TOKEN);
