const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");
let botid = akardiyan.davet

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;

const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`${client.user.username} Davet Menüsü`, client.user.avatarURL())
.setDescription('**\n:heart: • [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id='+ client.user.id +'&scope=bot&permissions=8)**\n')
.setFooter(client.user.username) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

exports.conf = {
  aliases: ["davet"],
  permLevel: 0
};
exports.help = {
  name: 'davet'
}; 