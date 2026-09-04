const axios = require("axios");
const QRCode = require("qrcode");

const CHANNEL_URL = "https://t.me/sourcecodemarket666";
const REPO_URL = "https://github.com/saintbypass-byte/SAINTBYPASS-MD";
const requireGroup = (jid, reply) => {
  if (String(jid || "").endsWith("@g.us")) return true;
  reply("❌ This command can only be used in a group.");
  return false;
};

module.exports = {
  github: async ({ args, reply }) => {
    const query = args.join(" ").trim() || "saintbypass-byte";
    const response = await axios.get(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=1`, { timeout: 10000 });
    const repo = response.data.items?.[0];
    if (!repo) return reply("❌ No GitHub repository found.");
    return reply(`🐙 GITHUB\n${repo.full_name}\n⭐ ${repo.stargazers_count} stars\n🍴 ${repo.forks_count} forks\n${repo.html_url}`);
  },
  weather: async ({ args, reply }) => {
    const city = args.join(" ").trim();
    if (!city) return reply("Usage: .weather <city>");
    const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`, { timeout: 10000 });
    const current = response.data.current_condition?.[0];
    if (!current) return reply("❌ Weather data unavailable.");
    return reply(`🌤 WEATHER: ${city}\nCondition: ${current.weatherDesc?.[0]?.value || "Unknown"}\nTemperature: ${current.temp_C}°C\nFeels like: ${current.FeelsLikeC}°C\nHumidity: ${current.humidity}%`);
  },
  define: async ({ args, reply }) => {
    const word = args[0];
    if (!word) return reply("Usage: .define <word>");
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, { timeout: 10000 });
    const entry = response.data?.[0];
    const meaning = entry?.meanings?.[0];
    const definition = meaning?.definitions?.[0]?.definition;
    return reply(`📖 ${entry?.word || word}\n${meaning?.partOfSpeech || ""}\n${definition || "No definition found."}`);
  },
  quote: async ({ reply }) => {
    const response = await axios.get("https://api.quotable.io/random", { timeout: 10000 });
    return reply(`💬 “${response.data.content}”\n— ${response.data.author}`);
  },
  qr: async ({ args, reply, conn, jid, m }) => {
    const text = args.join(" ").trim();
    if (!text) return reply("Usage: .qr <text or link>");
    const dataUrl = await QRCode.toDataURL(text, { margin: 2, width: 600 });
    const image = Buffer.from(dataUrl.split(",")[1], "base64");
    return conn.sendMessage(jid, { image, caption: `📱 QR CODE\n${text}` }, { quoted: m });
  },
  poll: async ({ args, conn, jid, m, reply }) => {
    const input = args.join(" ").split("|").map((v) => v.trim()).filter(Boolean);
    if (input.length < 3) return reply("Usage: .poll Question | Option 1 | Option 2");
    return conn.sendMessage(jid, { poll: { name: input[0], values: input.slice(1), selectableCount: 1 } }, { quoted: m });
  },
  invite: async ({ conn, jid, reply }) => {
    if (!requireGroup(jid, reply)) return;
    const code = await conn.groupInviteCode(jid);
    return reply(`🔗 GROUP INVITE\nhttps://chat.whatsapp.com/${code}`);
  },
  groupdesc: async ({ conn, jid, reply }) => {
    if (!requireGroup(jid, reply)) return;
    const meta = await conn.groupMetadata(jid);
    return reply(`📝 GROUP DESCRIPTION\n${meta.desc || "No description set."}`);
  },
  links: async ({ reply }) => reply(`🔗 SAINTBYPASS LINKS\nTelegram: https://t.me/saintbypassstarlink\nChannel: ${CHANNEL_URL}\nRepository: ${REPO_URL}`)
};
