import {
  NAV_SERVICE_LINKS,
  SERVICES_HUB_PATH,
} from "@/constants/services-nav";

export { PHONE_DISPLAY, PHONE_TEL } from "@/constants/site";

export const NAV_ITEMS = [
  {
    href: SERVICES_HUB_PATH,
    label: "Услуги",
    children: NAV_SERVICE_LINKS,
  },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/#process", label: "Процесс" },
  { href: "/#reviews", label: "Отзывы" },
] as const;
