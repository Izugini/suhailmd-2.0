const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161877384";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_19_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDM1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJudW5VYTNFTEVxKzN3c0VtZXR3dWRiU01EQ1VNWnFEOHl3QkFXYVU5SjM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjE4NzczODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4OEQ3N0ZGQUY0RTI5RjlFRkE3Qjg0OEU0MEI4ODYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDYwMDM5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFQWlSS29MalRpR1lKOG10MkpwejZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3YmUxYmMyLTY2MGItNGYxZS1iYzAwLTI5YWY4ZTFkYWVmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDY4LFxuICAgICAgMTI1LFxuICAgICAgMTk3LFxuICAgICAgMTk1LFxuICAgICAgOTEsXG4gICAgICAyMTAsXG4gICAgICAyMzQsXG4gICAgICA2OCxcbiAgICAgIDIwNSxcbiAgICAgIDE4MSxcbiAgICAgIDU2LFxuICAgICAgMjAwLFxuICAgICAgMTgxLFxuICAgICAgMjUsXG4gICAgICA3MixcbiAgICAgIDExNyxcbiAgICAgIDIyOSxcbiAgICAgIDMzLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDcsXG4gICAgICAxNTgsXG4gICAgICAxNDQsXG4gICAgICAyMTcsXG4gICAgICA0MixcbiAgICAgIDE1LFxuICAgICAgMjA4LFxuICAgICAgODMsXG4gICAgICAxMDQsXG4gICAgICAxOTEsXG4gICAgICAxNCxcbiAgICAgIDczLFxuICAgICAgOTUsXG4gICAgICAyMTYsXG4gICAgICAzNyxcbiAgICAgIDI1MCxcbiAgICAgIDExMyxcbiAgICAgIDE5NSxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQ1E2OUU4WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MTg3NzM4NDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkZHwnZGT8J2RpF9tYW5uefCTg7VcIixcbiAgICBcImxpZFwiOiBcIjE2ODcxMTA5NjkyMjEzMTo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYnRsOU1GRU1DN203a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZkNGsrR0ZMVW5FSGJEVFZtQTBPSjZURkhZV1BOSDRzT0grNWhON1ZYeUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEdtQnNLZTlFVkJ1RUhjNXBta1JxekJNVVhWcndUeVVuYzdEWXZnVnc3eVlyS1o2SVFkRHplcTNEb3NzeFNZK0lZeHAvMlowejBBbmFwelJ4T2ZvQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmNTOFZDRjVFMkJhUTJBM2owbjc2SXZsZ1hRcGZmWEJsQld5S045U0YvbUtxN0dyUTZLZEJPYXFYUWZtSEkwS0RZVjVYMVlLeUlkUW5sSGtmTjRNaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MTg3NzM4NDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjAwMzg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝑑𝑓𝑤_manny𓃵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
