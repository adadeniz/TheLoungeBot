const settings = require("../settings");
let adminrole = settings.adminrole;

module.exports = function (message){

    let messageParts = message.content.split(" ");
    let command = messageParts[0].toLowerCase();
    let params = messageParts.splice(1, messageParts.length);

    if(command.indexOf("addrole") > -1) {

        if (message.member.roles.find("name", adminrole)) { // check for admin role

            let user = message.mentions.members.first();

            if (!params[0]) return message.reply('You must supply a name for the role').catch(console.error);
            if (message.guild.roles.find("name", params[0]) !== null) return message.reply("This role already exists");
            message.guild.createRole({ name: params[0]}).then(() => {
                message.reply("Role created!")
            })

        } else {

            message.reply(`This command requires elevation: **Bot Admin**`)

        }

    }

};

module.exports.help = [ "Add role", "Create role", "addrole [role]" ];
