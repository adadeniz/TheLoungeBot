const settings = require("./settings");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = function (message) {

    let messageParts = message.content.split(" ");
    let params = messageParts.splice(1, messageParts.length);
    let file = params[0];
    let clr = "#e33f3f";

    if(file){
        try {

            let name = require(settings.cmdir + file).help[0];
            let use = require(settings.cmdir + file).help[1];
            let cmd = require(settings.cmdir + file).help[2];

            let helpEmbed = new Discord.RichEmbed() // todo: make embeds neater
                .setDescription(`**${name}**`)
                .setColor(clr)
                .addField("Description:", `${use}`)
                .addField("Usage:", `${settings.prefix}${cmd}`);

            message.channel.send({embed: helpEmbed});

        } catch (e){
            message.reply("Command not found");
        }
    }   else{

        let commandList = "";

        fs.readdir(settings.cmdir, (err, files) => {

            files.forEach(file => {

                commandList += "`" + file.split(".")[0] + "`\n"

            });

            let helpEmbed = new Discord.RichEmbed()
                .setDescription("**Help**")
                .setColor(clr)
                .addField("Commands: ", `${commandList}`)
                .addField("More info:", `\`${settings.prefix}help [cmd]\``);

            message.channel.send({embed: helpEmbed})

        })


    }

}