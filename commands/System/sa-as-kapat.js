const { Client , Message , MessageEmbed } = require('discord.js');
const embed = require('../../settings/ErrorEmbed');
const { db } = require('../../settings/SystemDatabase')
const başarılı = require('../../settings/Embed')
module.exports = {
 name: 'sa-as-kapat',
 aliases: ['saaskapat'] ,
 description: 'Sa As sistemini kapatırsınız.',
 category: 'Sistemler',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!await db.fetch(`saas_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **sa-as** sistemi zaten kapalı!`))

await db.delete(`saas_${message.guild.id}`)
message.channel.send(başarılı(message,client).setDescription(`**Sa As** sistemi kapatıldı!`))
}
}