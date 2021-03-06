const Discord = require('discord.js')
const { db } = require('../../settings/LogDatabase')
const başarılı = require('../../settings/Embed')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'rol-log',
    description: 'Rol Log kanalını ayarlarsınız.',
    aliases: ['role-log' , 'rolelog' , 'rollog'],
    category: 'Log',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Webhookları Yönet\` iznine sahip olmam gerekiyor!`))
if(!message.guild.me.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Denetim Kaydını Görüntüle\` iznine sahip olmam gerekiyor!`))
if(await db.fetch(`rolLog_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **rol log** sistemi zaten ayarlı!`))
if(await db.fetch(`rolLogWebhookID_${message.guild.idl}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **rol log** sistemi zaten ayarlı!`))
if(await db.fetch(`rolLogWebhookToken_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **rol log** sistemi zaten ayarlı!`))
let kanal = message.mentions.channels.first() 
if(!kanal) return message.channel.send(embed(message,client).setDescription(`Bir kanal etiketlemeyi unuttun!`))
let w = kanal.createWebhook('Rol Log' , {
reason: 'Rol Log Sistemi',
avatar: client.user.avatarURL({format: 'png'})
})
message.channel.send(başarılı(message,client).setDescription(`Rol Log kanalı ${kanal} olarak ayarlandı!`))
await db.set(`rolLogWebhookToken_${message.guild.id}` ,(await w).token)
await db.set(`rolLogWebhookID_${message.guild.id}` , (await w).id)
await db.set(`rolLog_${message.guild.id}` , kanal.id)
}}