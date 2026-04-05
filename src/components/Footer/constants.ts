export const FOOTER_TAGLINE =
  "Профессиональный сертификационный центр. Оформление всех видов разрешительной документации.";

export const FOOTER_SERVICES = [
  { href: "#service-trts", label: "Сертификация ТР ТС" },
  { href: "#service-gost", label: "Декларирование ГОСТ Р" },
  { href: "#service-fire", label: "Пожарная безопасность" },
  { href: "#service-refusal", label: "Отказные письма" },
  { href: "#service-iso", label: "Сертификация ISO" },
] as const;

export const FOOTER_COMPANY = [
  { href: "#about", label: "О нас" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#reviews", label: "Отзывы клиентов" },
  { href: "#blog", label: "Блог и статьи" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const FOOTER_SOCIAL = [
  {
    href: "https://vk.ru/verix_certificate",
    label: "ВКонтакте",
    icon: "vk" as const,
  },
  {
    href: "https://t.me/certificate_markeplace",
    label: "Telegram",
    icon: "telegram" as const,
  },
  {
    href: "https://wa.me/+79538057999",
    label: "WhatsApp",
    icon: "whatsapp" as const,
  },
];

export const FOOTER_LEGAL = [
  { href: "#privacy", label: "Политика конфиденциальности" },
  { href: "#terms", label: "Пользовательское соглашение" },
] as const;
