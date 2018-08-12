// inv https://discordapp.com/oauth2/authorize?client_id=472220865996521473&scope=bot&permissions=2146958591

const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token');
const handle = require("./handler");

client.on('ready', () => {
    client.user.setPresence({game : { name: "Breaking the internet!"}});
    console.log('Bot loaded...');
});

client.on('message', message => {
    handle(message );
});

client.login(token);
