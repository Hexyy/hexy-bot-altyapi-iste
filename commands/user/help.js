const Discord = require('discord.js')
module.exports = {
    name: 'yardım',
    description: 'Botta bulunan komutları gösterir.',
    aliases: ['help' , 'y' , 'h'],
    category: 'Kullanıcı',
    /** 
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     * @param {String[]} args
     */
run: async (client , message , args) => {
if(!args[0]) {
let yardımembed = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:menu:808681778465865758> Hexy Bot Yardım Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`\`\`\`fix
- .yardım öneri  | Öneri komutlarını gösterir.
\`\`\`\`\`\`diff\n
- .yardım müzik  | Müzik komutlarını gösterir.
\`\`\`\`\`\`fix
- .yardım bot    | Bot komutlarını gösterir.
\`\`\` \`\`\`diff\n
- .yardım otorol | Oto Rol komutlarını gösterir.
\`\`\`\`\`\`fix\n
- .yardım mod    | Moderasyon komutlarını gösterir.
\`\`\`\`\`\`diff
- .yardım genel  | Genel komutları gösterir.
\`\`\`\`\`\`fix\n
- .yardım log    | Log komutlarını gösterir.
\`\`\`\`\`\`diff\n
- .yardım sistem | Sistem komutlarını gösterir.                        \`\`\`\`\`\`                                   \`\`\`
`)
.addField(`Ek Bilgiler` , `Kategoriler hakkında bilgi almak için **.yardım <kategoriAdı>** şeklinde alabilirsin!\nEğer komut adında bilgi almak istiyorsan **.komut <komutAdı>** şeklinde alabailirsin!\nHexy Botta 2 adet prefix bulunur! Bunlar **hexy** ve **.**'dır.`)
message.channel.send(yardımembed)
} else {
if(args[0].toLowerCase() === 'öneri' || args[0].toLowerCase() === 'suggest') {
let öneriembed = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:oneri:808662833038229514> Hexy Bot Öneri Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Öneri Kanalı Ayarlamak İçin:**
<:oneri:808662833038229514> \`.öneri-kanal [ #kanal ]\`


<:emojiler:808703380401815598> **Öneri Kanalı Sıfırlamak İçin:**
<:oneri:808662833038229514> \`.öneri-kanal-sıfırla\`


<:emojiler:808703380401815598> **Öneri Yapmak İçin:**
<:oneri:808662833038229514> \`.öneri [ öneriniz ]\`


\`\`\`                                   \`\`\`
`)
message.channel.send(öneriembed)
} else {
if(args[0].toLowerCase() === 'müzik' || args[0].toLowerCase() === 'music') {
let müzik = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:muzik:808660672010387477> Hexy Bot Müzik Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Müziği Dinlemek Veya Döngüye Almak İçin:**
<:muzik:808660672010387477> \`.oynat [ şarkı adı ]\` **|** \`.döngü [ aç veya kapat ]\`


<:emojiler:808703380401815598> **Müziği Atlamak Veya Ses Miktarını Ayarlamak İçin:**
<:muzik:808660672010387477> \`.atla\` **|** \`.ses [ ses miktarı ]\`


<:emojiler:808703380401815598> **Müziği Durdurmak Veya Devam Ettirmek İçin:**
<:muzik:808660672010387477> \`.durdur\` **|** \`.devam\`


<:emojiler:808703380401815598> **Müzik Kuyruğuna Bakmak Veya Kuyruğu Temizlemek İçin:**
<:muzik:808660672010387477> \`.kuyruk\` **|** \`.kuyruğu-temizle\`


\`\`\`                                   \`\`\`
`)
message.channel.send(müzik)
}else{
if(args[0].toLowerCase() === 'bot' || args[0].toLowerCase() === 'robot') {
let bot = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:bot:808677222259884042> Hexy Bot Bot Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Botun Davet Linkini Almak İçin:**
<:bot:808677222259884042> \`.davet\`


<:emojiler:808703380401815598> **Botun İstatistiklerine Bakmak İçin:**
<:bot:808677222259884042> \`.istatistik\`


<:emojiler:808703380401815598> **Botun Pingine Bakmak İçin:**
<:bot:808677222259884042> \`.ping\`


\`\`\`                                   \`\`\`

        `)
        message.channel.send(bot)   
}else{
if(args[0].toLowerCase() === 'otorol' || args[0].toLowerCase() === 'autorole' || args[0].toLowerCase() === 'oto-rol' || args[0].toLowerCase() === 'oto' || args[0].toLowerCase() === 'auto-role') {
let otorol = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:otorol:808677412832804914> Hexy Bot Oto Rol Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Oto Rol Ayarlamak İçin:**
<:otorol:808677412832804914> \`.oto-rol-ayarla [ @rol ]\`


<:emojiler:808703380401815598> **Oto Rol Sıfırlamak İçin:**
<:otorol:808677412832804914> \`.oto-rol-sıfırla\`


\`\`\`                                   \`\`\`

`)
        message.channel.send(otorol)   
} else {
if(args[0].toLowerCase() === 'mod' || args[0].toLowerCase() === 'moderasyon' || args[0].toLowerCase() === 'moderation') {
let mod = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:ayar:808659156932231179> Hexy Bot Moderasyon Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Bir Üyeyi Banlamak İçin:**
<:ayar:808659156932231179> \`.ban [ @kullanıcı ] [ isteğe bağlı sebep ]\`


<:emojiler:808703380401815598> **Bir Üyenin Banını Açmak İçin:**
<:ayar:808659156932231179> \`.unban [ kullanıcı ID] [ isteğe bağlı sebep ]\`


<:emojiler:808703380401815598> **Belirtilen Miktarda Mesaj Silmek İçin:**
<:ayar:808659156932231179> \`.sil [ miktar ]\`


<:emojiler:808703380401815598> **Kanalı Kopyaladıktan Sonra Silmek İçin:**
<:ayar:808659156932231179> \`.nuke\`


<:emojiler:808703380401815598>  **Kanala Yavaş Mod Eklemek İçin:**
<:ayar:808659156932231179> \`.yavaş-mod [ miktar ]\`


\`\`\`                                   \`\`\`

`)
message.channel.send(mod)
} else {
if(args[0].toLowerCase() === 'log') {
let log = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:log:808659782676381726> Hexy Bot Log Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Mesaj Log Kanalını Ayarlamak İçin:**
<:log:808659782676381726> \`.mesaj-log [ #kanal ]\`


<:emojiler:808703380401815598> **Mesaj Log Sıfırlamak İçin:**
<:log:808659782676381726> \`.mesaj-log-sıfırla\`


<:emojiler:808703380401815598> **Kanal Log Kanalını Ayarlamak İçin:**
<:log:808659782676381726> \`.kanal-log [ #kanal ]\`


<:emojiler:808703380401815598> **Kanal Log Sıfırlamak İçin:**
<:log:808659782676381726> \`.kanal-log-sıfırla\`


<:emojiler:808703380401815598> **Rol Log Kanalını Ayarlamak İçin:**
<:log:808659782676381726> \`.rol-log [ #kanal ]\`


<:emojiler:808703380401815598> **Rol Log Sıfırlamak İçin:**
<:log:808659782676381726> \`.rol-log-sıfırla\`


\`\`\`                                   \`\`\`

`)
message.channel.send(log)
}else{
if(args[0].toLowerCase() === 'genel' || args[0].toLowerCase() === 'general') {

let genel = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:genel:808689178174423082> Hexy Bot Genel Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`

<:emojiler:808703380401815598> **Sunucu Hakkında Bilgi Almak İçin:**
<:genel:808689178174423082> \`.sunucu-bilgi\`


<:emojiler:808703380401815598> **Etiketlenen Kanal Hakkında Bilgi Almak İçin:**
<:genel:808689178174423082> \`.kanal-bilgi [ #kanal ]\`


<:emojiler:808703380401815598> **Etiketlenen Rol Hakkında Bilgi Almak İçin:**
<:genel:808689178174423082> \`.rol-bilgi [ @rol ]\`


<:emojiler:808703380401815598> **Etiketlenen Kullanıcı Hakkında Bilgi Almak İçin:**
<:genel:808689178174423082> \`.kullanıcı-bilgi\` **|** \`.kullanıcı-bilgi [ @kullanıcı ]\`


<:emojiler:808703380401815598> **Etiketlenen Kişinin Avatarını Almak İçin:**
<:genel:808689178174423082> \`.avatar\` **|** \`.avatar [ @kullanıcı ]\`


\`\`\`                                   \`\`\`

`)
message.channel.send(genel)
}else {
if(args[0].toLowerCase() === 'sistem' || args[0].toLowerCase() === 'system' || args[0].toLowerCase() === 'sistemler' || args[0].toLowerCase() === 'systems') {

let sistem = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('<:sistemler:808715933051912213> Hexy Bot Sistemler Menüsü')
.setDescription(`
\`\`\`                                   \`\`\`
                
<:emojiler:808703380401815598> **Sa As Sistemini Açmak İçin:**
<:sistemler:808715933051912213> \`.sa-as-aç\`
                
                
<:emojiler:808703380401815598> **Sa As Sistemini Kapatmak İçin:**
<:sistemler:808715933051912213> \`.sa-as-kapat\`


<:emojiler:808703380401815598> **Özel Mesaj Sistemini Açmak İçin:**
<:sistemler:808715933051912213> \`.özel-mesaj-aç [ mesaj ]\`


<:emojiler:808703380401815598> **Özel Mesaj Sistemini Kapatmak İçin:**
<:sistemler:808715933051912213> \`.özel-mesaj-kapat\`


<:emojiler:808703380401815598> **Fake Hesap Sistemini Açmak İçin:**
<:sistemler:808715933051912213> \`.fake-hesap-aç [ @rol ]\`


<:emojiler:808703380401815598> **Fake Hesap Sistemini Kapatmak İçin:**
<:sistemler:808715933051912213> \`.fake-hesap-kapat\`


\`\`\`                                   \`\`\`
`)
message.channel.send(sistem)

}
}}
} 
}}
}
}}

}}
