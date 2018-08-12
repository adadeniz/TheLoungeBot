const settings = require("../settings");
let adminrole = settings.adminrole;

module.exports = function (message){

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();

    if(command.indexOf("kick") > -1) {

        if (message.member.roles.find("name", adminrole)) { // check for admin role

            let user = message.mentions.members.first();
            if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
            if (message.author.username === user.user.username) return message.reply("You cannot kick yourself. :laughing:");
            if (user.roles.find("name", adminrole)) return message.reply(`You cannot kick another **${settings.adminrole}**`);
            if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
            user.kick().then( () => {
                return message.reply(`Kicked ${user.displayName}`);
            })

        } else {
            message.reply(`This command requires elevation: **${settings.adminrole}**`)

        }

    }

};

module.exports.help = [ "Kick", "Kick a user", "kick [user]" ];
