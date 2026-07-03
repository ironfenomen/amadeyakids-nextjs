import type { NextConfig } from "next";

// SEO-дедуп: encoded-кириллица и англо-клоны -> 301 на канонический латинский keyword-URL.
// (раньше были rewrites -> оба URL отдавали 200 = дубли). statusCode:301 — по требованиям Яндекса.
const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
  { source: "/detskaya_gastroentorologiya-v-stavropole/", destination: "/detskaya-gastroentorologiya-v-stavropole/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5%D1%8F-%D0%BA%D0%B8%D0%B4%D1%81/", destination: "/vrachi-kliniki-amadeya-kids/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3-%D1%81%D1%82%D0%B5%D0%BF%D1%83%D1%80%D0%B8%D0%BD%D0%B0-%D0%BE%D0%B2/", destination: "/vrach-kardiolog-stepurina-ov/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%84%D0%B5%D0%BA%D1%82%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%BD%D0%B5%D0%BB%D0%BB%D0%B8-%D0%B3%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C/", destination: "/defektolog-zakrevskaya-nelli-gennad/", statusCode: 301 },
  { source: "/%D0%BF%D1%80%D0%B8%D0%B5%D0%BC-%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%B5%D0%B4%D0%B0-%D0%B2-%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B5/", destination: "/priem-logopeda-v-stavropole/", statusCode: 301 },
  { source: "/%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%BF%D1%83%D1%87%D0%BA%D0%BE%D0%B2%D0%B0-%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0/", destination: "/klinicheskij-psikholog-puchkova-anasta/", statusCode: 301 },
  { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D1%83%D1%88%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BE%D0%BB%D0%B5%D1%81%D1%8F-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-ushakova-olesya-viktorovna/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3-%D1%84%D0%BE%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE-%D0%BE%D0%BA%D1%81%D0%B0%D0%BD%D0%B0-%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2/", destination: "/dermatolog-fomenko-oksana-anatolev/", statusCode: 301 },
  { source: "/%D0%BF%D0%B5%D0%B4%D0%B8%D0%B0%D1%82%D1%80-%D0%B4%D0%BE%D0%BC%D1%80%D0%B0%D1%87%D1%91%D0%B2%D0%B0-%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD/", destination: "/pediatr-domrachyova-ekaterina-aleksan/", statusCode: 301 },
  { source: "/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8-%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5/", destination: "/uslugi-chastnoj-detskoj-kliniki-amade/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F/", destination: "/detskaya-dermatologiya/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3/", destination: "/detskij-kardiolog/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D1%8D%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F/", destination: "/detskaya-endokrinologiya/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/", destination: "/detskij-psikholog/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80%D0%B8%D1%8F/", destination: "/detskaya-psikhiatriya/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B0%D0%BC%D0%B0%D0%B4%D0%B5%D1%8F-%D0%BA%D0%B8%D0%B4%D1%81/", destination: "/vrachi-kliniki-amadeya-kids/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D1%83%D0%B7%D0%B8-%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%83%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD/", destination: "/vrach-uzi-rakhmatulina-elena-nikolaevn/", statusCode: 301 },
  { source: "/%D0%B3%D0%B8%D1%80%D1%83%D0%B4%D0%BE%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B5%D0%B2%D1%82-%D0%BA%D0%B0%D0%BB%D0%BC%D1%8B%D0%BA%D0%BE%D0%B2%D0%B0-%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE/", destination: "/girudoterapevt-kalmykova-irina-niko/", statusCode: 301 },
  { source: "/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82-%D1%87%D0%B8%D0%BC%D1%88%D0%B8%D1%82-%D0%B0%D0%BD%D0%BD%D0%B0/", destination: "/funktsionalnyj-diagnost-chimshit-anna/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%BA%D1%80%D0%BE%D0%BD-%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0/", destination: "/vrach-psikhiatr-kron-elena-ivanovna/", statusCode: 301 },
  { source: "/%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3-%D0%B1%D0%B0%D0%BB%D0%B0%D0%BA%D0%B8%D0%BD%D0%B0-%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE/", destination: "/khirurg-balakina-svetlana-aleksandro/", statusCode: 301 },
  { source: "/%D0%B2%D1%80%D0%B0%D1%87-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0/", destination: "/vrach-psikhiatr-denisenko-igor-aleksa/", statusCode: 301 },
  { source: "/%D0%B3%D0%B8%D0%BD%D0%B5%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3-%D0%BA%D0%B0%D1%80%D0%B0%D0%BC%D1%8B%D1%88%D0%B5%D0%B2%D0%B0-%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2/", destination: "/ginekolog-karamysheva-irina-nikolaev/", statusCode: 301 },
  { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B1%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BE%D0%BB%D0%B5%D1%81%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-barinova-olesya-nikolaevna/", statusCode: 301 },
  { source: "/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0/", destination: "/psikholog-romanova-yuliya-anatolevna/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80-%D0%BC%D1%83%D1%82%D0%B0%D0%B5%D0%B2%D0%B0-%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D1%8E%D1%80%D1%8C%D0%B5%D0%B2/", destination: "/detskij-psikhiatr-mutaeva-olga-yurev/", statusCode: 301 },
  { source: "/%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D1%8D%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3-%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B0%D0%B4%D0%B8%D1%81-%D0%BB%D0%B0/", destination: "/detskij-endokrinolog-grigoriadis-la/", statusCode: 301 },
  { source: "/%D0%BF%D0%B5%D0%B4%D0%B8%D0%B0%D1%82%D1%80-%D1%88%D0%BC%D0%B0%D1%80%D0%BA%D0%BE/", destination: "/pediatr-shmarko/", statusCode: 301 },
  { source: "/%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B0-%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0-%D0%B2%D1%80%D0%B0%D1%87-%D1%83%D0%B7%D0%B8-%D0%B2/", destination: "/azarova-tatyana-viktorovna-vrach-uzi-v/", statusCode: 301 },
  { source: "/dermatology", destination: "/detskaya-dermatologiya/", statusCode: 301 },
  { source: "/endocrinology", destination: "/detskaya-endokrinologiya/", statusCode: 301 },
  { source: "/gastroenterologist", destination: "/detskaya-gastroentorologiya-v-stavropole/", statusCode: 301 },
  { source: "/psychiatrist", destination: "/detskaya-psikhiatriya/", statusCode: 301 },
  { source: "/psychologist", destination: "/detskij-psikholog/", statusCode: 301 },
  { source: "/cardiologist", destination: "/detskij-kardiolog/", statusCode: 301 },
  { source: "/allergist-immunologist", destination: "/detskij-allergolog-immunolog-v-stavropole/", statusCode: 301 },
  { source: "/services", destination: "/uslugi-chastnoj-detskoj-kliniki-amade/", statusCode: 301 },
  { source: "/doctors", destination: "/vrachi-kliniki-amadeya-kids/", statusCode: 301 },
  { source: "/vrachi-klini-amadeya-kids", destination: "/vrachi-kliniki-amadeya-kids/", statusCode: 301 }
    ];
  },
};

export default nextConfig;
