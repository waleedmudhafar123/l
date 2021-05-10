const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/737804426642718763/811606904106254387/image0.gif", "https://cdn.discordapp.com/attachments/737804426642718763/804365946432651284/image0.gif", "https://cdn.discordapp.com/attachments/699341228218646628/790135488317095948/image0.gif", "https://cdn.discordapp.com/attachments/699341228218646628/784715409634754560/image0.gif", "https://cdn.discordapp.com/attachments/672928733140746250/764268055420993556/ezgif-6-bc4d18351ca7.gif", "https://cdn.discordapp.com/attachments/699341228218646628/797488586831953951/kay.gif", "https://cdn.discordapp.com/attachments/699341228218646628/797045027586441226/512eb939e452d257cc353980bc6f95fe.gif", "https://cdn.discordapp.com/attachments/699341228218646628/799329946450657381/0db2a7ea54c810de317936af200c7de9.gif", "https://cdn.discordapp.com/attachments/699341228218646628/790135448735186954/image0.gif", "https://cdn.discordapp.com/attachments/672928733140746250/751418759822180392/a_c327061f5672460ddc61fd6a4b5b427e.gif", "https://cdn.discordapp.com/attachments/699341228218646628/767402449606279168/tenor.gif", "https://cdn.discordapp.com/attachments/699341228218646628/784729550818770964/Eda50.gif", "https://cdn.discordapp.com/attachments/699341228218646628/778966851580461066/ayeww.gif", "https://cdn.discordapp.com/attachments/699341228218646628/796839981834305586/metecm123.gif", "https://cdn.discordapp.com/attachments/699341228218646628/784716522416373780/image0.gif", "https://cdn.discordapp.com/attachments/699341228218646628/797053479536820234/ae9.gif", "https://cdn.discordapp.com/attachments/699341228218646628/797046626832744458/e7cbb6e5a93fb577066c8fbe1575c94f.gif", "https://cdn.discordapp.com/attachments/699341228218646628/797488668997713950/h5-1.gif", "https://cdn.discordapp.com/attachments/737804426642718763/805678218181869578/g5.gif", "https://cdn.discordapp.com/attachments/699341228218646628/795307118106378270/133.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Aesthetic Gifs")
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-aesthetic','aesthetic-gif','gifaesthetic','aestheticgif'],

  permLevel: 0

};

exports.help = {

  name: 'aesthetic',

  description: 'rexuss',

  usage: 'aesthetic'

};
