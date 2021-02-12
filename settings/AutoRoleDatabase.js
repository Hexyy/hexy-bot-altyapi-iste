const { Database } = require('g9db')
const db = new Database(require('./config').bilgi.mongo , 'hexy-autorole')
const sa = require('chalk')

db.on('ready' , () => {
    console.log(sa.bgRed('Oto Rol Komut Database Bağlandı!'))
})

module.exports.db = db