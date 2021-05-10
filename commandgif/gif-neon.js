const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/764927608013193276/764933832142749736/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/768164227377791066/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/788707324503392286/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/812066790564823100/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/779428418605023252/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/780111245634043944/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/793756092261072936/image0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Neon Gifs")
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-neon','neon-gif','gifneon','neongif'],

  permLevel: 0

};

exports.help = {

  name: 'neon',

  description: 'rexuss',

  usage: 'neon'

};
