const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`**invite**`)
.setDescription(`[Click here](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)`)
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['invite'],
permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'rexuss',
  usage: 'invite'
};
