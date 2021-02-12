
const Discord = require('discord.js')
const { db } = require('../../settings/LogDatabase')
const başarılı = require('../../settings/Embed')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'kanal-log-sıfırla',
    description: 'kanal Log kanalını sıfırlarsınız.',
    aliases: ['channel-log-reset' , 'channellogreset' , 'kanallogsıfırla'],
    category: 'Log',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Webhookları Yönet\` iznine sahip olmam gerekiyor!`))
if(!await db.fetch(`kanalLogWebhookToken_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **kanal log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`kanalLogWebhookID_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **kanal log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`kanalLog_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **kanal log** sistemi zaten ayarlanmamış!`))

message.channel.send(başarılı(message,client).setDescription(`**Kanal Log** kanalı sıfırlandı!`))
let wid = await db.fetch(`kanalLogWebhookID_${message.guild.id}`)
let wtoken = await db.fetch(`kanalLogWebhookToken_${message.guild.id}`)
await (await client.fetchWebhook(`${wid}`,`${wtoken}`)).delete()
await db.delete(`kanalLogWebhookToken_${message.guild.id}`)
await db.delete(`kanalLogWebhookID_${message.guild.id}`)
await db.delete(`kanalLog_${message.guild.id}`)

}}