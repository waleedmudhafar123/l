const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/737803070217650227/805674220192530462/1b2aa8e3e516bdd7.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/783976924565209118/630670529ef7a3c76a03f8e44ef70ddb.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/755383792209756240/image0.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/783653667952787496/008beb180d5975b98697d2c26dd55bbc.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/790954384397697065/image8.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/814869160811167774/a87704b2e441d9e8e95330332bf555d4.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/737835352533893130/image0.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/790954414621065226/image7.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/783002678770663464/947772bf05bd5c1b58a5e91fcf4ccf59.jpg", "https://cdn.discordapp.com/attachments/737803070217650227/794200284632186890/c11.PNG", "https://cdn.discordapp.com/attachments/737803070217650227/814869221879971850/7f8e7a4cf39beccd3923584c7fa3bad6.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo girls")

.setColor("RANDOM")

.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Pgilr','pGilr','PGILR','PGirl'],

  permLevel: 0

};

exports.help = {

  name: 'pgirl',

  description: 'rexuss',

  usage: 'pgirl'

};
