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
║ 🛡 .automenu
║ 👥 .groupmenu
║ 🔧 .utilitymenu
║ 👑 .ownermenu
╚════════════════════╝

📢 Channel: ${CHANNEL_URL}`,
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
  automenu: verified.auto,
  groupmenu: verified.group,
  utilitymenu: verified.utility,
  premiummenu: verified.premium,
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
