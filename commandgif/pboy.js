const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/737803397314510849/803985963235672064/image3.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/793394353758273536/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/798112393078112327/image6.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/793394311101415424/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/770004598941286460/image1.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/779543791912222731/a_a5120861c963a11a99754db495c83301.png", "https://cdn.discordapp.com/attachments/737803397314510849/802038664917811220/image3.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/747403876768153610/image1.png", "https://cdn.discordapp.com/attachments/752914781941268563/825347159624908810/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/814868383911903232/f25dfd17cbeb23206a98a5e3b5d23ae0.jpg", "https://cdn.discordapp.com/attachments/694694407278034944/815996273584635904/epp6.png", "https://cdn.discordapp.com/attachments/737803397314510849/803985247040438292/image7.png", "https://cdn.discordapp.com/attachments/737803397314510849/770010518063677440/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/802038565701156894/image3.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/777145825884110859/IMG_20200708_222808_444.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/786194717855055872/0c1654499892da483eec68504da9da90.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/790958148911104020/image6.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/780805237010989056/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/780805389029081118/image0.png", "https://cdn.discordapp.com/attachments/737803397314510849/783984442803748884/image1.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/814868474005422090/5483ba848ee0b78f749fe5a578a4c222.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/788442185049178122/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/801421780388282388/ICON_.jpg", "https://cdn.discordapp.com/attachments/694694407278034944/815864151703683072/ba2ef6925d984790baa67a118f85b6cd.png", "https://cdn.discordapp.com/attachments/737803397314510849/791936576552173569/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/802038857452486656/image1.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/798112416905953340/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/803985248534790164/image9.png", "https://cdn.discordapp.com/attachments/737803397314510849/773938278201556992/image6.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/790958718094671892/image9.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/798112355379838996/image7.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/793394249504260116/image0.jpg", "https://cdn.discordapp.com/attachments/694694407278034944/815641038512980008/81ea521b5816b8a3a0712791b3fcacd2.png", "https://cdn.discordapp.com/attachments/737803397314510849/803455129093275678/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/803985207333748776/image1.png", "https://cdn.discordapp.com/attachments/752914781941268563/825347284506116116/image0.jpg", "https://cdn.discordapp.com/attachments/737803397314510849/798112373508407316/image5.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo boys")

.setColor("RANDOM")

.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Pboy','pBoy','PBOY','PBoy'],

  permLevel: 0

};

exports.help = {

  name: 'pboy',

  description: 'rexuss',

  usage: 'pboy'

};
