
export function registerCommands(bot) {

  bot.command("start", async (ctx) => {
    await ctx.reply(
      "سلام! 👋\nبه فروشگاه دیجیتال ما خوش اومدی.",
      {
        reply_markup: {
          keyboard: [
            ["🛍 فروشگاه"],
            ["👤 حساب کاربری", "📞 پشتیبانی"]
          ],
          resize_keyboard: true
        }
      }
    )
  })

  bot.command("help", async (ctx) => {
    await ctx.reply("برای دیدن فروشگاه دستور /start رو بزن.")
  })

  bot.command("ping", async (ctx) => {
    await ctx.reply("ربات فعاله ✅")
  })

}
