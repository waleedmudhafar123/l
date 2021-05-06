const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor("RANDOM")
.setTitle("Your Info User.")
.addField("**Full Name**", `<@${prof.author.id}>`)
.addField("**ID**", `${prof.author.id}`)
.addField("**Joined Server At**", moment(prof.joinedAt).format("D/M/YYYY h:mm a"),true)
.addField("**Joined Discord At**", prof.author.createdAt.toLocaleString());
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['user'],
permLevel: 0
};

exports.help = {
  name: 'user',
  description: 'rexuss',
  usage: 'user'
};
