const { Client , Message , MessageEmbed } = require('discord.js');
const embed = require('../../settings/ErrorEmbed');
const { db } = require('../../settings/SystemDatabase')
const başarılı = require('../../settings/Embed')
module.exports = {
 name: 'fake-hesap-aç',
 aliases: ['fakehesapaç' ] ,
 description: 'Fake Hesap Sistemini açarsınız. (Sunucuya katılan üyenin hesabı 3 günden önce açılmışsa belirtilen rolü verir.)',
 category: 'Sistemler',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Rolleri Yönet\` iznine sahip olmam gerekiyor!`))
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(embed(message,client).setDescription(`${message.author} bir rol etiketlemeyi unuttun!`))
if(message.guild.roles.cache.get(rol.id).position > message.guild.roles.cache.get(message.guild.me.roles.highest.id).position || message.guild.roles.cache.get(rol.id).position === message.guild.roles.cache.get(message.guild.me.roles.highest.id).position) return message.channel.send(embed(message,client).setDescription(`${message.author} etiketlediğin rol benim rolümün üstünde veya aynı roldeyim!`))

await db.set(`fakeRol_${message.guild.id}` , rol.id)
message.channel.send(başarılı(message,client).setDescription(`Fake Hesap rolü **${rol}** olarak ayarlandı!`))

}
}