const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const moment = require('moment')
moment.locale('tr')
module.exports = {
    name: 'rol-bilgi',
    description: 'Etiketlediğiniz üyenin avatarını alırsınız.',
    aliases: ['role-info' , 'rolbilgi' , 'roleinfo' ,'rb' , 'ri'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
if(!rol) return message.channel.send(embed(message,client).setDescription(`Bir rol etiketletmeyi unuttun!`))
let rolbilgi = new Discord.MessageEmbed()
.setColor('BLUE')
.addField('▫️ Rol Bilgileri ▫️',
`Rol Adı : **${rol.name}**\nRol ID : **${rol.id}**\nRolde Ki Üye Sayısı : **${rol.members.size}**\nRol Rengi : **${rol.hexColor}**\nOluşturulma Tarihi : **${moment(rol.createdAt).format('DD MMMM YYYY')}**`
).setDescription(`<@&${rol.id}>`)
message.channel.send(rolbilgi)
message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Rolde ki Üyeler : ${message.guild.roles.cache.get(rol.id).members.map(s => `<@${s.id}>`)}`)


)
}}