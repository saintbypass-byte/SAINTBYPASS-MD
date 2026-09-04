const os = require("os");
const fs = require("fs");
const path = require("path");
const cheemsFeatures = require("./features/cheems");

const CHANNEL_URL = "https://t.me/sourcecodemarket666";
const REPO_URL = "https://github.com/saintbypass-byte/SAINTBYPASS-MD";
const OWNER_NAME = "𓆩 𝑺𝑨𝑰𝑵𝑻𝑩𝒀𝑷𝑨𝑺𝑺 𓆪";
const startedAt = Date.now();

const getChat = (m, jid) => jid || m?.key?.remoteJid || m?.chat;
const getSender = (m, sender) => sender || m?.sender || m?.key?.participant || m?.participant;
const formatUptime = (seconds) => {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
};
const cleanNumber = (value) => String(value || "").replace(/[^0-9]/g, "");
const isGroup = (jid) => String(jid || "").endsWith("@g.us");
const ownerNumbers = () => {
  const configured = global.settings?.ownerNumber || [];
  return configured.map(cleanNumber).filter(Boolean);
};
const isOwner = (m, sender) => {
  const senderNumber = cleanNumber(getSender(m, sender));
  const botNumber = cleanNumber(global.ownerNumber || global.sock?.user?.id);
  return ownerNumbers().includes(senderNumber) || (botNumber && senderNumber === botNumber);
};
const requireOwner = (m, sender, reply) => {
  if (isOwner(m, sender)) return true;
  reply("❌ This command is available to the bot owner only.");
  return false;
};
const requireGroup = (jid, reply) => {
  if (isGroup(jid)) return true;
  reply("❌ This command can only be used in a group.");
  return false;
};
const safeCalc = (expression) => {
  const value = String(expression || "").trim();
  if (!value || value.length > 80 || !/^[0-9+*/%().\s-]+$/.test(value)) return null;
  try {
    const result = Function(`"use strict"; return (${value})`)();
    return Number.isFinite(result) ? String(result) : null;
  } catch {
    return null;
  }
};

const commands = {
  ping: async ({ reply }) => reply(`🏓 PONG\n⚡ ${Date.now() - startedAt}ms\n◉ SAINTBYPASS ONLINE`),
  uptime: async ({ reply }) => reply(`⏱ BOT UPTIME\n${formatUptime(process.uptime())}`),
  status: async ({ reply }) => reply(`📡 STATUS\nBot: ONLINE\nNode: ${process.version}\nPlatform: ${process.platform}\nMemory: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`),
  time: async ({ reply }) => reply(`🕒 ${new Date().toLocaleString("en-GB", { timeZone: "Africa/Harare", hour12: false })} CAT`),
  date: async ({ reply }) => reply(`📅 ${new Date().toLocaleDateString("en-GB", { timeZone: "Africa/Harare", dateStyle: "full" })}`),
  jid: async ({ m, jid, reply }) => reply(`🆔 CHAT JID\n${getChat(m, jid)}`),
  owner: async ({ reply }) => reply(`👑 OWNER\n${OWNER_NAME}\nhttps://t.me/saintbypassstarlink`),
  repo: async ({ reply }) => reply(`📦 REPOSITORY\n${REPO_URL}`),
  channel: async ({ reply }) => reply(`📢 SOURCE CODE MARKET\n${CHANNEL_URL}\nTap the link to join voluntarily.`),
  premium: async ({ reply }) => reply(`💎 PREMIUM FEATURES\nUse .premiummenu to view the available utilities.`),
  textcount: async ({ args, reply }) => reply(`🔢 TEXT COUNT\nCharacters: ${String(args.join(" ")).length}\nWords: ${String(args.join(" ")).trim() ? String(args.join(" ")).trim().split(/\s+/).length : 0}`),
  reverse: async ({ args, reply }) => reply(String(args.join(" ")).split("").reverse().join("")),
  uppercase: async ({ args, reply }) => reply(String(args.join(" ")).toUpperCase()),
  lowercase: async ({ args, reply }) => reply(String(args.join(" ")).toLowerCase()),
  base64: async ({ args, reply }) => reply(args.length ? Buffer.from(args.join(" ")).toString("base64") : "Usage: .base64 <text>"),
  unbase64: async ({ args, reply }) => { try { reply(args.length ? Buffer.from(args.join(" "), "base64").toString("utf8") : "Usage: .unbase64 <text>"); } catch { reply("❌ Invalid Base64 text."); } },
  calc: async ({ args, reply }) => reply(safeCalc(args.join(" ")) || "Usage: .calc 2 + 2\nOnly basic arithmetic is allowed."),
  groupinfo: async ({ conn, jid, reply }) => { if (!requireGroup(jid, reply)) return; const meta = await conn.groupMetadata(jid); reply(`👥 GROUP INFO\nName: ${meta.subject || "Unknown"}\nMembers: ${(meta.participants || []).length}\nJID: ${jid}`); },
  admins: async ({ conn, jid, reply }) => { if (!requireGroup(jid, reply)) return; const meta = await conn.groupMetadata(jid); const admins = (meta.participants || []).filter((p) => p.admin).map((p) => `@${p.id.split("@")[0]}`); reply(`🛡 ADMINS\n${admins.join("\n") || "No admins found."}`, { mentions: (meta.participants || []).filter((p) => p.admin).map((p) => p.id) }); },
  members: async ({ conn, jid, reply }) => { if (!requireGroup(jid, reply)) return; const meta = await conn.groupMetadata(jid); reply(`👤 MEMBER COUNT\n${(meta.participants || []).length} members`); },
  premiummenu: async ({ reply }) => reply(`💎 SAINTBYPASS PREMIUM MENU\n\nUser tools:\n.ping  .uptime  .status  .time  .date\n.jid  .owner  .repo  .channel\n.textcount  .reverse  .uppercase  .lowercase\n.base64  .unbase64  .calc\n\nGroup tools:\n.groupinfo  .admins  .members\n\nOwner tools:\n.backup  .logs  .health  .announce\n\n📢 Join voluntarily: ${CHANNEL_URL}`),
  health: async ({ m, sender, reply }) => { if (!requireOwner(m, sender, reply)) return; reply(`✅ HEALTH CHECK\nCore: loaded\nProcess: ${process.pid}\nUptime: ${formatUptime(process.uptime())}\nMemory: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`); },
  logs: async ({ m, sender, reply }) => { if (!requireOwner(m, sender, reply)) return; reply("🧾 LOGS\nRuntime logging is active. Check the Termux console for detailed errors."); },
  backup: async ({ m, sender, reply }) => { if (!requireOwner(m, sender, reply)) return; const files = fs.readdirSync(process.cwd()).filter((f) => !["node_modules", ".git", "auth_info"].includes(f)); reply(`💾 BACKUP CHECK\n${files.length} project entries found.\nKeep auth_info private and never upload it.`); },
  announce: async ({ m, sender, args, reply }) => { if (!requireOwner(m, sender, reply)) return; const text = args.join(" ").trim(); reply(text ? `📣 ANNOUNCEMENT READY\n${text}` : "Usage: .announce <message>"); }
};

module.exports = { ...commands, ...cheemsFeatures };
