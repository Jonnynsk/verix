export const MARQUEE_ITEMS = [
  {
    label: "Сертификация ТР ТС",
    icon: "trts",
  },
  {
    label: "ISO стандарты",
    icon: "iso",
  },
  {
    label: "Пожарная безопасность",
    icon: "fire",
  },
  {
    label: "Декларирование ГОСТ",
    icon: "gost",
  },
  {
    label: "Лабораторные испытания",
    icon: "lab",
  },
] as const;

export type MarqueeIconId = (typeof MARQUEE_ITEMS)[number]["icon"];
