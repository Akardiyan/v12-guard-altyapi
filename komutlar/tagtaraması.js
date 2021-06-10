const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  
  let prefix = ayarlar.prefix
  
    const yetki = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`)
    .setThumbnail(client.user.avatarURL)  
      
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(yetki);
  
      const yetkiq = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bir Tag Girmelisiniz Örnek Kullanım: \`${ayarlar.prefix}tag-tara +\`**`)
    .setThumbnail(client.user.avatarURL) 
      
  const tag = args.slice(0).join(' ');
if(!tag) return message.channel.send(yetkiq)
  const memberss = message.guild.members.cache.filter(member => member.user.username.includes(tag));

    const embed = new Discord.MessageEmbed()
        .addField(`Kullanıcı Adında ${tag} Olan Kullanıcılar`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Bulunmuyor.`)
        .setColor("RANDOM")
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['tag-tara'],
    permLevel: 0
}

exports.help = {
    name: 'tag-taraması',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}