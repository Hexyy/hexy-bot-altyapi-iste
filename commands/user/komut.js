const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'command',
    description: 'Belirtilen komut hakkında bilgi verir.',
    aliases: ['komut'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!args[0]) {
message.channel.send(embed(message,client).setDescription(`${message.author} bir komut adı girmeyi unuttun!`))
} else {
if(args[0]) {
    let cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()))
    if(!cmd) return message.channel.send(`**${args[0]}** adında bir komut bulamadım!\nTüm komutlarıma bakmak için **h!yardım** yazabilirsin!`)
    let aliaes = cmd.aliases.join(' - ') || 'Yok!'
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(`${cmd.category} : ${cmd.name}` , client.user.displayAvatarURL({format: 'png'}))
    .setColor('BLUE')
    .addField('Komut Adı' , '```fix\n'+cmd.name+'```')
    .addField('Diğer Kullanımları' , '```fix\n'+aliaes+'```')
    .addField('Komut Açıklaması' , `\`\`\`fix\n${cmd.description}\`\`\` `)
    .addField('Kategori' , '```fix\n'+cmd.category+'```')
    )
}

}
}}