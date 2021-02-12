const Discord = require('discord.js')
const embed = require('../../settings/ErrorEmbed')
const moment = require('moment')
const { db } = require('../../settings/UserDatabase')
const { EasyCord } = require('cords-handler')
moment.locale('tr')
module.exports = {
    name: 'kullanıcı-bilgi',
    description: 'Etiketlediğiniz üyenin avatarını alırsınız.',
    aliases: ['user-info' , 'kullanıcıbilgi' , 'userinfo' , 'whois' , 'kb' , 'ui'],
    category: 'Kullanıcı',

    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     * @param {EasyCord} izicord
     */
run: async (client , message , args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
const izicord = new EasyCord(client)
let now = Date.now()
let data = (await now) - user.createdTimestamp
let üye = message.guild.members.cache.get(user.id)
let date = (await now) - üye.joinedTimestamp
let rolü = message.guild.members.cache.get(user.id).roles.highest.id
if(rolü === '@everyone') rolü = 'Rolü Yok'
let komut = await db.fetch(`komutKullanim_${user.id}`)
if(komut === null) komut = 0
message.channel.send(new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(`${user.tag}` , user.displayAvatarURL({ format: 'png' , dynamic: true }))
.addField(`▫️ Kullanıcı Adı ▫️`  , user.username)
.addField('▫️ ID ▫️' , user.id)
.addField('▫️ Etiketi ▫️' , '#'+user.discriminator)
.addField('▫️ Avatar URL\'si ▫️' , `[Tıkla](${user.avatarURL({format: 'png' , dynamic:true})})`)
.addField('▫️ Discorda Katılım Tarihi ▫️' , `**${await moment.duration(data).format('Y [yıl] D [gün] H [saat] m [dakika] s [saniye]')}** **Önce** - (${moment(user.createdAt).format('DD MMMM YYYY')})` )
.addField('▫️ Sunucuya Katılım Tarihi ▫️' , `**${await moment.duration(date).format('Y [yıl] D [gün] H [saat] m [dakika] s [saniye]')}** **Önce** - (${moment(üye.joinedAt).format('DD MMMM YYYY')})`)
.addField('▫️ En Yüksek Rolü ▫️' , `<@&${rolü}>`)
.addField('▫️ Bütün Rolleri ▫️' , message.guild.members.cache.get(user.id).roles.cache.filter(s => s.name !== '@everyone').map(s => `<@&${s.id}>`).join(',') || 'Rolü Yok!')
.addField('▫️ Kullandığı Komut Sayısı ▫️', komut)
)
}}