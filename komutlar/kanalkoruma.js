const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
  
  let prefix = ayarlar.prefix

    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki);

    const yetkiq = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Lütfen Güvenlik Log Kanalını Ayarlayınız => ${prefix}log #kanal**`)
    .setThumbnail(client.user.avatarURL)  
        
  let sistemlog = await db.fetch(`sistemlogkanalı${message.guild.id}`)
if(!sistemlog) return message.reply(yetkiq)
  
  if (!args[0]) {
    
    const yetkis = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Doğru Kullanım: ${prefix}kanal-koruma aç/kapat**`)
    .setThumbnail(client.user.avatarURL) 

    return message.channel.send(yetkis)
  }
  if (args[0] === 'aç') {
    
    const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Kanal Koruma Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
    return message.channel.send(yetkix)
  }
   if (args[0] === 'kapat') {
    
    const yetkiw = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Kanal Koruma Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
           
    db.delete(`kanalk_${message.guild.id}`)
    return message.channel.send(yetkiw)
  }
};
exports.conf = {
  aliases: ["kanal-koruma"],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 