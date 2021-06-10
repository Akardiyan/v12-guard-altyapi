const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
 if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(yetki)
let sistemlog = await db.fetch(`sistemlogkanalı${message.guild.id}`)

    const yetkix = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Lütfen Güvenlik Log Kanalını Ayarlayınız => ${prefix}log #kanal**`)
    .setThumbnail(client.user.avatarURL) 
    
if(!sistemlog) return message.reply(yetkix)
  
  if (args[0] == "aç") {
    
    const yetkiw = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Anti Raid Sistemi Zaten \`AÇIK\`**`)
    .setThumbnail(client.user.avatarURL) 
      
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send(yetkiw);
    }
    
      const yetkis = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Anti Raid Sistemi \`AÇILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
      
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply(yetkis);
  }
 
  if (args[0] == "kapat") {
    
  const yetkiq = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Anti Raid Sistemi Zaten \`KAPALI\`**`)
    .setThumbnail(client.user.avatarURL) 
      
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(yetkiq);
    }
    
      const yetkit = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Anti Raid Sistemi \`KAPATILDI\`**`)
    .setThumbnail(client.user.avatarURL) 
      
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply(yetkit);
  }
  
    const yetkij = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Doğru Kullanım: ${prefix}anti-raid aç/kapat**`)
    .setThumbnail(client.user.avatarURL) 
    
  if (!args[0])
    return message.reply(yetkij);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['anti-raid'],
  permLevel: 0
};
exports.help = {
  name: "anti-raid"
};