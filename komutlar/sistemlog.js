const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetki);
  
    const yetkiq = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Lütfen Bir Kanal Etiketle**`)
    .setThumbnail(client.user.avatarURL)  
      
 let sistemlogkanal = message.mentions.channels.first()
if (!sistemlogkanal) return message.channel.send(yetkiq)
   
  db.set(`sistemlogkanalı${message.guild.id}`, sistemlogkanal.id)

     const yetkix = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Sistem Log Kanalı Başarıyla Ayarlandı; ${sistemlogkanal}**`)
    .setThumbnail(client.user.avatarURL) 
     
  message.channel.send(yetkix)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["log"],
 permLevel: 0,
kategori:""
};

exports.help = {
 name: 'sistemlog',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kicklog-kanal <#kanal>'
};