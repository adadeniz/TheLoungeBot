const toHHMMSS = require("../helpers").toHHMMSS;

module.exports = function (message){

    //const role = message.guild.roles.find('name', 'Bot');
    //message.member.addRole(role);

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();

    if(command.indexOf("uptime") > -1) {

        message.channel.send(toHHMMSS(process.uptime()))

    }

};

module.exports.help = [ "Uptime", "Bot's uptime", "uptime" ];
