const Discord = require('discord.js')
module.exports = {
    name: 'avatar',
    description: 'Etiketlediğiniz üyenin avatarını alırsınız.',
    aliases: ['pp' , 'av'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
let renk = message.guild.members.cache.get(user.id).displayHexColor

if(!renk) renk = 'BLUE'
message.channel.send(new Discord.MessageEmbed()
.setColor("BLUE")
.setImage(user.avatarURL({dynamic:true,format:'png'}))

)
}}