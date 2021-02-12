const { Client , Message , MessageEmbed } = require('discord.js');

module.exports = {
 name: 'nuke',
 aliases: ['nuk'] ,
 description: 'Belirtilen kanalı kopyalarsınız!',
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
    let reason = args.slice(0).join(' ') || 'Sebep Belirtilmemiş!'
await channel.clone({
position: channel.position,
type: channel.type,
nsfw: channel.nsfw,
rateLimitPerUser: channel.rateLimitPerUser,
name: channel.name,
topic: channel.topic,
permissionOverwrites: channel.permissionOverwrites
}).then(c => c.send("Kanal Kopyalandı!\nhttps://imgur.com/LIyGeCR",))
await channel.delete(reason)


}}