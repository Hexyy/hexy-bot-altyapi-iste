const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const db = require('../../settings/SuggestDatabase')
module.exports = {
name: 'öneri-kanal',
description: 'Öneri kanalını ayarlarsınız.',
category: 'Öneri',

aliases: ['suggest-channel','öneri-kanal-ayarla','suggest-channel-set'],

/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(embed(message , client).setDescription(`${message.author} bir kanal etiketleymeyi unuttun!`))
if(!kanal.permissionsFor(message.guild.members.cache.get(client.user.id).roles.highest.id).has("SEND_MESSAGES")) return message.channel.send(embed(message,client).setDescription(`Etiketlediğiniz kanalda benim yazı yazma yetkim bulunmamakta!`))

message.channel.send(başarılı(message,client).setDescription(`Öneri kanalı ${kanal} olarak ayarlandı!`))
await db.db.set(`suggestChannel_${message.guild.id}` , kanal.id)

}

}
