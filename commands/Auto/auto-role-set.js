const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const db = require('../../settings/AutoRoleDatabase')
module.exports = {
name: 'oto-rol-ayarla',
description: 'Oto verilecek rolü ayarlarsınız.',
aliases: ['auto-role-set','otorolayarla','autoroleset'],
category: 'Oto Rol',

/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Rolleri Yönet\` iznine sahip olmam gerekiyor!`))
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(embed(message,client).setDescription(`${message.author} bir rol etiketlemeyi unuttun!`))
if(message.guild.roles.cache.get(rol.id).position > message.guild.roles.cache.get(message.guild.me.roles.highest.id).position || message.guild.roles.cache.get(rol.id).position === message.guild.roles.cache.get(message.guild.me.roles.highest.id).position) return message.channel.send(embed(message,client).setDescription(`${message.author} etiketlediğin rol benim rolümün üstünde veya aynı roldeyim!`))

message.channel.send(başarılı(message,client).setDescription(`Oto Rol <@&${rol.id}> olarak ayarlandı!`))
await db.db.set(`autoRole_${message.guild.id}`,rol.id)
}

}
