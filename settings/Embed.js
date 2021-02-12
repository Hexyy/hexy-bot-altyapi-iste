const { Client , Message , MessageEmbed } = require('discord.js')

/**
 * @param {Client} client
 * @param {Message} message
 */
module.exports = (message , client) => {
    const başarılı = new MessageEmbed()
    .setColor('GREEN')
    .setAuthor(`Başarılı` , message.author.avatarURL({dynamic:true}))
    .setFooter(`Ping: ${client.ws.ping}ms` , client.user.displayAvatarURL({format: 'png'}))
    return başarılı
}


