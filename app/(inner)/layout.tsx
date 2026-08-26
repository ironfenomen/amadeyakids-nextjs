/* Route group (inner): внутренние страницы получают класс .page (editorial-типографика
   Core: .v36-dark .page …). Главная живёт в корне app/ БЕЗ .page — canonical-структура
   (правила внутренних страниц не должны бить по hero главной). */
export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page" style={{ display: "contents" }}>
      {children}
    </div>
  );
}
