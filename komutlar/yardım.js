const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Register Yardım Komutları')
.setTimestamp()
.addField('<a:rstar_m:812783212689883156> m-erkek', 'Erkek üye Kaydedersiniz')
.addField('<a:rstar_m:812783212689883156> m-kız', 'Kız üye Kaydedersiniz')
.addField('<a:rstar_m:812783212689883156> m-say', 'Üye sayısına bakarsınız')
.addField('<a:rstar_m:812783212689883156> m-yardım', 'yardım menüsünü açar')

.setFooter('ϻ', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};