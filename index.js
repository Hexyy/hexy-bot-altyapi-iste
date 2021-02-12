const Discord = require('discord.js');
const client = new Discord.Client();
const cords = require('cords-handler')
const cclient = new cords.Client()
const DB = require('./settings/SystemDatabase')
const { db } = require('./settings/LogDatabase')
const { bilgi } = require('./settings/config');
const komutDB = require('./settings/UserDatabase')
const ms = require('rhino-ms')

const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
let defaultprefix = '.'
const cmd = new cords.CommandHandler(client , cclient)
cmd.setCommandFolder('./commands')
cmd.setPrefix(defaultprefix)
cmd.setPrefix2(`<@!772070624327630878>`)
cmd.setPrefix3('hexy')
cmd.loader()

const event = new cords.EventHandler(client , cclient)
event.setEventFolder('./events')

event.loader()
/* 
----------------------------------------------------------
KANAL LOG KISMI
----------------------------------------------------------
*/ 
client.on('channelDelete' , async(channel) => {
    const wid = await db.fetch(`kanalLogWebhookID_${channel.guild.id}`)
    const wtoken = await db.fetch(`kanalLogWebhookToken_${channel.guild.id}`)
    if(!wtoken) return
    if(!wid) return
    const w = new Discord.WebhookClient(wid,wtoken)
    let kanal = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(a => a.entries.first())
    let adam = client.users.cache.get(kanal.executor.id)
const silindila = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor("Bir Kanal Silndi", client.user.displayAvatarURL({dynamic:true,format:'png'}))
.setDescription(`
**Kanalı Silen Kullanıcı** : <@${adam.id}> [\`${adam.tag}\`]
    
**Silinen Kanal Adı** : ${channel.name}

**Silinen Kanal Türü** : ${channel.type.replace('text' , 'Metin').replace('category' , 'Kategori').replace('voice' , 'Ses')}
`)
.setFooter(`Kanal ID ${channel.id}`)
w.send(silindila)    
})
client.on('channelCreate' , async (channel) => {
    if(!channel.guild) return
    const wid = await db.fetch(`kanalLogWebhookID_${channel.guild.id}`)
    const wtoken = await db.fetch(`kanalLogWebhookToken_${channel.guild.id}`)
    if(!wtoken) return
    if(!wid) return
    const w = new Discord.WebhookClient(wid,wtoken)
    let kanal = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(a => a.entries.first())
    let adam = client.users.cache.get(kanal.executor.id)
const silindila = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor("Bir Kanal Oluşturuldu", client.user.displayAvatarURL({dynamic:true,format:'png'}))
.setDescription(`
**Kanalı Açan Kullanıcı** : <@${adam.id}> [\`${adam.tag}\`]
    
**Açılan Kanal Adı** : ${channel.name}

**Açılan Kanal Türü** : ${channel.type.replace('text' , 'Metin').replace('category' , 'Kategori').replace('voice' , 'Ses')}
`)
.setFooter(`Kanal ID ${channel.id}`)
w.send(silindila)    
})
client.on('channelUpdate' , async(eski,yeni) => {
if(!yeni.guild) return
if(!eski.guild) return
    const wid = await db.fetch(`kanalLogWebhookID_${yeni.guild.id}`)
    const wtoken = await db.fetch(`kanalLogWebhookToken_${yeni.guild.id}`)
    if(!wtoken) return
    if(!wid) return
    const w = new Discord.WebhookClient(wid,wtoken)
    let kanal = await yeni.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(a => a.entries.first())
    let adam = client.users.cache.get(kanal.executor.id)
if(eski.name !== yeni.name) {
let cupdate = new Discord.MessageEmbed()
.setColor('YELLOW')
.setAuthor('Bir Kanal Adı Güncellendi' , client.user.displayAvatarURL({format: 'png'}))
.setDescription(`
**Kanalı Güncelleyen Kullanıcı** : <@${adam.id}> [\`${adam.tag}\`]

**Eski Kanal Adı** : ${eski.name}
**Yeni Kanal Adı** : ${yeni.name}


`).setFooter(`Kanal ID : ${yeni.id}`)
w.send(cupdate)} else if(eski.topic !== yeni.topic) {
const ee = new Discord.MessageEmbed()
.setColor('YELLOW')
.setAuthor('Bir Kanal Başlığı Güncellendi' , client.user.displayAvatarURL({format: 'png'}))
.setDescription(`
**Kanalı Güncelleyen Kullanıcı** : <@${adam.id}> [\`${adam.tag}\`]

**Eski Kanal Başlığı** : ${eski.topic}
**Yeni Kanal Başlığı** : ${yeni.topic}

**Kanal** : ${yeni}
`)
w.send(ee)
}
})
/* 
----------------------------------------------------------
ROL LOG KISMI
----------------------------------------------------------
*/ 
client.on('roleCreate' , async(role) => {
if(!role.guild) return
const wid = await db.fetch(`rolLogWebhookID_${role.guild.id}`)
const wtoken = await db.fetch(`rolLogWebhookToken_${role.guild.id}`)
if(!wid) return
if(!wtoken) return
const w = new Discord.WebhookClient(wid,wtoken)
if(!role.guild.me.hasPermission('VIEW_AUDIT_LOG')) return

let denetim = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(a => a.entries.first())
let adam = client.users.cache.get(denetim.executor.id)
let rol = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor('Bir Rol Oluşturuldu' , client.user.displayAvatarURL({ format: 'png' }))
.setDescription(`
**Rolü Oluşturan** : <@${adam.id}> [\`${adam.tag}\`]

**Rol ID** : ${role.id}
**Rol Oluşturulma Tarihi** : ${moment(role.createdAt).format('DD MMMM YYYY HH:mm')}
`)
w.send(rol)
})
client.on('roleDelete' , async (deletedRole) => {
    if(!deletedRole.guild) return
    const wid = await db.fetch(`rolLogWebhookID_${deletedRole.guild.id}`)
    const wtoken = await db.fetch(`rolLogWebhookToken_${deletedRole.guild.id}`)
    if(!wid) return
    if(!wtoken) return
    const w = new Discord.WebhookClient(wid,wtoken)
    if(!deletedRole.guild.me.hasPermission('VIEW_AUDIT_LOG')) return
    let denetim = await deletedRole.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(a => a.entries.first())
    let adam = client.users.cache.get(denetim.executor.id)
    let rol = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor('Bir Rol Silindi' , client.user.displayAvatarURL({ format: 'png' }))
    .setDescription(`
    **Rolü Silen** : <@${adam.id}> [\`${adam.tag}\`]
    
    **Silinen Rol Adı** : ${deletedRole.name}
    **Silinen Rol Rengi** : ${deletedRole.hexColor}
    **Silinen Rol ID** : ${deletedRole.id}
    `)
    w.send(rol)
})
client.on('roleUpdate' , async(oldRole,newRole)=>{
if(!oldRole.guild) return
if(!newRole.guild) return
const wid = await db.fetch(`rolLogWebhookID_${newRole.guild.id}`)
const wtoken = await db.fetch(`rolLogWebhookToken_${newRole.guild.id}`)
if(!wid) return
if(!wtoken) return
const w = new Discord.WebhookClient(wid,wtoken)
if(!oldRole.guild.me.hasPermission('VIEW_AUDIT_LOG')) return
let denetim = await newRole.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(a => a.entries.first())
let adam = client.users.cache.get(denetim.executor.id)
if(oldRole.name !== newRole.name) {
    let rolupdate = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setAuthor('Rol İsmi Güncellendi' , client.user.displayAvatarURL({format: 'png'}))
    .setDescription(`
**Rolün Adını Değiştiren** : <@${adam.id}> [\`${adam.tag}\`]

**Eski Rol Adı** : ${oldRole.name}
**Yeni Rol Adı** : ${newRole.name}
    `)
    w.send(rolupdate)
}
if(oldRole.hexColor !== newRole.hexColor) {
    let rolrenk = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setAuthor('Rol Rengi Güncellendi' , client.user.displayAvatarURL({format: 'png'}))
    .setDescription(`
**Rolün Rengini Değiştiren** : <@${adam.id}> [\`${adam.tag}\`]

**Eski Rol Rengi** : ${oldRole.hexColor}
**Yeni Rol Rengi** : ${newRole.hexColor}
    `)
    w.send(rolrenk)   
}
})
client.on('message' , async (message) => {
if(message.author.bot) return
if(!message.guild) return
let args = message.content.slice(defaultprefix.length).trim().split(/ +/g)
let cmd = args.shift().toLowerCase()
let command = client.commands.get(cmd)
if(!command) command = client.commands.get(client.aliases.get(cmd))

if(command) {
await komutDB.db.add(`komutKullanim_${message.author.id}` , 1)
}
})
setInterval(() => {
console.log(moment.duration(client.uptime).format('D [gün] , H [saat] , m [dakika] , s [saniye]'))
}, ms('6 saat'));
client.login(bilgi.token);

client.on('message' , async (message) => {
if(!message.guild) return
if(message.author.bot) return
if(message.channel.type !== 'text') return
if(!await DB.db.fetch(`saas_${message.guild.id}`)) return
if(await DB.db.fetch(`saas_${message.guild.id}`) === 'acik') {
if(message.content.toLowerCase() === 'slm' || message.content.toLowerCase() === 'selamun aleyküm' || message.content.toLowerCase() === 'sea' || message.content.toLowerCase() === 'selam' || message.content.toLowerCase() === 'sa') {
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag} Aleyküm selam , hoş geldin`,message.author.avatarURL({ dynamic: true , format: 'png' })))
}
}

})

client.on('guildMemberAdd' , async (member) => {
let acikmi = await DB.db.fetch(`ozelMesaj_${member.guild.id}`)
if(!acikmi) return
let mesaj = acikmi
.replace('{uye}' , member)
.replace('{sunucu-uye}' , member.guild.memberCount)
.replace('{sunucu-ad}' , member.guild.name)
.replace('{sunucu-id}' , member.guild.id)
member.send(mesaj).catch(e => console.log(`özel mesajda büyük bir ihtimal ile dm kapalı`))
})

client.on('guildMemberAdd' , async (member) => {
if(!await DB.db.fetch(`fakeRol_${member.guild.id}`)) return
let rol = member.guild.roles.cache.get(await DB.db.fetch(`fakeRol_${member.guild.id}`))
let kisi = client.users.cache.get(member.id)
let zaman = new Date().getTime() - kisi.createdAt.getTime()
if(zaman < 259200000) {
member.roles.add(rol)}
})