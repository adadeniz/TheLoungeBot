const settings = require("./settings");
const help = require("./help");
const fs = require("fs");

module.exports = function (message) {

    if (message.guild.roles.find("name", settings.adminrole) == null){
        message.guild.createRole({ name: settings.adminrole, color: "DARK_RED" });
    }

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();
    let hasPrefix = command.startsWith(settings.prefix);

    if (hasPrefix) {

        if( command.indexOf("help") > -1 ){

            help(message);

        }   else{

            fs.readdir(settings.cmdir, (err, files) => {

                files.forEach(file => {

                    require(settings.cmdir + file )(message)

                });

            })

        }

    }
};