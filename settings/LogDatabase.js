const { Database } = require('g9db')
const db = new Database(require('./config').bilgi.mongo , 'hexy-logs')
const { red } = require('chalk')

db.on('ready' , () => {
    console.log(red('Log Database Bağlandı!'))
})

module.exports.db = db