const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://yonip88568:71mO55hqwhNQ0L02@cluster0.bpcyj51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FF2ILXEEhrs4CiidWLBl9H";
global.website=process.env.GURL || "https://chat.whatsapp.com/FF2ILXEEhrs4CiidWLBl9H" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "233503744057" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,233503744057";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233503744057";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233503744057,233533717646";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_37_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiekIrR3FLRS9FbUVoN1hxVE1UMkV5VTU0bnphcUJuTG9acmNUU0trVm14ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnV1ZzdSN01Ta09mWnk2RU9jbXZZQVwiLFxuICBcInBob25lSWRcIjogXCJhODNiNTNjZC01MWUxLTQxYjUtYjczZi1iZjc3ODVhMzc3OTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICA2LFxuICAgICAgNTAsXG4gICAgICAxMDMsXG4gICAgICAyNyxcbiAgICAgIDIxNixcbiAgICAgIDIzOCxcbiAgICAgIDU4LFxuICAgICAgMzcsXG4gICAgICAyNixcbiAgICAgIDIyNyxcbiAgICAgIDE2LFxuICAgICAgMzYsXG4gICAgICAxNCxcbiAgICAgIDE5NCxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDE3NSxcbiAgICAgIDQ3LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgODgsXG4gICAgICAxMCxcbiAgICAgIDg0LFxuICAgICAgMTkzLFxuICAgICAgMTM4LFxuICAgICAgMjM3LFxuICAgICAgMTcsXG4gICAgICA5OSxcbiAgICAgIDE5NSxcbiAgICAgIDE1MSxcbiAgICAgIDEzOSxcbiAgICAgIDE0LFxuICAgICAgMTE0LFxuICAgICAgODgsXG4gICAgICAxNDksXG4gICAgICAyMTMsXG4gICAgICAyMTAsXG4gICAgICAxNTAsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBREhUVEdDU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTAzNzQ0MDU3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc4NjYyODI5MzQ2ODM5OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hQbzhJRUVNaWN6YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUeW5KSVpqNExSZXA5ZUJYNW5SRHlBdUE1ZytNbkhjaDhCR1YwWkxUV1JzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFGdSsxTC9tN1hlM1VxZTJHQjZaVTBDOC9qVHp1VmhIN2VqMWxhSUR6UzRMVkQ0YnBOT3VvVGZuWnQxcXk0ZjUweHF6QVhhVDNJaEZraUpDQmhZWUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFGTUdJb3p2QWV2ZUtOMFhpQWFOTEh5Q3dRYnZMaXFmcEQ1MmJTbnhKUFc3bkxwTURBakRiSTR4enRvKzRQZDAwSEhpckx3RXFlYk5hWFFRU0czUkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwMzc0NDA1Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMjcwMTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©qouphi²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Qouphi_Example",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "qouphi_example",
  ownername:process.env.OWNER_NAME|| "Qouphi example",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "mv2izxt1i0dav3sgj1as4gmdr8omoxej18x85xijgphhtntrnnaxw29lpl22q9pn",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
