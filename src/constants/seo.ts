export const SEO_SITE_NAME = "Сертификационный центр ВЕРИКС";
export const SEO_SITE_URL = "https://jonnynsk.github.io"; 
export const SEO_BASE_PATH = "/verix";
export const SEO_CANONICAL_URL = `${SEO_SITE_URL}${SEO_BASE_PATH}/`;

/** Канонический URL страницы без `//` в пути (учитывает trailingSlash в Next). */
export function seoPathUrl(path?: string): string {
  const base = SEO_CANONICAL_URL.replace(/\/+$/, "");

  if (!path) return `${base}/`;

  const segment = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${base}/${segment}/`;
}

export const SEO_BRAND_NAME = "ВЕРИКС";
export const SEO_LOCALE = "ru_RU";
export const SEO_LANGUAGE = "ru-RU";
export const SEO_TITLE =
  "Сертификационный центр ВЕРИКС | Официальные документы для маркетплейсов";
export const SEO_TITLE_TEMPLATE = "%s | ВЕРИКС";

export const SEO_DESCRIPTION =
  "Официальное оформление документов для маркетплейсов (Wildberries, Ozon) с выгрузкой в реестр. Сертификация ТР ТС, отказные письма, Честный знак для ИП, ООО и самозанятых. Бесплатная консультация.";
export const SEO_SHORT_DESCRIPTION =
  "Официальные документы для маркетплейсов с занесением в реестр. Сертификация, декларации и отказные письма для ИП, ООО и самозанятых.";

export const SEO_KEYWORDS = [
  // База
  "сертификационный центр",
  "сертификация ТР ТС",
  "декларирование ГОСТ Р",
  "отказные письма",
  "честный знак",
  "сгр",
  "разработка ту",
  "экспертные заключения",

  // Коммерция и маркетплейсы
  "документы для маркетплейсов",
  "сертификация для wildberries",
  "сертификация для ozon",
  "отказное письмо для wildberries",
  "отказное письмо для ozon",
  "сертификация для яндекс маркет",
  "отказное письмо для яндекс маркет",
  "сертификат на товар для маркетплейсов",

  // Доверие и аудитория
  "сертификация с выгрузкой в реестр",
  "официальное оформление сертификатов",
  "отказное письмо для самозанятых",
  "отказное письмо",
  "документы для ИП и ООО",
];

export const SEO_OG_IMAGE = `${SEO_SITE_URL}${SEO_BASE_PATH}/og-image.png`;
export const SEO_THEME_COLOR = "#0f172a";
export const SEO_CATEGORY = "business";
export const SEO_REGION = "Россия";
