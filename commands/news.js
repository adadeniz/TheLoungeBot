const settings = require('../settings');
const request = require('request');
const Discord = require('discord.js');

module.exports = function (message){

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();

    if(command.replace('!', '') === 'news') {

        request.get("https://www.reddit.com/r/technology/hot.json", function (err, response, body) {

            let max = JSON.parse(body).data.dist;
            let num = Math.floor(Math.random() * max);

            let redditArticle = JSON.parse(body).data.children[num].data;

            let article = new Discord.RichEmbed()
                .setTitle(redditArticle.title)
                .setImage(redditArticle.thumbnail)
                .setAuthor('/u/'+redditArticle.author)
                .setURL('https://reddit.com'+redditArticle.permalink)
                .setColor("#00FFFF");

            return message.channel.send({embed: article});

        })

    }

};

module.exports.help = [ "News", "Tech news", "news" ];
