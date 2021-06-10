const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(yetki)
  
if(args[0] === 'aç') {
  
    const yetkiw = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Tüm Sistemleri Açmam İçin Bir Log Kanalı Gerekli Örnek Kullanım: \`${ayarlar.prefix}koruma aç/kapat #kanal\`**`)
    .setThumbnail(client.user.avatarURL) 
      
  let sistemlog = message.mentions.channels.first();
  if (!sistemlog) return message.reply(yetkiw)
    db.set(`${message.guild.id}.kufur`, true)
    db.set(`reklamEngelcodework_${message.guild.id}`, true)
    db.set(`capslock_${message.guild.id}`, true)
    db.set(`emojik_${message.guild.id}`, true)
    db.set(`rolk_${message.guild.id}`, true)
    db.set(`kanalk_${message.guild.id}`, true)
    db.set(`sistemlogkanalı${message.guild.id}`, sistemlog.id)
  
      const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Tüm Sistemler Başarıyla \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
    message.channel.send(yetkix)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
  db.delete(`reklamEngelcodework_${message.guild.id}`)
  db.delete(`capslock_${message.guild.id}`)
  db.delete(`emojik_${message.guild.id}`)
  db.delete(`rolk_${message.guild.id}`)
  db.delete(`kanalk_${message.guild.id}`)
  db.delete(`sistemlogkanalı${message.guild.id}`)
  
        const yetkiq = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Tüm Sistemler Başarıyla \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
message.channel.send(yetkiq)
return
}
    const yetkis = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **\`aç\` Veya \`kapat\` Kullanın Örnek Kullanım: \`${ayarlar.prefix}log #kanal\`**`)
    .setThumbnail(client.user.avatarURL) 
  message.channel.send(yetkis)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['koruma'], 
 permLevel: 0
};

exports.help = {
 name: 'koruma',
 description: 'küfürleri engeller',
 usage: 'küfürengel'
};