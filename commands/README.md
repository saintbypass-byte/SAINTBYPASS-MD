# One-file custom commands

Create one JavaScript file inside this folder. The filename becomes the command name.

For example, create `commands/hello.js`:

```js
module.exports = async ({ reply, args }) => {
  const name = args.join(" ") || "friend";
  return reply(`Hello ${name} from SAINTBYPASS!`);
};
```

After restarting the bot, use `.hello Alex`. The command receives `conn`, `m`, `args`, `command`, `jid`, `isGroup`, `sender`, and `reply`. A file may export either a function or `{ run: async (context) => {} }`.
