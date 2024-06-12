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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_38_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlZWZLbkszNGZYWGxEWEwwY1FaVm1tVlRoV3lNVE5NVjUvaTNSalRicEtRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMOTFhYkl3MlR3Q0Y4SEhIQV9wdU9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxZDJiN2JkLWNmYTktNGM5MS1iMDJmLWJmMDNiYTY0OGE3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDg5LFxuICAgICAgMTU0LFxuICAgICAgMjA3LFxuICAgICAgNjgsXG4gICAgICA1NixcbiAgICAgIDE3MyxcbiAgICAgIDc0LFxuICAgICAgOCxcbiAgICAgIDE3NSxcbiAgICAgIDE5NixcbiAgICAgIDQ0LFxuICAgICAgOTYsXG4gICAgICAyNCxcbiAgICAgIDIzLFxuICAgICAgMjMxLFxuICAgICAgMjEzLFxuICAgICAgNjQsXG4gICAgICA1LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE3MyxcbiAgICAgIDE2NSxcbiAgICAgIDE2MCxcbiAgICAgIDE5NixcbiAgICAgIDU0LFxuICAgICAgMTI1LFxuICAgICAgODIsXG4gICAgICAyMjUsXG4gICAgICAyNDcsXG4gICAgICAyMjgsXG4gICAgICAxMzAsXG4gICAgICAxODAsXG4gICAgICAyMjQsXG4gICAgICA1LFxuICAgICAgMTk4LFxuICAgICAgMjMwLFxuICAgICAgMTUyLFxuICAgICAgMTU5LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdjhrUGNDRUlLZXA3TUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVMMFovdTdNQmNTQzVGTXBNU1ZWL3RtMGtRM0krMmp3eVovTWNlOGYyQmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTEFkOXhYajRkM09zdUpVS1VFeW9LQzJwUFNpc25ST1hianlGZk1xaS9qdEU5Z1lwQWlTSnR3dGNNdnZLcXMzQ0s3d2g1RVkvelNsN25TMHhiR0ZpRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidW9LbW1MZkVUR2liNG15U2dyNEJ4dW4wVnRJTmt6QS96L21nZGgwekJYbjdSalJIVDcxYXMydGxiY1ZFQVhjajk4cVBRdXlHWXVwVzRLL0xXUEd4QXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDM3NDQwNTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg2NjI4MjkzNDY4Mzk6M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwMzc0NDA1NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODIxMDMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhjaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGNpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWc0Q0ppZm1UTEwrcllwNW9WeERmcGtnS3pVMXpxZEpVNWJLSWpkWHpXZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODY3MTAwNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODIwOTQwNjU4MVwifSIKfQ==


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
