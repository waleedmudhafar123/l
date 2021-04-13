const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/810651927334748180/811017898860347422/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811017900076040193/GIF-201127_023626.gif", "https://cdn.discordapp.com/attachments/742107775475253259/819268083667566622/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652801218117672/siyah.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652090979844096/image0.gify", "https://cdn.discordapp.com/attachments/810651927334748180/810652685061062663/68.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652708926390292/uzgun-19.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012110145290310/a_1ba840ca0fdc749b381714af5f3939d9.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810652664278810634/eniippbence.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012110653063238/GIF-201114_165700.gif", "https://cdn.discordapp.com/attachments/742107775475253259/819268121974014052/image0.gif", "https://cdn.discordapp.com/attachments/752914781941268563/825004389189025802/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821090832735928350/image0-24.gif", "https://cdn.discordapp.com/attachments/810651927334748180/811012066491629578/image0-34.gif", "https://cdn.discordapp.com/attachments/805854616511316014/821028902801506334/image0.gif", "https://cdn.discordapp.com/attachments/810651927334748180/810651982611742750/image0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Sad Gif")
.setColor("BLACK")
.setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['sad-gif','sad-gif','gifsad','sadgif'],

  permLevel: 0

};

exports.help = {

  name: 'sad',

  description: 'rexuss',

  usage: 'sad'

};
