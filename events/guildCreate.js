const { MessageEmbed, Guild } = require('discord.js')

/**
 * 
 * @param {Guild} guild 
 */
module.exports = async (guild) => {
    let channelToSend
    guild.channels.cache.forEach((channel) => {
        if (
        channel.type === "text" && 
        !channelToSend && 
        channel.permissionsFor(guild.me).has('SEND_MESSAGES')) channelToSend = channel
})
if(!channelToSend) return
channelToSend.send(new MessageEmbed()
.setTitle(`<a:merhaba:808695234900393994> ${guild.name} Merhaba`)
.setDescription(`
\`\`\`                                  \`\`\`
Beni sunucuna davet ettiğin için teşekkürler!

Beni kullanmak için 2 adet prefixim bulunuyor.
Bunlar **hexy** ve **.**'dır.

Bütün komutlarıma bakmak için **.yardım** yazabilirsin.

\`\`\`                                  \`\`\`

`)
.setColor('BLUE')

)
}