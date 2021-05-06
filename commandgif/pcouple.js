const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/764935873526628462/802051099745845288/The_One.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041449927278592/image6.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/803987556303765534/image5.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/804086013550264380/Hoslandiginiz_kisiyi_baskasiyla_gormeye_dayanabilir_misiniz_.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/804086017450704916/DUYGUSUZ_MELODI_-_1_Esmer_Oglan.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041796497768448/image7.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/803987607087611944/image7.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041555119767612/image5.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041836330942504/image0.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041814920069120/image2.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802051098621509652/b59f9753c350fad0.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/803987578906476564/image7.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/793530490102480916/d24.PNG", "https://cdn.discordapp.com/attachments/764935873526628462/802041815494033419/image5.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041555355172864/image6.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802051095743954944/vinnie_hacker_imagines_-_what_to_expect_.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802051101977346058/Piccoletta-_Jaden_Hossler.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/802041765040357376/image9.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/813878398170038353/YILDIZLARA_FISILDAMAK_Masal__Meric_2.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/803987536543612968/image6.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/793828180577222666/d68.PNG", "https://cdn.discordapp.com/attachments/764935873526628462/803987577958695022/image3.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/803987515882602516/image1.jpg", "https://cdn.discordapp.com/attachments/764935873526628462/813878402637234176/instagram__CameronDallas.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo couples")

.setColor("RANDOM")

.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Pcouple','PCouple','PCOUPLE','pCOUPLE'],

  permLevel: 0

};

exports.help = {

  name: 'pcouple',

  description: 'rexuss',

  usage: 'pcouple'

};
