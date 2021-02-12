const Discord = require('discord.js')
module.exports = {
    name: 'davet',
    description: 'Botun davet linkini gösterir.',
    aliases: ['invite' , 'bot-davet'],
    category: 'Bot',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
run: async (client , message , args) => {
message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`
<:davet:808656907354112010> **Yetkili** Davet Etmek İçin : [**Tıkla**](https://discord.com/oauth2/authorize?client_id=772070624327630878&scope=bot&permissions=805363774)

<:davet:808656907354112010> **Yetkisiz** Davet Etmek İçin : [**Tıkla**](https://discord.com/oauth2/authorize?client_id=772070624327630878&scope=bot&permissions=0)

`)

)
}
}