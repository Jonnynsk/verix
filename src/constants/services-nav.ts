/** Ссылки на опубликованные лендинги услуг — источник для хедера, футера и hub. */
export const NAV_SERVICE_LINKS = [
  {
    href: "/services/sertifikaciya-tr-ts",
    label: "Сертификация ТР ТС",
  },
  {
    href: "/services/otkaznie-pisma",
    label: "Отказные письма",
  },
] as const;

export const SERVICES_HUB_PATH = "/services";

export type NavServiceLink = (typeof NAV_SERVICE_LINKS)[number];
