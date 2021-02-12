const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const db = require('../../settings/AutoRoleDatabase')
module.exports = {
name: 'oto-rol-sıfırla',
description: 'Oto verilecek rolü sıfırlarsınız.',
aliases: ['auto-role-reset','otorolsıfırla','autorolereset'],
category: 'Oto Rol',

/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!await db.db.fetch(`autoRole_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`${message.author} bu sunucu oto rol zaten ayarlanmamış!`))

message.channel.send(başarılı(message,client).setDescription(`Oto verilecek rol sıfırlandı!`))
await db.db.delete(`autoRole_${message.guild.id}`)
}
}
