const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const sa = require('../../settings/müzik')

module.exports = {
name: 'kuyruk',
description: 'Sunucuda ki şarkı kuyruğunu gösterir.',
aliases: ['queue'],
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
if(!voice) return message.channel.send(errorEmbed.setDescription(`${message.author} şarkı kuyruğuna bakmak için sesli kanalda olmalısın!`))
if(!sa.isPlaying(message)) {
    return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda her hangi bir şarkı çalmıyor!`))
    } else {
let kuyruk = sa.getQueue(message)
if(!kuyruk) return message.channel.send(errorEmbed.setDescription(`${message.author} bu sunucuda şarkı kuyruğu bulunmuyor!`))
let k = kuyruk.tracks.map((tracks , i) => {
return `${i === 0 ? '1:' : `${i+1}:`} [**\`${tracks.title}\`**](${tracks.url})`
}).join('\n')  
message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${message.author.tag} Bu sunucuda ki Şarkı Kuyruğu` , message.author.avatarURL({dynamic:true}))
.setDescription(k)
)
}
}
}