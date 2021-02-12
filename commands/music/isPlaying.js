const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const sa = require('../../settings/müzik')

module.exports = {
name: 'şu-an-çalan',
description: 'Kuyrukta ki şarkıları temizler.',
aliases: [],
category: 'Müzik',
/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
run: async(client , message ,args) => {
let errorEmbed = embed(message , client)
let başarı = başarılı(message , client)
let voice = message.member.voice.channel
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} şarkı kuyruğunu temizlemek için sesli kanalda olmalısın!`))
if(!sa.isPlaying(message)) {
    return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda her hangi bir şarkı çalmıyor!`))
    } else {
let wq = sa.createProgressBar(message,{
timecodes: 1000
})
message.channel.send(wq)
}
}
}