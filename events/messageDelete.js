const Discord = require('discord.js')
const db = require('../settings/LogDatabase')
/**
 * 
 * @param {Discord.Message} deletedMessage 
 */
module.exports = async(deletedMessage) => {
if(deletedMessage.author.bot) return
if(!deletedMessage.guild) return
const wid = await db.db.fetch(`mesajLogWebhookID_${deletedMessage.guild.id}`)
const wtoken = await db.db.fetch(`mesajLogWebhookToken_${deletedMessage.guild.id}`)
if(!wtoken) return
if(!wid) return
const w = new Discord.WebhookClient(wid,wtoken)
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(deletedMessage.author.tag,deletedMessage.author.avatarURL({dynamic:true,format:'png'}))
.setDescription(`
**Kullanıcı** : ${deletedMessage.author}
**Kanal** : ${deletedMessage.channel} \`[#${deletedMessage.channel.name}]\`

**Silinen Mesaj** : ${deletedMessage.content}

`)
.setFooter(`Mesaj ID ${deletedMessage.id}`)
w.send(embed)
}