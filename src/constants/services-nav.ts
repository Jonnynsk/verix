export const NAV_SERVICE_LINKS = [
  {
    href: "/services/sertifikaciya-tr-ts",
    label: "Сертификация ТР ТС",
  },
  {
    href: "/services/deklarirovanie-gost-r",
    label: "Декларирование ГОСТ Р",
  },
  {
    href: "/services/otkaznie-pisma",
    label: "Отказные письма",
  },
  {
    href: "/services/chestny-znak",
    label: "Честный знак",
  },
  {
    href: "/services/sgr",
    label: "Свидетельства СГР",
  },
  {
    href: "/services/razrabotka-tu",
    label: "Разработка ТУ",
  },
  {
    href: "/services/registratsiya-tovarnogo-znaka",
    label: "Регистрация товарного знака",
  },
  {
    href: "/services/dobrovolnaya-sertifikaciya",
    label: "Добровольная сертификация",
  },
] as const;

export const SERVICES_HUB_PATH = "/services";

export type NavServiceLink = (typeof NAV_SERVICE_LINKS)[number];
