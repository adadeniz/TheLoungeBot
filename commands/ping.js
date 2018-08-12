const settings = require("../settings");

module.exports = function (message){

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();

    if(command.indexOf("ping") > -1) {

        message.channel.send("Pong!");

    }

};

module.exports.help = [ "Ping", "Ping the bot", "ping" ];
