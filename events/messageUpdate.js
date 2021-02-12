const Discord = require('discord.js')
const db = require('../settings/LogDatabase')
/**
 * 
 * @param {Discord.Message} oldMessage
 * @param {Discord.Message} newMessage
 */
module.exports = async(oldMessage , newMessage) => {
if(newMessage.author.bot) return
if(oldMessage.author.bot) return
if(!newMessage.guild) return
if(!newMessage.guild) return
const wid = await db.db.fetch(`mesajLogWebhookID_${newMessage.guild.id}`)
const wtoken = await db.db.fetch(`mesajLogWebhookToken_${newMessage.guild.id}`)
if(!wtoken) return
if(!wid) return
const w = new Discord.WebhookClient(wid,wtoken)
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(newMessage.author.tag,newMessage.author.avatarURL({dynamic:true,format:'png'}) , newMessage.url)
.setDescription(`
**Kullanıcı** : ${newMessage.author}
**Kanal** : ${newMessage.channel} \`[#${newMessage.channel.name}]\`

**Önce** : ${oldMessage.content}
**Sonra** : ${newMessage.content}

[\`Mesaja Git\`](${newMessage.url})
`)
.setFooter(`Mesaj ID ${newMessage.id}`)
w.send(embed)
}