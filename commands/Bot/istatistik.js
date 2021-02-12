const Discord = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
module.exports = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    aliases: ['stats' , 'botbilgi' , 'bot-bilgi' , 'i'],
    category: 'Bot',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
let istatistik = new Discord.MessageEmbed()
.addField('▫️ Genel İstatistikler ▫️' , 
`Sunucu Sayısı: **${client.guilds.cache.size}**\nKullanıcı Sayısı: **${client.users.cache.size}**\nKanal Sayısı: **${client.channels.cache.size}**`
)
.addField('▫️ Bot Bilgileri ▫️',
`Çalışma Süresi: **${moment.duration(client.uptime).format('D [g] , H [sa] , m [dk] , s [sn]')}**\nPing: **${client.ws.ping}ms**`
)
.addField('▫️ Diğer Bilgiler ▫️' , 
`Geliştirici : **Hexy#1490**\nTasarımcı : **JustComeHarisTB#5456**`


)
.setColor('BLUE')
message.channel.send(istatistik)
}
}