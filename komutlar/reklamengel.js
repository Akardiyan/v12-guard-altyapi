const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
  
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(yetki)
  
const code = message.mentions.channels.first() || message.channel
const codework = args[0]
  
if (!codework) {
    const yetkis = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Doğru Kullanım: ${prefix}reklam-engel aç/kapat**`)
    .setThumbnail(client.user.avatarURL) 
return message.channel.send(yetkis)
}
 
if (codework == 'aç') { 
let açıkkapalı = await db.fetch(`reklamEngelcodework_${message.guild.id}`)
db.set(`reklamEngelcodework_${message.guild.id}`,'açık')

      const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Reklam Engel Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
      
return message.channel.send(yetkix)
}
  
if (codework == 'kapat') {
let açıkkapalı = await db.fetch(`reklamEngelcodework_${message.guild.id}`)
db.delete(`reklamEngelcodework_${message.guild.id}`)
  
      const yetkiw = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Reklam Engel Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
      
return message.channel.send(yetkiw)
}
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["reklam-engel"],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'reklam-engel'
}