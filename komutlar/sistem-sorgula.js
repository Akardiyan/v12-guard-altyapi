const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetki)

    let reklamengel = await db.fetch(`reklamEngelcodework_${message.guild.id}`)
    let küfürengel = await db.fetch(`${message.guild.id}.kufur`)
    let capsengel = await db.fetch(`capslock_${message.guild.id}`)
    let emojikoruma = await db.fetch(`emojik_${message.guild.id}`)
    let rolkoruma = await db.fetch(`rolk_${message.guild.id}`)
    let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`)
    let antiraid = await db.fetch(`antiraidK_${message.guild.id}`)
    let logkanal = await db.fetch(`sistemlogkanalı${message.guild.id}`)
    
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setTimestamp()
    .setFooter(client.user.username)
    .addField(`Sistem Bilgilendirme Menüsü`,`
    Reklam Engel Sistemi --->    \`${reklamengel ? 'Açık' : 'Kapalı' }\` 
    Küfür Engel Sistemi --->     \`${küfürengel ? 'Açık' : 'Kapalı' }\` 
    CapsLock Engel Sistemi --->  \`${capsengel ? 'Açık' : 'Kapalı' }\` 
    Emoji Koruma Sistemi --->    \`${emojikoruma ? 'Açık' : 'Kapalı' }\`
    Rol Koruma Sistemi --->      \`${rolkoruma ? 'Açık' : 'Kapalı' }\`
    Kanal Koruma Sistemi --->    \`${kanalkoruma ? 'Açık' : 'Kapalı' }\`
    Anti Raid Sistemi --->       \`${antiraid ? 'Açık' : 'Kapalı' }\`
    Log Kanalı ---> ${logkanal ? `<#${logkanal}>` : 'Ayarlanmamış' }`)
    message.channel.send(embed)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kontrol"],
 permLevel: 0,
};
exports.help = {
 name: 'sorgula'
};