const { Client  , MessageEmbed } = require('discord.js')
const client = new Client()
const { Player } = require('discord-player')
const player = new Player(client)
const moment = require('moment')
moment.locale('tr')
player.on('trackStart' , (message , track) => {
message.channel.send(new MessageEmbed()
.setColor('GREEN')
.setDescription(`
**[${track.title}](${track.url})** isimli şarkı ${message.author} tarafından açıldı!
`)
.setAuthor(`${track.title}` , track.thumbnail  , track.url)
.setThumbnail(track.thumbnail)
)
})
player.on('trackAdd' , (message , queue , track) => {
message.channel.send(new MessageEmbed()
.setColor('YELLOW')
.setDescription(`
**[${track.title}](${track.url})** isimli şarkı ${message.author} tarafından kuyruğa eklendi!

`)
    .setThumbnail(track.thumbnail)
 )
})
player.on('queueEnd' , (message , queue) => {
message.channel.send(new MessageEmbed()
.setColor('BLUE')
.setDescription(`
Kuyrukta ki bütün şarkılar oynatıldı! Sesli odadan ayrılıyorum!
`)
)
})

module.exports = player