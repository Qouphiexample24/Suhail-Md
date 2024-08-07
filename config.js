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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_29_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM01QQWxsWWxJejNHS3VyS0ZjL1JTUUpnczhaU0o1Sk9JSHJNbStvdkk4OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1MDM3NDQwNTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhEMzA1MjA0NjExOTM1NDRCNzk2RTI1RUMzM0ZFMUM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA3MzM0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4YkpNTUl6VFRfQ0xCVnNKOUZ5RzhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkZTdkMjQ0LTI1MDItNGI1OC05Nzc3LTUxN2IyYTc1YzE4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDEwMCxcbiAgICAgIDE3NSxcbiAgICAgIDg4LFxuICAgICAgMTkwLFxuICAgICAgNTksXG4gICAgICAxNTUsXG4gICAgICA1NSxcbiAgICAgIDEwOSxcbiAgICAgIDIyMSxcbiAgICAgIDg1LFxuICAgICAgMjIzLFxuICAgICAgMjE4LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICAxMzQsXG4gICAgICAxNjYsXG4gICAgICAyMjYsXG4gICAgICA2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgNzgsXG4gICAgICAxMjYsXG4gICAgICAyMTQsXG4gICAgICAyNTIsXG4gICAgICAxNzgsXG4gICAgICAxMDgsXG4gICAgICA3NSxcbiAgICAgIDksXG4gICAgICAyMjIsXG4gICAgICAxOTUsXG4gICAgICAxMzUsXG4gICAgICAyMTUsXG4gICAgICA5MyxcbiAgICAgIDE0MyxcbiAgICAgIDY2LFxuICAgICAgMCxcbiAgICAgIDExLFxuICAgICAgODUsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxHQ0NQNzlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDM3NDQwNTc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg2NjI4MjkzNDY4Mzk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSFBvOElFRUxxRzBMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5bkpJWmo0TFJlcDllQlg1blJEeUF1QTVnK01uSGNoOEJHVjBaTFRXUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHovdEEzNGdDOUhOeVBWSnUydUxxc2ZQTGtZNjFYRkd2ajdxcXhkMW1jNElBTVQrTHNrNHYxWndYRng3a0xqTW5Ka3I0WkwxN2wxUnhaVExQRXFxQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmdHV21BTjUyNkdZazhtS3ltcXRCYk1nLzlGRGdJbTVKcGpRY0Y4ZXB1YlJkbjE5bW1HY0ZvS2dNMndYZElrSHNlb2xWbFQ4eFd5Z2pPTFhVb0xaQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTAzNzQ0MDU3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA3MzM0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVkcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWRwLmpzb24iOiAie1wia2V5RGF0YVwiOlwibXRDeVAyN3Z0NjVUZnVSR2VPWHF3THR1YWh5RVowa0ZOSEg0dEZsWFQ5ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjEyNzM3NDQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="

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
