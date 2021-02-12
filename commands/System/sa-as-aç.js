const { Client , Message , MessageEmbed } = require('discord.js');
const embed = require('../../settings/ErrorEmbed');
const { db } = require('../../settings/SystemDatabase')
const başarılı = require('../../settings/Embed')
module.exports = {
 name: 'sa-as-aç',
 aliases: ['saasaç'] ,
 description: 'Sa As sistemini açarsınız.',
 category: 'Sistemler',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(await db.fetch(`saas_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **sa-as** sistemi zaten açık!`))

await db.set(`saas_${message.guild.id}` , 'acik')
message.channel.send(başarılı(message,client).setDescription(`**Sa As** sistemi açıldı!`))
}
}