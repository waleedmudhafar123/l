const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
const darknes = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription('Ping')
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

let start = Date.now(); 
let mesaj = await message.channel.send(darknes)
let diff = (Date.now() - start); 
let API = (app.ws.ping).toFixed(2)
    
setInterval(() => {
        
const only = new Discord.MessageEmbed()

.setDescription(`**${diff}ms**
**${API}ms**`)

mesaj.edit(only);
      
}, 5000)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'rexuss',
  usage: 'ping'
};
