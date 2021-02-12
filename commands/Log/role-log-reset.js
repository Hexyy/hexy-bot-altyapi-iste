
const Discord = require('discord.js')
const { db } = require('../../settings/LogDatabase')
const başarılı = require('../../settings/Embed')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'rol-log-sıfırla',
    description: 'Rol Log kanalını sıfırlarsınız.',
    aliases: ['role-log-reset' , 'rolelogreset' , 'rollogsıfırla'],
    category: 'Log',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Webhookları Yönet\` iznine sahip olmam gerekiyor!`))
if(!await db.fetch(`rolLogWebhookToken_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **rol log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`rolLogWebhookID_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **rol log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`rolLog_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **rol log** sistemi zaten ayarlanmamış!`))

message.channel.send(başarılı(message,client).setDescription(`**Rol Log** kanalı sıfırlandı!`))
let wid = await db.fetch(`rolLogWebhookID_${message.guild.id}`)
let wtoken = await db.fetch(`rolLogWebhookToken_${message.guild.id}`)
await (await client.fetchWebhook(`${wid}`,`${wtoken}`)).delete()
await db.delete(`rolLogWebhookToken_${message.guild.id}`)
await db.delete(`rolLogWebhookID_${message.guild.id}`)
await db.delete(`rolLog_${message.guild.id}`)

}}