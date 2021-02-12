const db = require('../settings/AutoRoleDatabase')
const Discord = require('discord.js')
/**
 * 
 * @param {Discord.GuildMember} member 
 */
module.exports = async(member) => {
    if(!member.guild.me.hasPermission('MANAGE_ROLES')) return
    let rol = await db.db.fetch(`autoRole_${member.guild.id}`)
    if(!rol) return
    let role = member.guild.roles.cache.get(rol)
    member.roles.add(role)
    
    }
