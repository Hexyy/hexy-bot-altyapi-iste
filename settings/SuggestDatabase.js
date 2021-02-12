const { Database } = require('g9db')
const db = new Database(require('./config').bilgi.mongo , 'hexy-suggest')
const s = require('chalk')

db.on('ready' , () => {
    console.log(s.magenta('Öneri Database Bağlandı!'))
})

module.exports.db = db