const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "ISI APIKEY LU AMBIL DI OPENAI.COM" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V12', // ISI APIKEY LU
}

global.namabot = "JER-BOTZ MD" // UBAH JADI NAMA LU
global.namaowner = "JER" // NAMA OWNER
global.footer_text = "© JER-BOTZ MD" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283136394680'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.script = ("https://youtu.be/GyHK5BVyBeQ NO ENC ? BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/KTXtrESxZCg8aTUbP62c6d" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/KTXtrESxZCg8aTUbP62c6d`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlygrub = true // Bebas, kalo gua untuk mengurangi spam aja sih
// - \\
// PEMISAH \\
global.packname = '© JER-BOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh JER OFC' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})