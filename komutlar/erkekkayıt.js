const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
    const narcosmisafir = message.guild.roles.cache.find(r => r.id === "812752412493873155"); 
    const nkayıterkek = message.guild.roles.cache.find(r => r.id === "812744425548546058"); 
  
  const log = message.guild.channels.cache.find(c => c.id === "812757791144017920"); 
  const tag = "ϻ";
  if(!message.member.roles.cache.array().filter(r => r.id === "812743133199597648")[0]) { 
    return message.channel.send("Botumu Bozucan Knk Yetkin Yok Napıyosun:D");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir ``Yaş`` Girmelisin.**")
    c.roles.add(nkayıterkek)
    c.roles.remove(narcosmisafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
     const narcoscode = new Discord.MessageEmbed()
    .setDescription(`
    <a:dhearts1_m:813291296411090964> Kayıt Başarılı <a:dhearts1_m:813291296411090964>

    <a:btick_m:812915298628927488> Kaydı Yapılan Üye: **${c.user.tag}**
    <a:btick_m:812915298628927488> Değiştirilen İsim: ${tag} ${nick} | ${yas}
    <a:btick_m:812915298628927488> Verilen Rol: ${nkayıterkek}
`)
         .setFooter('ϻ Erkek Kayıt Sistemi')
     message.channel.send(narcoscode)
     
    

    const narcosc = new Discord.MessageEmbed()
    .setDescription(`
**Bir Erkek Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

<a:btick_m:812915298628927488> Kaydı Yapılan Üye: **${c.user.tag}**
<a:btick_m:812915298628927488> Kaydı Yapan Yetkili: **${message.author.tag}**
<a:btick_m:812915298628927488> Değiştirilen İsim: ${tag} ${nick} | ${yas}

**Rol Bilgileri Aşağıda Yazmakta.**

<a:btick_m:812915298628927488> Alınan Rol: ${narcosmisafir}
<a:btick_m:812915298628927488> Verilen Rol: ${nkayıterkek}

`)
    .setFooter('ϻ Erkek Kayıt Sistemi')
   
    log.send(narcosc)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e","bay"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   
