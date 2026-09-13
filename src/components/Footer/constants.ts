export const FOOTER_TAGLINE =
  "Профессиональный сертификационный центр. Оформление всех видов разрешительной документации.";

export const FOOTER_SERVICES = [
  { href: "/services/sertifikaciya-tr-ts", label: "Сертификация ТР ТС" },
  { href: "/services/deklarirovanie-gost-r", label: "Декларирование ГОСТ Р" },
  { href: "/services/otkaznie-pisma", label: "Отказные письма" },
  { href: "/services/chestny-znak", label: "Честный знак" },
  { href: "/services/sgr", label: "Свидетельства СГР" },
  { href: "/services/razrabotka-tu", label: "Разработка ТУ" },
  { href: "/services/registratsiya-tovarnogo-znaka", label: "Регистрация товарного знака" },
  { href: "/services/dobrovolnaya-sertifikaciya", label: "Добровольная сертификация" },
] as const;

export const FOOTER_COMPANY = [
  { href: "/services", label: "Услуги" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/#process", label: "Процесс" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/about", label: "О компании" },
] as const;

export const FOOTER_SOCIAL = [
  {
    href: "https://vk.ru/verix_certificate/",
    label: "ВКонтакте",
    icon: "vk" as const,
  },
  {
    href: "/go/telegram/",
    label: "Telegram",
    icon: "telegram" as const,
  },
  {
    href: "/go/whatsapp/",
    label: "WhatsApp",
    icon: "whatsapp" as const,
  },
];

export const FOOTER_LEGAL = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/terms", label: "Пользовательское соглашение" },
] as const;
