import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['966558157240', '𝐊𝐈𝐑𝐀 𝐀𝐋𝐎𝐓𝐀𝐈𝐁𝐈', true],
] //Number of owners

global.mods = ['966558157240','966558157240'] 
global.prems = ['966558157240','966558157240']


global.APIs = { // API Prefix
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { // Apikey : 42x5rO7o \\
  'https://api-fgmods.ddns.net': '42x5rO7o'
}

// Sticker WM
global.ownername = '𝐊𝐈𝐑𝐀 𝐀𝐋𝐎𝐓𝐀𝐈𝐁𝐈'
global.botname = '𝐊𝐈𝐑𝐀--𝐁𝐎𝐓'
global.premium = 'false'
global.packname = '𝐊𝐈𝐑𝐀--𝐁𝐎𝐓'
global.author = 'Dev >> 𝐊𝐢𝐫𝐚'


global.wait = '*[■■■■■■■■■□] 90%*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'


global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias //

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
