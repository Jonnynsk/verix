export const MARQUEE_ITEMS = [
  { label: "Сертификация ТР ТС", icon: "trts" },
  { label: "Декларирование ГОСТ Р", icon: "declar" },
  { label: "Отказные письма", icon: "mail" },
  { label: "Честный знак", icon: "honest" },
  { label: "Свидетельства СГР", icon: "lab" },
  { label: "Разработка ТУ", icon: "tu" },
  { label: "Регистрация товарного знака", icon: "scale" },
  { label: "Добровольная сертификация", icon: "volDoc" },
] as const;

export type MarqueeIconId = (typeof MARQUEE_ITEMS)[number]["icon"];
