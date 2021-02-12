const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const moment = require('moment')
const ms = require('rhino-ms')
moment.locale('tr')
module.exports = {
    name: 'sunucu-bilgi',
    description: 'Etiketlediğiniz üyenin avatarını alırsınız.',
    aliases: ['server-info' , 'sunucubilgi' , 'serverinfo' , 'sb' , 'si'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!message.guild) return
let tarih = (await Date.now()) - message.guild.createdTimestamp
let region = message.guild.region
.replace('russia' , ':flag_ru:')
.replace('europe' , ':flag_eu:')
.replace('brazil' , ':flag_br:')
.replace('hongkong' , ':flag_hk:')
message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.guild.name,message.guild.iconURL({dynamic:true,format:'png'}))
.setThumbnail(message.guild.iconURL({dynamic:true,format:'png'}))
.addField('▫️ Sunucu Bilgileri ▫️',
`Sunucu Adı : **${message.guild.name}**\nSunucu Sahibi : **<@${message.guild.owner.id}>**\nSunucu ID : **${message.guild.id}**\nSunucu Bölgesi : **${region}**\nSunucu Kuruluş Tarihi :\n**${moment(message.guild.createdAt).format('DD MMMM YYYY')}**`
)
.addField('▫️ Kanal Bilgileri ▫️',
`Toplam Metin Kanalı : **${message.guild.channels.cache.filter(s => s.type === 'text').size}**\nToplam Ses Kanalı : **${message.guild.channels.cache.filter(s => s.type === 'voice').size}**\nToplam Kategori : **${message.guild.channels.cache.filter(s => s.type === 'category').size}**`
)
.addField('▫️ Üye Bilgileri ▫️',`
Toplam Üye Sayısı : **${message.guild.memberCount}**\nÇevrimiçi Üye Sayısı : **${message.guild.members.cache.filter(s => s.presence.status !== 'offline').size}**\nÇevrimdışı Üye Sayısı : **${message.guild.members.cache.filter(s => s.presence.status === 'offline').size}** 
`)
.setColor('BLUE')
)
message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Bütün Roller:**
${message.guild.roles.cache.filter(s => s.name !== '@everyone').map(s => `<@&${s.id}>`).join(',')}
`)



)
}}