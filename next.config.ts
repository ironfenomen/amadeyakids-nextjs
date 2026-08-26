import type { NextConfig } from "next";

// Redirect map mirrors production amadeyakids.ru behavior (verified against
// _preflight-2026-08-26/seo-baseline.json chains). Old repo routes were 200
// rewrites — production does 301, so we use permanent redirects.
const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/allergist-immunologist/", destination: "/detskij-allergolog-immunolog-v-stavropole/", permanent: true },
      { source: "/cardiologist/", destination: "/detskij-kardiolog/", permanent: true },
      { source: "/dermatology/", destination: "/detskaya-dermatologiya/", permanent: true },
      { source: "/detskaya_gastroentorologiya-v-stavropole/", destination: "/detskaya-gastroentorologiya-v-stavropole/", permanent: true },
      { source: "/doctors/", destination: "/vrachi-kliniki-amadeya-kids/", permanent: true },
      { source: "/endocrinology/", destination: "/detskaya-endokrinologiya/", permanent: true },
      { source: "/gastroenterologist/", destination: "/detskaya-gastroentorologiya-v-stavropole/", permanent: true },
      { source: "/psychiatrist/", destination: "/detskaya-psikhiatriya/", permanent: true },
      { source: "/psychologist/", destination: "/detskij-psikholog/", permanent: true },
      { source: "/services/", destination: "/uslugi-chastnoj-detskoj-kliniki-amade/", permanent: true },
      { source: "/%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B0-%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0-%D0%B2%D1%80%D0%B0%D1%87-%D1%83%D0%B7%D0%B8-%D0%B2/", destination: "/azarova-tatyana-viktorovna-vrach-uzi-v/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3-%D1%81%D1%82%D0%B5%D0%BF%D1%83%D1%80%D0%B8%D0%BD%D0%B0-%D0%BE%D0%B2/", destination: "/vrach-kardiolog-stepurina-ov/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0/", destination: "/vrach-psikhiatr-denisenko-igor-aleksa/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%BA%D1%80%D0%BE%D0%BD-%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0/", destination: "/vrach-psikhiatr-kron-elena-ivanovna/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D1%83%D0%B7%D0%B8-%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%83%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD/", destination: "/vrach-uzi-rakhmatulina-elena-nikolaevn/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5%D1%8F-%D0%BA%D0%B8%D0%B4%D1%81/", destination: "/vrachi-kliniki-amadeya-kids/", permanent: true },
      { source: "/%D0%B2%D1%80%D0%B0%D1%87%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5%D1%8F-%D0%BA%D0%B8%D0%B4%D1%81/", destination: "/vrachi-kliniki-amadeya-kids/", permanent: true },
      { source: "/%D0%B3%D0%B8%D0%BD%D0%B5%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3-%D0%BA%D0%B0%D1%80%D0%B0%D0%BC%D1%8B%D1%88%D0%B5%D0%B2%D0%B0-%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2/", destination: "/ginekolog-karamysheva-irina-nikolaev/", permanent: true },
      { source: "/%D0%B3%D0%B8%D1%80%D1%83%D0%B4%D0%BE%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B5%D0%B2%D1%82-%D0%BA%D0%B0%D0%BB%D0%BC%D1%8B%D0%BA%D0%BE%D0%B2%D0%B0-%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE/", destination: "/girudoterapevt-kalmykova-irina-niko/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3-%D1%84%D0%BE%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE-%D0%BE%D0%BA%D1%81%D0%B0%D0%BD%D0%B0-%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2/", destination: "/dermatolog-fomenko-oksana-anatolev/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F/", destination: "/detskaya-dermatologiya/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80%D0%B8%D1%8F/", destination: "/detskaya-psikhiatriya/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D1%8D%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F/", destination: "/detskaya-endokrinologiya/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3/", destination: "/detskij-kardiolog/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%BC%D1%83%D1%82%D0%B0%D0%B5%D0%B2%D0%B0-%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D1%8E%D1%80%D1%8C%D0%B5%D0%B2/", destination: "/detskij-psikhiatr-mutaeva-olga-yurev/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/", destination: "/detskij-psikholog/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D1%8D%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B0%D0%B4%D0%B8%D1%81-%D0%BB%D0%B0/", destination: "/detskij-endokrinolog-grigoriadis-la/", permanent: true },
      { source: "/%D0%B4%D0%B5%D1%84%D0%B5%D0%BA%D1%82%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%BD%D0%B5%D0%BB%D0%BB%D0%B8-%D0%B3%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C/", destination: "/defektolog-zakrevskaya-nelli-gennad/", permanent: true },
      { source: "/%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%BF%D1%83%D1%87%D0%BA%D0%BE%D0%B2%D0%B0-%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0/", destination: "/klinicheskij-psikholog-puchkova-anasta/", permanent: true },
      { source: "/%D0%BF%D0%B5%D0%B4%D0%B8%D0%B0%D1%82%D1%80-%D0%B4%D0%BE%D0%BC%D1%80%D0%B0%D1%87%D1%91%D0%B2%D0%B0-%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD/", destination: "/pediatr-domrachyova-ekaterina-aleksan/", permanent: true },
      { source: "/%D0%BF%D0%B5%D0%B4%D0%B8%D0%B0%D1%82%D1%80-%D1%88%D0%BC%D0%B0%D1%80%D0%BA%D0%BE/", destination: "/pediatr-shmarko/", permanent: true },
      { source: "/%D0%BF%D1%80%D0%B8%D0%B5%D0%BC-%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%B5%D0%B4%D0%B0-%D0%B2-%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B5/", destination: "/priem-logopeda-v-stavropole/", permanent: true },
      { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B1%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BE%D0%BB%D0%B5%D1%81%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-barinova-olesya-nikolaevna/", permanent: true },
      { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-romanova-yuliya-anatolevna/", permanent: true },
      { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D1%83%D1%88%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BE%D0%BB%D0%B5%D1%81%D1%8F-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-ushakova-olesya-viktorovna/", permanent: true },
      { source: "/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8-%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5/", destination: "/uslugi-chastnoj-detskoj-kliniki-amade/", permanent: true },
      { source: "/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82-%D1%87%D0%B8%D0%BC%D1%88%D0%B8%D1%82-%D0%B0%D0%BD%D0%BD%D0%B0/", destination: "/funktsionalnyj-diagnost-chimshit-anna/", permanent: true },
      { source: "/%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3-%D0%B1%D0%B0%D0%BB%D0%B0%D0%BA%D0%B8%D0%BD%D0%B0-%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE/", destination: "/khirurg-balakina-svetlana-aleksandro/", permanent: true },
      { source: "/vrachi-klini-amadeya-kids/", destination: "/vrachi-kliniki-amadeya-kids/", permanent: true },
    ];
  },
};

export default nextConfig;
