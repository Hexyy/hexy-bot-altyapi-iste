const { Client , Message , MessageEmbed } = require('discord.js');
const embed = require('../../settings/ErrorEmbed');
const { db } = require('../../settings/SystemDatabase')
const başarılı = require('../../settings/Embed')
module.exports = {
 name: 'özel-mesaj-kapat',
 aliases: ['özel-mesaj-sıfırla' , 'özelmesajkapat' , 'özelmesajsıfırla'] ,
 description: 'Özel Mesaj Sistemini kapatırsınız.',
 category: 'Sistemler',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!await db.fetch(`ozelMesaj_${message.guild.id}`)) return message.channel.send(embed(message,client).setDescription(`Bu sunucuda **özel mesaj** sistemi zaten kapalı!`))

await db.delete(`ozelMesaj_${message.guild.id}`)
message.channel.send(başarılı(message,client).setDescription(`**Özel Mesaj** sistemi kapatıldı!`))
}
}