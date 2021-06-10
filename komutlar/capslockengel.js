const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
       
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(yetki)
  
  if(args[0] === 'aç') {
    
  const yetkiq = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Caps Engel Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
            
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(yetkiq)
  return
}
if (args[0] === 'kapat') {
  
    const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Caps Engel Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
    
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(yetkix)
return
}
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caps-engel'],
  permLevel: 0
};
exports.help = {
  name: 'caps-engel',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};