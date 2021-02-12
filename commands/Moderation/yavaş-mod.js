const { Client , Message , MessageEmbed } = require('discord.js'),
embed = require('../../settings/ErrorEmbed'),
ms = require('rhino-ms')
module.exports = {
 name: 'yavaş-mod',
 aliases: ['slow-mode' ,'yavaşmod' , 'slowmode'] ,
 description: 'Mevcut kanalın yavaş mod süresini ayarlarsınız.',
 category: 'Moderasyon',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Kanallları Yönet\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Kanallları Yönet\` iznine sahip olmam gerekiyor!`))
let channel = message.channel
let slow = args[0]

if(isNaN(slow)) return channel.send(embed(message,client).setDescription('Lütfen geçerli bir zaman girin!'))
if(slow > 21600) return channel.send(embed(message,client).setDescription(`Bu sayı **21600**'den büyük olamaz!`))
channel.setRateLimitPerUser(slow,'Yavaş Mod!')
return channel.send(`${channel} kanalının yavaş modu **${slow}** olarak ayarlandı!`)
}
}