
import { Bot } from "grammy"
import { registerCommands } from "./src/commands.js"

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN تنظیم نشده است.")
}

const bot = new Bot(token)

registerCommands(bot)

bot.catch((err) => {
  console.error("Bot error:", err)
})

bot.start({
  onStart: (info) => {
    console.log(`Bot @${info.username} started successfully`)
  }
})
