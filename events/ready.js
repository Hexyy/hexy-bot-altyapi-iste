const Discord = require('discord.js')
const express = require('express')
const app = express()
const { blue } = require('chalk')
const path = require('path')

/**
 * @param {Discord.Client} client
 */

 module.exports = (client) => {



client.user.setPresence({
    activity: {
name: `Hexy Bot | ${client.commands.size} adet komut!`,
type: 'WATCHING'
    } , status: 'dnd'
})

console.log(blue(`Başarıyla Discord'a bağlandım!`))
 }