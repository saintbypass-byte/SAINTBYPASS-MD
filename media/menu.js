const CHANNEL_URL = "https://t.me/sourcecodemarket666";
const REPO_URL = "https://github.com/saintbypass-byte/SAINTBYPASS-MD";

function statusBox() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { timeZone: "Africa/Harare", hour12: false });
  const date = now.toLocaleDateString("en-GB", { timeZone: "Africa/Harare" });
  return `╭━━━ *𝗦𝗔𝗜𝗡𝗧 𝗕𝗬𝗣𝗔𝗦𝗦-𝗠𝗗* ━━━╮
┃ ☣ 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹: 𝗔𝗖𝗧𝗜𝗩𝗘
┃ 🧬 𝗢𝘄𝗻𝗲𝗿: 𝗦𝗔𝗜𝗡𝗧𝗕𝗬𝗣𝗔𝗦𝗦
┃ ⏳ 𝗨𝗽𝘁𝗶𝗺𝗲: ${Math.floor(process.uptime())}s
┃ 📅 𝗗𝗮𝘁𝗲: ${date}
┃ 🕒 𝗧𝗶𝗺𝗲: ${time} CAT
╰━━━━━━━━━━━━━━━━━━╯`;
}

const verified = {
  main: `${statusBox()}

╔═❖•⊰ *𝗩𝗘𝗥𝗜𝗙𝗜𝗘𝗗 𝗠𝗘𝗡𝗨* ⊱•❖═╗
║ 🧬 .premiummenu
║ 🐾 .cheemsmenu
║ 🛡 .automenu
║ 👥 .groupmenu
║ 🔧 .utilitymenu
║ 👑 .ownermenu
║ 🧩 .custommenu
╚════════════════════╝

📢 Channel: ${CHANNEL_URL}`,
  custom: `${statusBox()}

╔═❖•⊰ *𝗢𝗡𝗘-𝗙𝗜𝗟𝗘 𝗖𝗨𝗦𝗧𝗢𝗠 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦* ⊱•❖═╗
║ 📁 Add one file: commands/<name>.js
║ ▶️ Use it with: .<name>
║ 🧩 Example: .example
║ 🔄 Restart after adding a file
║ ✅ Supports async function(sock, target)
║ ✅ Supports module.exports({ reply, args })
╚════════════════════╝

📖 See commands/README.md for the format.`,
  owner: `${statusBox()}

╔═❖•⊰ *𝗢𝗪𝗡𝗘𝗥 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 🔒 .self / .public
║ ✅ .health
║ 🧾 .logs
║ 💾 .backup
║ 📣 .announce <message>
║ 💎 .premiummenu
╚════════════════════╝`,
  auto: `${statusBox()}

╔═❖•⊰ *𝗔𝗨𝗧𝗢 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 🔗 .antilink
║ 🛡 .antilinkick
║ 🧹 .antidelete
║ 👁 .autostatus
║ 💬 .autoreact
║ 👋 .autogreet
║ ⌨️ .autotyping
║ 🎙 .autorecording
║ 📖 .autoread
╚════════════════════╝`,
  group: `${statusBox()}

╔═❖•⊰ *𝗚𝗥𝗢𝗨𝗣 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 👥 .groupinfo
║ 🛡 .admins
║ 👤 .members
║ 🚪 .kick
╚════════════════════╝`,
  utility: `${statusBox()}

╔═❖•⊰ *𝗨𝗧𝗜𝗟𝗜𝗧𝗬 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 🏓 .ping   ⏱ .uptime   📡 .status
║ 🕒 .time   📅 .date    🆔 .jid
║ 👑 .owner  📦 .repo    📢 .channel
║ 🔢 .textcount <text>   🔁 .reverse <text>
║ 🔠 .uppercase <text>   🔡 .lowercase <text>
║ 🔐 .base64 <text>       🔓 .unbase64 <text>
║ 🧮 .calc <expression>
╚════════════════════╝`,
  cheems: `${statusBox()}

╔═❖•⊰ *𝗦𝗔𝗜𝗡𝗧𝗕𝗬𝗣𝗔𝗦𝗦 𝗣𝗥𝗢 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 🐙 .github <search>
║ 🌤 .weather <city>
║ 📖 .define <word>
║ 💬 .quote
║ 📱 .qr <text or link>
║ 📊 .poll Question | Option 1 | Option 2
║ 🔗 .invite   📝 .groupdesc
║ 🌐 .links
╚════════════════════╝

📢 Channel: ${CHANNEL_URL}`,
  premium: `${statusBox()}

╔═❖•⊰ *𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗢𝗢𝗟𝗦* ⊱•❖═╗
║ 🏓 .ping       ⏱ .uptime       📡 .status
║ 🕒 .time       📅 .date         🆔 .jid
║ 👑 .owner      📦 .repo         📢 .channel
║ 🔢 .textcount  🔁 .reverse      🔠 .uppercase
║ 🔡 .lowercase  🔐 .base64       🔓 .unbase64
║ 🧮 .calc       👥 .groupinfo    🛡 .admins
║ 👤 .members
╚════════════════════╝

📢 Join voluntarily: ${CHANNEL_URL}`
};

const unavailable = `${statusBox()}

This category has no verified handlers enabled.
Use .premiummenu to view the working commands.`;

module.exports = {
  menu: verified.main,
  ownermenu: verified.owner,
  custommenu: verified.custom,
  automenu: verified.auto,
  groupmenu: verified.group,
  utilitymenu: verified.utility,
  premiummenu: verified.premium,
  cheemsmenu: verified.cheems,
  downloadmenu: unavailable,
  aimenu: unavailable,
  githubmenu: unavailable,
  logomenu: unavailable,
  toolsmenu: unavailable,
  textmenu: unavailable,
  exploitsmenu: unavailable,
  photomenu: unavailable,
  reactmenu: unavailable,
  gamemenu: unavailable,
  funmenu: unavailable,
  animemenu: unavailable
};
