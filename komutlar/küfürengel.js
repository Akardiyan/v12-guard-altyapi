const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(yetki)
if(args[0] === 'aç') {
  
      const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Küfür Engel Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
        
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(yetkix)
  return
}
if (args[0] === 'kapat') {
  
    const yetkiw = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Küfür Engel Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
        
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(yetkiw)
return
}
    const yetkis = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Doğru Kullanım: ${prefix}küfür-engel aç/kapat**`)
    .setThumbnail(client.user.avatarURL) 
    
  message.channel.send(yetkis)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür-engel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfürleri engeller',
 usage: 'küfürengel'
};