const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const db = require('../../settings/SuggestDatabase')
module.exports = {
name: 'öneri-kanal-sıfırla',
description: 'Mevcut öneri kanalını sıfırlarsınız.',
aliases: ['suggest-channel-reset' , 'önerikanalsıfırla' , 'suggestchannelreset'],
category: 'Öneri',


/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!await db.db.fetch(`suggestChannel_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`${message.author} bu sunucuda **öneri** sistemi zaten ayarlı değil!`))
message.channel.send(başarılı(message, client).setDescription(`Öneri kanalı sıfırlandı!`))
await db.db.delete(`suggestChannel_${message.guild.id}`)
await db.db.delete(`suggest_${message.guild.id}`)
}

}
