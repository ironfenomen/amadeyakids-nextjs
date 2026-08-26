import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container" style={{ padding: "120px 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--ff-serif, 'Playfair Display', serif)",
            fontSize: "clamp(72px, 12vw, 140px)",
            lineHeight: 1,
            color: "var(--gold, #d9b46c)",
            margin: 0,
          }}
        >
          404
        </p>
        <p
          style={{
            fontFamily: "var(--ff-serif, 'Playfair Display', serif)",
            fontSize: "clamp(22px, 3.4vw, 32px)",
            color: "var(--t1, #eef2f8)",
            margin: "18px 0 10px",
          }}
        >
          Страница не найдена или находится в разработке
        </p>
        <p style={{ color: "var(--mutedd2, rgba(233,238,246,0.65))", maxWidth: 520, margin: "0 auto 34px" }}>
          Если у вас есть вопросы или нужна помощь, пожалуйста, свяжитесь с нами:
          +7 (988) 627-17-77
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button">
            Вернуться на главную
          </Link>
          <a href="tel:+79886271777" className="button button--ghost">
            Позвонить
          </a>
        </div>
      </div>
    </main>
  );
}
