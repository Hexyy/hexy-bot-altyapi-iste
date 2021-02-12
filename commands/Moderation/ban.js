const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'ban',
    description: 'Belirtilen üyeyi sunucudan banlar.',
    aliases: ['yasakla' , 'banla'],
    category: 'Moderasyon',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Üyeleri Yasakla\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Üyeleri Yasakla\` iznine sahip olmam gerekiyor!`))
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
if(!user) return message.channel.send(embed(message,client).setDescription(`${message.author} bir üye etiketleymeyi unuttun!`))
if(user.bannable) return message.channel.send(embed(message,client).setDescription(`Bu kullanıcı banlanamaz!`))
if(user.id === '772070624327630878') return
if(user.id === message.author.id) return message.channel.send(embed(message,client).setDescription(`Kendini banlayamazsın!`))
if(message.guild.members.cache.get(user.id).roles.highest.position > message.guild.members.cache.get(user.id).roles.highest.position) return message.channel.send(embed(message,client).setDescription(`Bu üyeyi banlayamam!`))
let reason = args.slice(1).join(" ") || 'Sebep Belirtilmemiş!'
let ban = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${user.tag} banlandı!`,user.avatarURL({dynamic:true,format: 'png'}))
.setDescription(`Sebep : **${reason}**`)
message.channel.send(ban)
message.guild.members.cache.get(user.id).ban({
reason: `${reason}`
})
}
}
