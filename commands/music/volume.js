const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const sa = require('../../settings/müzik')

module.exports = {
name: 'ses',
description: 'Çalan şarkının sesini ayarlasınız.',
aliases: ['volume'],
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
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} şarkı sesi ayarlamak için sesli kanalda olmalısın!`))
if(!sa.isPlaying(message)){
return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda her hangi bir şarkı çalmıyor!`))
}
let ses = args[0]
if(isNaN(ses)) return message.channel.send(errorEmbed.setDescription(`${message.author} lütfen geçerli bir sayı belirt!`))
if(ses > 300) return message.channel.send(errorEmbed.setDescription(`${message.author} kulak sağlığın için şarkı sesi **300** den fazla olamaz!`))
sa.setVolume(message , ses)
message.channel.send(başarı.setDescription(`Şarkı sesi **${ses}** olarak ayarlandı!`))
}
}