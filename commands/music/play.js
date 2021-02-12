const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const sa = require('../../settings/müzik')

module.exports = {
name: 'oynat',
description: 'Belirttiğiniz şarkıyı bot çalar.',
aliases: ['p' , 'play','çal'],
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
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} bir şarkı açabilmek için sesli kanalda olmalısın!`))


let müzik = args.slice(0).join(' ')
if(!müzik) return message.channel.send(errorEmbed.setDescription(`${message.author} açacağım şarkıyı yazmayı unuttun!`))
sa.play(message , müzik, {firstResult: true})
}
}