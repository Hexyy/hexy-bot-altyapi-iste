const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const müzik = require('../../settings/müzik')
module.exports = {
name: 'döngü',
description: 'Bot şarkıyı tekrarlar.',
aliases: ['loop'],
category: 'Müzik',

/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
let errorEmbed = embed(message , client)
let başarı = başarılı(message , client)
let voice = message.member.voice.channel
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} bir şarkı durdurabilmek için sesli kanalda olmalısın!`))
if(!message.guild.me.voice.channel) return message.channel.send(errorEmbed.setDescription(`${message.author} ben her hangi bir sesli kanalda bulunmuyorum!`))
if(!müzik.isPlaying(message)) {
return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda her hangi bir şarkı çalmıyor!`))
} else {
if(!args[0]) { return message.channel.send(errorEmbed.setDescription(`Lütfen geçerli bir argüman girin!\n\n\`.döngü aç\n.döngü kapat\` `))
} else {
if(args[0].toLowerCase() === "aç" || args[0].toLowerCase() === "aktif") {
müzik.setRepeatMode(message , true)
message.channel.send(başarı.setDescription(`Şarkı döngüsü aktif edildi!`))
} else if(args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "deaktif") {
if(müzik.setRepeatMode(message,false)) return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda şarkı döngüsü zaten kapalı!`)) 
müzik.setRepeatMode(message,false)
message.channel.send(başarı.setDescription(`Şarkı döngüsü deaktif edildi!`))

}
}
}
}}