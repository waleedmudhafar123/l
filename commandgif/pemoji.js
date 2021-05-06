const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/697145837062455411/815574681695813671/wb9Wj5v4GuuAAAAABJRU5ErkJggg-1.png", "https://cdn.discordapp.com/attachments/697145837062455411/815618512189259826/MerryPout.png", "https://cdn.discordapp.com/attachments/697145837062455411/813485553852743700/770384677516869674.png", "https://cdn.discordapp.com/attachments/697145837062455411/816040220570812496/ezgif-7-8b79fe63818a.png", "https://cdn.discordapp.com/attachments/697145837062455411/813306632041529405/yesil.png", "https://cdn.discordapp.com/attachments/697145837062455411/816024441464684574/589052320743030795-1.png", "https://cdn.discordapp.com/attachments/697145837062455411/815670250052780042/KannaWhat.png", "https://cdn.discordapp.com/attachments/697145837062455411/813345325288390656/759612770105819167.png", "https://cdn.discordapp.com/attachments/697145837062455411/813306442328178698/krmz.png", "https://cdn.discordapp.com/attachments/697145837062455411/814827424713015297/766264844532842506.png", "https://cdn.discordapp.com/attachments/697145837062455411/814787498983161906/paint_2.png", "https://cdn.discordapp.com/attachments/697145837062455411/814044877594820628/806914453966684162.png", "https://cdn.discordapp.com/attachments/697145837062455411/814883041515798558/edaa_siyah_kalp.png", "https://cdn.discordapp.com/attachments/697145837062455411/816040153092063232/ezgif-7-97386b81853c.png", "https://cdn.discordapp.com/attachments/772470455457808414/783062484583841832/77.gif", "https://cdn.discordapp.com/attachments/772470455457808414/796071782808682586/gazete.png", "https://cdn.discordapp.com/attachments/772470455457808414/796065095247593512/744218474112483358.png", "https://cdn.discordapp.com/attachments/697145837062455411/814075336891170846/20210218_165037.jpg", "https://cdn.discordapp.com/attachments/772470455457808414/775802273926348830/image0.png", "https://cdn.discordapp.com/attachments/697145837062455411/814883042346270750/edaa_kirmizi_kalp.png", "https://cdn.discordapp.com/attachments/697145837062455411/813331078471221268/800481130456285254.png", "https://cdn.discordapp.com/attachments/697145837062455411/815618571236540446/nitro_boost.png", "https://cdn.discordapp.com/attachments/697145837062455411/813474982545457192/Zeyrox_2.png", "https://cdn.discordapp.com/attachments/697145837062455411/816075147912019968/793465624831590409.png", "https://cdn.discordapp.com/attachments/697145837062455411/813345331630702622/764095917657161749-1.png", "https://cdn.discordapp.com/attachments/772470455457808414/796065063647313950/788493009653071912.png", "https://cdn.discordapp.com/attachments/697145837062455411/813859181740163113/808715822226079794.png", "https://cdn.discordapp.com/attachments/697145837062455411/814885397917597736/586175476721254437.png", "https://cdn.discordapp.com/attachments/772470455457808414/776481707099422770/image1.png", "https://cdn.discordapp.com/attachments/697145837062455411/813773768627322890/1614084232776.png", "https://cdn.discordapp.com/attachments/697145837062455411/814883041347371029/edaa_sari_kalp.png", "https://cdn.discordapp.com/attachments/697145837062455411/813707238673088542/okk.png", "https://cdn.discordapp.com/attachments/697145837062455411/815693103226552340/e8.png", "https://cdn.discordapp.com/attachments/697145837062455411/815943754841981009/image0.png", "https://cdn.discordapp.com/attachments/772470455457808414/782274541920583720/image0.png"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo Emojis")

.setColor("RANDOM")

.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['PEmoji','Pemoji','PEMOJI','pEmoji'],

  permLevel: 0

};

exports.help = {

  name: 'pemoji',

  description: 'rexuss',

  usage: 'pemoji'

};
