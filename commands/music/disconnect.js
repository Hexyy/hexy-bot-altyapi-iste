const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const müzik = require('../../settings/müzik')
module.exports = {
name: 'ayrıl',
description: 'Bot şarkıyı bitirip sesli kanaldan ayrılır.',
aliases: ['disconnect','dc','leave'],
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
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} bir şarkı kapatabilmek için sesli kanalda olmalısın!`))
if(!message.guild.me.voice.channel) return message.channel.send(errorEmbed.setDescription(`${message.author} ben her hangi bir sesli kanalda bulunmuyorum!`))
if(!müzik.isPlaying(message)) {
return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda her hangi bir şarkı çalmıyor!`))
} else {
müzik.stop(message)
await message.react('👋')
message.channel.send(başarı.setDescription(`Şarkıyı durdurup sesli odadan ayrıldım!`))
}


}
}