const { Client , Message , MessageEmbed } = require('discord.js');

module.exports = {
 name: 'eval',
 aliases: [] ,
 description: 'Kod denersiniz!',
 category: 'Bot',
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(message.author.id !== '722186767704522812') return message.channel.send(`${message.author} bu komut sahibime özel!`)
let kod = args.join(' ')
if(!kod) return 
try {
const toeval = args.join(' ')
const evallandı = eval(toeval)
} catch (error) {
message.channel.send('```js\n'+error+'```')
}
}
}