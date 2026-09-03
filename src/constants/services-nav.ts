export const NAV_SERVICE_LINKS = [
  {
    href: "/services/sertifikaciya-tr-ts",
    label: "Сертификация ТР ТС",
  },
  {
    href: "/services/otkaznie-pisma",
    label: "Отказные письма",
  },
  {
    href: "/services/chestny-znak",
    label: "Честный знак",
  },
] as const;

export const SERVICES_HUB_PATH = "/services";

export type NavServiceLink = (typeof NAV_SERVICE_LINKS)[number];
