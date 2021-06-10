const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(yetki)
  
        const yetkiq = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Lütfen Güvenlik Log Kanalını Ayarlayınız => ${prefix}log #kanal**`)
    .setThumbnail(client.user.avatarURL) 
        
let sistemlog = await db.fetch(`sistemlogkanalı${message.guild.id}`)
if(!sistemlog) return message.reply(yetkiq)

  if (!args[0]) {
    
        const yetkis = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Doğru Kullanım: ${prefix}rol-koruma aç/kapat**`)
    .setThumbnail(client.user.avatarURL) 
        
 message.channel.send(yetkis)
  }
  if (args[0] === 'aç') {
    
    const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Rol Koruma Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
        
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(yetkix)
  }
   if (args[0] === 'kapat') {
     
    const yetkiw = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Rol Koruma Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
         
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(yetkiw)
  }
};
exports.conf = {
  aliases: ['rol-koruma'],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
}; 