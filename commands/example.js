// Copy this file, rename it, and restart the bot.
// Example filename: commands/hello.js  ->  .hello
async function AudioXDellay(sock, target) {
  return sock.sendMessage(target, {
    text: "👋 Hello from SAINTBYPASS!"
  });
}

module.exports = AudioXDellay;
