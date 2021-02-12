const { Client , Message , MessageEmbed } = require('discord.js');
const embed = require('../../settings/ErrorEmbed');
const { db } = require('../../settings/SystemDatabase')
const başarılı = require('../../settings/Embed')
module.exports = {
 name: 'özel-mesaj-aç',
 aliases: ['özel-mesaj-ayarla' , 'özelmesajaç' , 'özelmesajayarla'] ,
 description: 'Özel Mesaj Sistemini açarsınız. (Sunucuya gelenlere belirtilen mesajı gönderir.)',
 category: 'Sistemler',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Yönetici\` iznine sahip olman gerekiyor!`))
let mesaj = args.slice(0).join(' ')
if(!mesaj) return message.channel.send(embed(message,client)
.setDescription(`
Bir mesaj girmeyi unuttun!

<:sistemler:808715933051912213> **Bilmen Gerekenler:**
{uye} - Sunucuya katılan üyeyi etiketler.
{sunucu-uye} - Sunucuda ki üye sayısını söyler.
{sunucu-ad} - Sunucunun adını söyler.
{sunucu-id} - Sunucunun ID'sini söyler.

<:sistemler:808715933051912213> **Örnek:**
.özel-mesaj-aç {uye} **{sunucu-ad}** adlı sunucumuza hoş geldin seninle beraber **{sunucu-uye}** kişi olduk!
`))

message.channel.send(başarılı(message,client).setDescription(`**Özel Mesaj** aktif edildi.\n\n<:sistemler:808715933051912213> Özel Mesajı\n**${mesaj}** olarak kaydettim.`))
await db.set(`ozelMesaj_${message.guild.id}` , mesaj)
}
}