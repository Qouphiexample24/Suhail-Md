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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_06_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHl3NXhHdHNMUXFFaXZ4Y1g5dHpZd0ZNSFpaSmdaalUzS240M1RaMnkvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicUZkMW9pSnJUVzY0Y1gwUnQyZUs0d1wiLFxuICBcInBob25lSWRcIjogXCI3MzdjODk5ZS02MTYxLTQwMDctYTNiNS05MDU4OGExYjFkODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxMjQsXG4gICAgICA0MixcbiAgICAgIDE0LFxuICAgICAgMzQsXG4gICAgICA5MyxcbiAgICAgIDc0LFxuICAgICAgMTUsXG4gICAgICAyMTgsXG4gICAgICAxOTIsXG4gICAgICAxMzUsXG4gICAgICAxNjMsXG4gICAgICAzMixcbiAgICAgIDEzOSxcbiAgICAgIDYsXG4gICAgICAxMjAsXG4gICAgICAxODUsXG4gICAgICAxMyxcbiAgICAgIDIzNixcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICA2MCxcbiAgICAgIDMwLFxuICAgICAgMzcsXG4gICAgICAxODUsXG4gICAgICAyNTQsXG4gICAgICAzMSxcbiAgICAgIDIzOCxcbiAgICAgIDIyOSxcbiAgICAgIDE0MyxcbiAgICAgIDIzNyxcbiAgICAgIDIzLFxuICAgICAgMTgyLFxuICAgICAgMjI0LFxuICAgICAgMzUsXG4gICAgICAxMjUsXG4gICAgICAyMSxcbiAgICAgIDIwLFxuICAgICAgODcsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlREN0ExOUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUwMzc0NDA1NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3ODY2MjgyOTM0NjgzOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyOGtQY0NFUERWdTdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUwwWi91N01CY1NDNUZNcE1TVlYvdG0wa1EzSSsyand5Wi9NY2U4ZjJCYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPdVhidHk4aFpOZ1BHckxaT0F2cHZwTlZqeUFoNmFPdHd4S3ptTFNXQ1RPMi9JWVVMMC9IWjFUdzFQeTdEdERpZGhyTHRaVUIwMXZBN0d2Mkp2QzhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMb0RHNkVDN2tzZlFQOGRMaHFsWnNFcFFvWTBNUUE0WkxWY2x3WTlBRUFRcjNjOU9DampKS2t2cmV5clNWUXluN0szNC9NLzB2Zk8wYllBWldoQ1lEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDM3NDQwNTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY0NDc5OTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


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
  KOYEB_API : process.env.KOYEB_API  || "p2tl8t3dx8mz4bx989veygzce2tnajeuddac5xp39zkhen6ofxm8n2330fyz7u3z",

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
