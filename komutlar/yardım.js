const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`:bangbang: Beni Sunucunuca Eklemek İçin \`${prefix}davet\` Yazabilirsiniz :bangbang:\n`) 
.addField(`__Reklam Engel__`,`\`${prefix}reklam-engel\`\nReklam Engel Sistemini Açar`,true)
.addField(`__Caps Engel__`,`\`${prefix}caps-engel\`\nCaps Engel Sistemini Açar`,true)
.addField(`__Kanal Koruma__`,`\`${prefix}kanal-koruma\`\nKanal Koruma Sistemini Açar`,true)
.addField(`__Emoji Koruma__`,`\`${prefix}emoji-koruma\`\nEmoji Koruma Sistemini Açar`,true)
.addField(`__Küfür Engel__`,`\`${prefix}küfür-engel\`\nKüfür Engel Sistemini Açar`,true)
.addField(`__Anti Raid__`,`\`${prefix}anti-raid\`\nAnti Raid Sistemini Açar`,true)
.addField(`__Tag Taraması__`,`\`${prefix}tag-tara\`\nTag Taraması Yapar`,true)
.addField(`__Reklam Taraması__`,`\`${prefix}reklam-tara\`\nReklam Taraması Yapar`,true)
.addField(`__Güvenlik Log__`,`\`${prefix}log\`\nGüvenlik Loglarının Atılacağı Kanalı Ayarlar`,true)
.addField(`__Ayarlar__`,`\`${prefix}kontrol\`\nSunucudaki Açılmış Sistemleri Gösterir`,true)
.addField(`__Full Koruma__`,`\`${prefix}koruma\`\nTüm Koruma Sistemlerini Açar Veya Kapatır`,true)
.setThumbnail(client.user.avatarURL)
message.channel.send(yardım)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım"],
 permLevel: 0,
};
exports.help = {
 name: 'yardım'
};
