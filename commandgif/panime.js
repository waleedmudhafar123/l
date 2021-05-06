const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/737803691565907991/814870994530861116/360cf7ac7e7b9f1441d0948e6ab83f07.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/814870981378048060/b6c9cc93d77714096754e988064d3dee.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/813879559409369109/MOLLY_BUNNY.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/805865899697242162/image0.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/799748841246949426/e760eefc-af79-4003-b9d8-9b42b1a2fdb5.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/799748841246949426/e760eefc-af79-4003-b9d8-9b42b1a2fdb5.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/814870858308780072/1d0b737fcc90657957a42034077f299a.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/810183657021112320/image1.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/804092919928979476/Ash_imboredsoherewearez.png", "https://cdn.discordapp.com/attachments/737803691565907991/813879559409369109/MOLLY_BUNNY.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/805865568036847676/image0.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/804092913956945991/S_H_O_P.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/814871045508956180/99cf9ff40f47e1f3faf0f85f78180f4c.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/804092921480609803/MelDream_Meldream_0190.jpg", "https://cdn.discordapp.com/attachments/737803691565907991/814870880378945566/b4a97fcecac0bbdce829914ebea72322.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo Animes")

.setColor("RANDOM")

.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['PANIME','Panime','PAnime','p anime'],

  permLevel: 0

};

exports.help = {

  name: 'panime',

  description: 'rexuss',

  usage: 'panime'

};
