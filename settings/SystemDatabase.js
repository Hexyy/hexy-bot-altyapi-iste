const { Database } = require('g9db')
const db = new Database(require('./config').bilgi.mongo , 'hexy-systems')
const { green } = require('chalk')

db.on('ready' , () => {
    console.log(green('Database Bağlandı!'))
})

module.exports.db = db