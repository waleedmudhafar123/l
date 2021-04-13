const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
const codework = message.mentions.users.first()
let user;
  
if (message.mentions.users.first())  {user = message.mentions.users.first();}
  
else {user = message.author;}
  
return message.channel.send(new Discord.MessageEmbed()
                            
.setDescription(`**${user.tag}**`)
.setColor(`RANDOM`)
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(user.displayAvatarURL({ dynamic: true })))
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };
