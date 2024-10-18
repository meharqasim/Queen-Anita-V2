//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923244556596";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1wZ1ZoZytQWW1XQVNzQzNjWVNWQlNycHBJOU1IZi9wQ0dZTFdEWXRrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDlJUjFzUGY0dm1NOXc4dkVVSkJ1WXRZMkRZWG96YmxLd3UvNDVuY2ZoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQlczUlpIdWR5REkrRkVIMk5uWlB2aWdYSmdSc0pNbmQwUi9CQ3ZHeWx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2cUpmZDlULzUrSTdpbnhJdXNzUFh2OVBaMENDU29tbXU3Z1haQTZhUERFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPczliQ2YwQ1JSemluS0x5K1lQL2JEQkRNRVVZZlNVeE5lQm1aeW54SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ2RFhCaklqZmg0TDg5bGxxaWRsMDlCNUE4a3VGME5TWGR6MCtyelp4U3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklVQWM3UHVzeGtScmp6ZHlyV3NiSXRid3c2ektoTXVacWQrNkxWSjcwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1JtaHdOZG53M21QZUFoREZkUG9tOFBZM0FiNVFuV1E2ZnhzTFdDR0dFQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtML2EvaEhEbVYySlNBZ1lsdzhidEN0ell4dVl1c0xsdTU3NytIRkdONytid0lXSGNyREpRUTYzYmVWaUJhT1ZrblU3Z1RIRk9PQVh4b3FlbngrWGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiI5RlNIU1cyOEpNNDBXbnFJRXRQVTFlS0JrUEhKZy9HbFZpQmxVL3RSejB3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQxNDAzNjA2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QTgxQ0U4RUE1RjU1QjU4ODU4MkFCQUYzMzhEQzJGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5MjkzMDYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MTQwMzYwNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDM2ODk2MkJCMzhEOTZBODE3QjY4NDQxQTI2RTAwMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTI5MzA2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDE0MDM2MDY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMwOTdERTc2NTJCNURGODA5QjdFM0Q5MUUxMjhDMTAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjkyOTMwNjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlpXzFXek11UTNtMk9fVE1tYkc1dGciLCJwaG9uZUlkIjoiNDQ5MGY1OWMtZGQ0MS00YTgzLWJhNWUtMDI2MWIyODhlOGY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJqQ0JWclFuQnBzWTdoNFo1L0VtcHZIeVZOQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUjZzeUg4OUJZV0ZuVUVoTGo5ZlB6ZVl0N2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlc5N1MyNUUiLCJtZSI6eyJpZCI6IjkyMzQxNDAzNjA2ODo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6In5GQVJJSSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW1zcElVQ0VQZlZ5N2dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid1BmUWlYai8yNlNqZDlWVDY3b0pKQkF0dFltQmE0UThneFdUL2pBQVowYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic3h6SVl4QTZSbU0rMjNYWVZ6amVCYXlnOTM3UHJncWdLUWluU0w1dzd6TjI5OU5nMGJxN3V1OStZRlMxQnB6MUh4ajFnNTVZWWI3QWRlN08wczFBQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImRlbnpPVStkdjNGNDJ2TXdHbi9GeURJTytEU3pUNmNrSnZiR0FJZzJxTS9vdEZsbDQvdHZjamlKNGJKaDJRYXJaWkxldDRKWG9RVkoyWXF1aVc3cmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDE0MDM2MDY4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0QzMElsNC85dWtvM2ZWVSt1NkNTUVFMYldKZ1d1RVBJTVZrLzR3QUdkSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI5MzA2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJZ0kifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Mehar_Qasim",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
