import { telegramCurl } from "./telegram-curl";

const TELEGRAM_API = "https://api.telegram.org";

type TelegramResult = { ok: true } | { ok: false; error: string };

export async function sendTelegramMessage(text: string): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "MISSING_ENV" };
  }

  const payload = { chat_id: chatId, text, disable_web_page_preview: true };
  if (process.env.TELEGRAM_TRANSPORT === "socks") {
    try {
      const result = await telegramCurl({ token, method: "sendMessage", payload });
      if (result.ok) return { ok: true };
      return { ok: false, error: `TELEGRAM_HTTP_${result.error_code || 500}` };
    } catch {
      return { ok: false, error: "NETWORK_ERROR" };
    }
  }

  try {
    const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;

    if (!res.ok) return { ok: false, error: `TELEGRAM_HTTP_${res.status}` };
    if (data?.ok !== true) return { ok: false, error: "TELEGRAM_API_ERROR" };
    return { ok: true };
  } catch {
    return { ok: false, error: "NETWORK_ERROR" };
  }
}
