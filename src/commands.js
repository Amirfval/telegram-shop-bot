
const categories = [
  "⭐ تلگرام استارز",
  "💎 تون",
  "🌟 تلگرام پرمیوم",
  "🎁 گیفت استارز",
  "🎟 ووچرها",
  "📈 خدمات رشد واقعی"
]

export function registerCommands(bot) {

  bot.command("start", async (ctx) => {
    await ctx.reply(
      "سلام 👋\nبه فروشگاه دیجیتال خوش اومدی!",
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

  bot.hears("🛍 فروشگاه", async (ctx) => {
    await ctx.reply("یک دسته‌بندی انتخاب کن:", {
      reply_markup: {
        keyboard: categories.map(item => [item]).concat([["🏠 منوی اصلی"]]),
        resize_keyboard: true
      }
    })
  })

  bot.hears(categories, async (ctx) => {
    await ctx.reply(
      `محصولات دسته ${ctx.message.text}\n\nبه‌زودی محصولات این بخش اضافه می‌شوند.`
    )
  })

  bot.hears("👤 حساب کاربری", async (ctx) => {
    await ctx.reply(
      `👤 حساب کاربری\nشناسه شما: ${ctx.from.id}`
    )
  })

  bot.hears("📞 پشتیبانی", async (ctx) => {
    await ctx.reply("پیام خود را برای پشتیبانی ارسال کنید.")
  })

  bot.hears("🏠 منوی اصلی", async (ctx) => {
    await ctx.reply("منوی اصلی:", {
      reply_markup: {
        keyboard: [
          ["🛍 فروشگاه"],
          ["👤 حساب کاربری", "📞 پشتیبانی"]
        ],
        resize_keyboard: true
      }
    })
  })

  bot.command("help", async (ctx) => {
    await ctx.reply("برای شروع /start را ارسال کن.")
  })

}
