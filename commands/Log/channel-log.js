const Discord = require('discord.js')
const { db } = require('../../settings/LogDatabase')
const başarılı = require('../../settings/Embed')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'kanal-log',
    description: 'Kanal Log kanalını ayarlarsınız.',
    aliases: ['channel-log' , 'channellog' , 'kanallog'],
    category: 'Log',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Webhookları Yönet\` iznine sahip olmam gerekiyor!`))
if(await db.fetch(`kanalLog_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **kanal log** sistemi zaten ayarlı!`))
if(await db.fetch(`kanalLogWebhookID_${message.guild.idl}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **kanal log** sistemi zaten ayarlı!`))
if(await db.fetch(`kanalLogWebhookToken_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **kanal log** sistemi zaten ayarlı!`))
let kanal = message.mentions.channels.first() 
if(!kanal) return message.channel.send(embed(message,client).setDescription(`Bir kanal etiketlemeyi unuttun!`))
let w = kanal.createWebhook('Kanal Log' , {
reason: 'Kanal Log Sistemi',
avatar: client.user.avatarURL({format: 'png'})
})
message.channel.send(başarılı(message,client).setDescription(`Kanal Log kanalı ${kanal} olarak ayarlandı!`))
await db.set(`kanalLogWebhookToken_${message.guild.id}` ,(await w).token)
await db.set(`kanalLogWebhookID_${message.guild.id}` , (await w).id)
await db.set(`kanalLog_${message.guild.id}` , kanal.id)
}}