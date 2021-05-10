const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567125580480582/Zenard_91.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567091674513408/sadsa.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827566756641636382/image2.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827566694846562324/ENES_ACAR_GIF_134.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827501391060140052/knassy1_6.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827471223964827668/4dsr5.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827471039629361172/20210121_175434.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827045264979656764/6.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827044744408072223/image0-123.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826498012410019930/a_88e5b4c03a185d0d03f84039036da416.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826498127895986186/KAPTANman_48.gif", "https://cdn.discordapp.com/attachments/755893014915711047/826497192579170344/a_9b2ed05b287fc58858272fa4294a293b-1.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Smoking Gifs")
.setColor("BLACK")
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['smoking-gif','smoking-gif','gifsmoking','smokinggif'],

  permLevel: 0

};

exports.help = {

  name: 'smoking',

  description: 'rexuss',

  usage: 'smoking'

};
