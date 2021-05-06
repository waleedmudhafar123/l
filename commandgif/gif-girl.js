const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif", "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif", "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif", "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif", "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif", "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800848548798791680/image8-1.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800852701335912498/image3-1.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("[Girl Gif](https://discord.gg/gwdAbxAnhg)")
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-girl','girl-gif','gifgirl','girlgif'],

  permLevel: 0

};

exports.help = {

  name: 'girl',

  description: 'rexuss',

  usage: 'girl'

};
