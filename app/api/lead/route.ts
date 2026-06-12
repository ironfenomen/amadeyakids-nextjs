import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

type LeadBody = {
  name?: string;
  phone?: string;
  source?: string;
  site?: string;
  [key: string]: unknown;
};

function buildMessage(body: LeadBody): string {
  const name = String(body.name ?? "").trim() || "—";
  const phone = String(body.phone ?? "").trim() || "—";
  const source = String(body.source ?? "").trim() || "—";
  const dateTime = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "short",
    timeStyle: "short",
  });

  return [
    "🟢 Новая заявка — Амадея Кидс",
    "",
    `Форма: ${source}`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Дата: ${dateTime}`,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadBody;

    const phone = String(body.phone ?? "").trim();
    if (!phone) {
      return NextResponse.json({ ok: false, error: "PHONE_REQUIRED" }, { status: 400 });
    }

    const result = await sendTelegramMessage(buildMessage(body));

    if (!result.ok) {
      console.error("[lead] telegram failed:", result.error);
      return NextResponse.json({ ok: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] error:", error);
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
