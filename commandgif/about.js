const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gifs About`)
.setDescription(``)
.addField('Servers', `\`${client.guilds.cache.size}\``, true)
.addField('Channels', `\`${client.channels.cache.size}\``, true)
.addField('Users', `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
.addField('My Name' , `\`${client.user.tag}\`` , true)
.addField('My ID' , `\`${client.user.id}\`` , true)
.addField('My Ping' , `\`${client.ws.ping}\`` , true)
.addField('Owner Bot' , `<@790233637580832788>` , true)
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['about'],
permLevel: 0
};

exports.help = {
  name: 'about',
  description: 'rexuss',
  usage: 'stats'
};
