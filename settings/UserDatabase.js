const { Database } = require('g9db')
const db = new Database(require('./config').bilgi.mongo , 'hexy-users')
const s = require('chalk')

db.on('ready' , () => {
    console.log(s.cyan('Kullanıcı Database Bağlandı!'))
})

module.exports.db = db