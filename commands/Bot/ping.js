const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Botun gecikme süresini gösterir.',
    aliases: ['ms' , 'gecikme'],
    category: 'Bot',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {

let ping2 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Gecikme süremi **${client.ws.ping}ms** olarak hesapladım.`)

message.channel.send(ping2)
}
}