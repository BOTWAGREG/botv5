const os = require('os');

let handler = async (m, { conn, text, usedPrefix, command }) => {
 
  let serverInfo = `┌  ◦ *Server Info:*
│  ◦ *Hostname:* ${process.env.npm_package_name}
│  ◦ *Type:* ${os.type()}
│  ◦ *Platform:* ${os.platform()}
│  ◦ *Release:* ${os.release()}
│  ◦ *Home:* ${os.homedir()}
│  ◦ *TmpFolder:* ${os.tmpdir()}
│  ◦ *AuhtFolder:* /${authFile}
│  ◦ *Uptime:* ${Func.toDate(`${os.uptime() * 1000}`)}
│  ◦ *Total Memory:* ${Math.round(os.totalmem() / 1024 / 1024)} MB
│  ◦ *Free Memory:* ${Math.round(os.freemem() / 1024 / 1024)} MB
└——`;

  conn.reply(m.chat, serverInfo, m,adReply);
}
handler.help = ["ping"].map(a => a + ' *[Info speed]*')
handler.tags = ["info","main"]
handler.command = ["ping"]
module.exports = handler