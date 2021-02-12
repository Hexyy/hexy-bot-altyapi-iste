const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const başarılı = require('../../settings/Embed')
const db = require('../../settings/SuggestDatabase')
module.exports = {
name: 'öneri',
description: 'Bir öneri yaparsınız.',
aliases: ['suggest' ],
category: 'Öneri',

/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client 
 * @param {String[]} args
 */
 run: async (client , message ,args) => {
let kanal = await db.db.fetch(`suggestChannel_${message.guild.id}`)
if (!kanal) return message.channel.send(embed(message,client).setDescription(`${message.author} bu sunucuda **öneri** sistemi aktif değil!`))
let öneri = args.join(' ')
if (!öneri) return message.channel.send(embed(message,client).setDescription(`${message.author} önerini belirtmeyi unuttun!`))
if (öneri > 1999) return message.channel.send(embed(message,client).setDescription(`${message.author} göndereceğin öneri **1999** karakterden fazla olamaz!`))
await db.db.add(`suggest_${message.guild.id}` , 1)
let c = message.guild.channels.cache.get(kanal)
c.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(message.author.tag,message.author.avatarURL({dynamic:true}))
.setTitle(`Öneri #${await db.db.fetch(`suggest_${message.guild.id}`)}`)
.setDescription(öneri)).then(function(msg) {
msg.react('👍')
msg.react('👎')
})
}

}
