import { execFile } from "node:child_process";

type TelegramCurlInput = {
  token: string;
  method: string;
  payload: Record<string, unknown>;
  timeoutMs?: number;
};

type TelegramApiResult = {
  ok: boolean;
  result?: any;
  description?: string;
  error_code?: number;
};

function escapeConfig(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n");
}

export function telegramCurl({
  token,
  method,
  payload,
  timeoutMs = 15000,
}: TelegramCurlInput): Promise<TelegramApiResult> {
  const config = [
    `url = "https://api.telegram.org/bot${token}/${method}"`,
    'header = "Content-Type: application/json"',
    `data = "${escapeConfig(JSON.stringify(payload))}"`,
  ].join("\n");

  return new Promise((resolve, reject) => {
    const child = execFile("/usr/bin/curl", [
      "--silent",
      "--show-error",
      "--socks5-hostname",
      "127.0.0.1:1080",
      "--max-time",
      String(Math.ceil(timeoutMs / 1000)),
      "--config",
      "-",
    ], {
      timeout: timeoutMs + 5000,
      maxBuffer: 2_000_000,
      killSignal: "SIGTERM",
    }, (error, stdout) => {
      if (error) {
        reject(new Error(`telegram_curl_${error.code || "failed"}`));
        return;
      }
      try {
        resolve(JSON.parse(stdout));
      } catch {
        reject(new Error("telegram_curl_invalid_json"));
      }
    });
    if (!child.stdin) {
      reject(new Error("telegram_curl_stdin_unavailable"));
      return;
    }
    child.stdin.on("error", () => {
      reject(new Error("telegram_curl_stdin_failed"));
    });
    child.stdin.end(config);
  });
}
