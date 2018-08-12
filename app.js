// inv https://discordapp.com/oauth2/authorize?client_id=472220865996521473&scope=bot&permissions=2146958591

const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDcyMjIwODY1OTk2NTIxNDcz.DjwQwA.4sHnYtWt4lwIqwbeHiImJ2uLNXg';
const handle = require("./handler");

client.on('ready', () => {
    client.user.setActivity('Lounging');
    console.log('Bot loaded...');
});

client.on('message', message => {
    handle(message );
});

client.channels.get('478293956942364673').send('!news');

client.login(token);
