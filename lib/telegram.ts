const TELEGRAM_API = "https://api.telegram.org";

type TelegramResult = { ok: true } | { ok: false; error: string };

export async function sendTelegramMessage(text: string): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "MISSING_ENV" };
  }

  try {
    const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });

    if (!res.ok) return { ok: false, error: `TELEGRAM_HTTP_${res.status}` };
    return { ok: true };
  } catch {
    return { ok: false, error: "NETWORK_ERROR" };
  }
}
