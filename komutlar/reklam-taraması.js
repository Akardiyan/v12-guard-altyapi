const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki);
    const members = message.guild.members.cache.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.MessageEmbed()
        .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.")
        .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
        .setColor("RANDOM")
    message.channel.send({embed})
}

    
      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-tara'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-taraması', 
  description: "Reklam Taraması Yapar",
  usage: 'CodeWork'
};