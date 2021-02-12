const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const moment = require('moment')
moment.locale('tr')
module.exports = {
    name: 'kanal-bilgi',
    description: 'Etiketlediğiniz üyenin avatarını alırsınız.',
    aliases: ['channel-info' , 'kanalbilgi' , 'channelinfo' ,'cb' , 'ci'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
    
let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if(!kanal) return message.channel.send(embed(message,client).setDescription(`Bir kanal etiketletmeyi unuttun!`))
let channel = message.guild.channels.cache.get(kanal.id)
let kanalbilgi = new Discord.MessageEmbed()
.setColor('BLUE')
.addField('▫️ Kanal Bilgileri ▫️' , 
`Kanal Adı : **${kanal.name}**\nKanal ID : **${kanal.id}**\nKanalı Görebilen Üye Sayısı : **${kanal.members.size}**\nKanal Türü : **${kanal.type.replace('text' , 'Metin').replace('voice' , 'Ses').replace('category' , 'Kategori')}**\nOluşturulma Tarihi : **${moment(channel.createdAt).format('DD MMMM YYYY')}**`
)
message.channel.send(kanalbilgi)
message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Kanalı Görebilen Üyeler : ${kanal.members.map(s => `<@${s.id}>`)}`)


)
}}