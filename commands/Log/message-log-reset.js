
const Discord = require('discord.js')
const { db } = require('../../settings/LogDatabase')
const başarılı = require('../../settings/Embed')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'mesaj-log-sıfırla',
    description: 'Mesaj Log kanalını sıfırlarsınız.',
    aliases: ['message-log-reset' , 'messagelogreset' , 'mesajlogsıfırla'],
    category: 'Log',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Webhookları Yönet\` iznine sahip olmam gerekiyor!`))
if(!await db.fetch(`mesajLogWebhookToken_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **mesaj log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`mesajLogWebhookID_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **mesaj log** sistemi zaten ayarlanmamış!`))
if(!await db.fetch(`mesajLog_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucu da **mesaj log** sistemi zaten ayarlanmamış!`))

message.channel.send(başarılı(message,client).setDescription(`**Mesaj Log** kanalı sıfırlandı!`))
let wid = await db.fetch(`mesajLogWebhookID_${message.guild.id}`)
let wtoken = await db.fetch(`mesajLogWebhookToken_${message.guild.id}`)
await (await client.fetchWebhook(`${wid}`,`${wtoken}`)).delete()
await db.delete(`mesajLogWebhookToken_${message.guild.id}`)
await db.delete(`mesajLogWebhookID_${message.guild.id}`)
await db.delete(`mesajLog_${message.guild.id}`)

}}