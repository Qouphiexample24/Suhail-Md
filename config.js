const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://gboadi117:0241512315gideon@cluster0.4mycjly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FF2ILXEEhrs4CiidWLBl9H";
global.website=process.env.GURL || "https://chat.whatsapp.com/FF2ILXEEhrs4CiidWLBl9H" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "233533717646" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,233533717646";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233533717646";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_26_04_12_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUxYeER2ZTRCSDhvdFhGY2lFZ3lJamhUbTl1aDE2V0I1blVyN3RPekNsZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImlCbWw2Q21MWERCMFRXaFZPZHdsOTIvOXNWd3o4aXUxbGsydlYzZ1NsVGs9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVU5OckpFY0FCV3ZxY0ROK2VwR2tuM3h6eitGL3pXMWd3T3U2Z1kwcXhYWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdKd1ErenZPZUdkNjdOdUJnVEVDQU9ZRmVkQjNGRko1c00vV21OeFBpQUk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNk1xcEdjcG5zdS8yV2xRSHNQSFlsa29ZR3RDb2pVRVhhd1ZSbnFMb3VXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjlHb2s0aGJzc0hjZ1ZqNThlR3Y0YUdQS2tDcHprVksxK3hhVjFVSTEyUnM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJRUZCWU1rY2liaGU2ek84cCtUZVU4Nm1NM0RpKytvcERqNGQzM0xxaWxFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNlhlODhpYVBmTm1YV1d4d1NuUExQWE92MStQV09WSWVnMkx6d3F6R1VTST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHdVBiT2RwbkN6d3BwakNIVDBXSU9FT0pCVmFKK3RVYVF1YjlmbXlCbXZKSmZ1WkloWDdteSs5b2FrcjNYOEFXL0t1MDA2SFdpbXJOYVJ6TkhRSitnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjM2LFwiYWR2U2VjcmV0S2V5XCI6XCJnWGx5WXV0UitIVXlERUtMb3JWcjdUWjNnUWlEZDZsdkNsNmZ5L1lLMGJzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjMzNTMzNzE3NjQ2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkJFMEVGRTM4NDM2MzUwMzkxMjI2OEM0RUVGQkRFNEE1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MjgzODF9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJETzV0S0RaaFQyR1hlY3FQb1llRVd3XCIsXCJwaG9uZUlkXCI6XCJmYmRmZWI1OS0wYTU5LTRiOTItYjgzZS0zYTk3MmRlZWJlNzhcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJjcnNLbWxsY2RlZ2FpeFZ3NWtHVDZKOTdiST1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIyZy9HU28raGdETnd2Y3NJdzM2UEJuMFd0NVk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiOFAxU1ZLTU5cIixcIm1lXCI6e1wiaWRcIjpcIjIzMzUzMzcxNzY0NjoyQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCLFhsOjxZnFhMOixZVoIHHDtcO7cGjDriDDqnjDpG1wxLzDqlwiLFwibGlkXCI6XCIxMjAxNjkyNzU4OTE5MDU6MkBsaWRcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0tuZjNKc0ZFUExzNUxBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ3Z0RhcnpWL29UcDh3alU0aWgzT0kzRU9PR1dEUDE5d3ZRRG1DNFhsK3dBPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiRWxxckhWTkZERXFXY1dEc29iTzFldzg1eFRZZmdCc0RMOTl1YUhpaDZ2NjUwYWNRb3BlZ29aSHNEZldYUlEzd1ZyVzBuQmliQUJ4andyVDJicHVPQ3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJhTUtZVDNYc3pidms5UGNaRit4eEc2S016eVJMTmY0czB0dzVRNFc4THppODRYbm1SQUdPZG1ET0FlYm5hd2RNK3VjNzROVjUrTEp3RlVjWFQ0Y21ndz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjMzNTMzNzE3NjQ2OjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCY0lBMnE4MWY2RTZmTUkxT0lvZHppTnhEamhsZ3o5ZmNMMEE1Z3VGNWZzQVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI5MjgzNzQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSVVZXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVVZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3c5NnNXYmJlQUh0MFh4Y3hmbzJ2UVduWGRqNWVlWFQrajlsdkxSb0pnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDAwMzE5OTEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI5MjgzNzk3OTZcIn0iCn0=" ;


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
