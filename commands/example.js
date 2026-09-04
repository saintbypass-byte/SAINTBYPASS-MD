// Copy this file, rename it, and restart the bot.
// Example filename: commands/hello.js  ->  .hello
module.exports = async ({ reply, args }) => {
  const name = args.join(" ").trim() || "friend";
  return reply(`👋 Hello ${name} from SAINTBYPASS!`);
};
