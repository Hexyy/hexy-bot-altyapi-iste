const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'unban',
    description: 'ID\'si girilen üyenini banını açar.',
    aliases: [ 'un-ban'],
    category: 'Moderasyon',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Üyeleri Yasakla\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Üyeleri Yasakla\` iznine sahip olmam gerekiyor!`))
let user = args[0]
if(isNaN(user)) return message.channel.send(embed(message,client).setDescription(`${message.author} bir üye etiketleymeyi unuttun!`))
let reason = args.slice(1).join(' ') || 'Sebep Belirtilmemiş!'
message.guild.members.unban(user,reason)
message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`**${user}** ID'li üyenin banı ${message.author} tarafından **${reason}** sebebiyle açıldı! `))
}
}