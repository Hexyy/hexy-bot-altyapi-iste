const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
module.exports = {
    name: 'sil',
    description: 'Mevcut kanalda belirtilen miktarda mesaj siler.',
    aliases: ['clear' , 'purge','temizle' ],
    category: 'Moderasyon',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olman gerekiyor!`))
if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed(message,client).setDescription(`${message.author} bu komutu kullanabilmek için \`Mesajları Yönet\` iznine sahip olmam gerekiyor!`))

let miktar = args[0]
if(!miktar) return message.channel.send(embed(message,client).setDescription(`Mesaj Silmek için geçerli bir sayı girmelisin!`))
if(isNaN(miktar)) return message.channel.send(embed(message,client).setDescription(`Mesaj Silmek için geçerli bir sayı girmelisin!`))
if(miktar > 100) return message.channel.send(embed(message,client).setDescription(`Bu sayı **100**'den büyük olamaz!`))
message.delete({
    timeout: 1,
    reason: 'Sil Komutu!'
})
message.channel.bulkDelete(miktar)
message.channel.send(`**${miktar}** adet mesajı uzay boşluğuna gönderdim! :rocket:`).then(mes => mes.delete({timeout: 1000}))
}
}