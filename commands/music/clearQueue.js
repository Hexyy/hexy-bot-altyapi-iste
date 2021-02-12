const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const sa = require('../../settings/müzik')

module.exports = {
name: 'kuyruğu-temizle',
description: 'Kuyrukta ki şarkıları temizler.',
aliases: ['clear-queue'],
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
let kuyruk = sa.getQueue(message)
if(!kuyruk) {return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda şarkı kuyruğu bulunmuyor!`))
    } else {
sa.clearQueue(message)
message.channel.send(başarı.setDescription(`Kuyrukta ki bütün şarkılar silindi!`))
    }

}
}
}