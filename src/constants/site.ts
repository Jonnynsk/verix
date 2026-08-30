export const PHONE_DISPLAY = "+7 (953) 805-79-99";
export const PHONE_TEL = "+79538057999";
export const SITE_EMAIL = "verix-cert@mail.ru";
export const SITE_ADDRESS = "г. Новосибирск, ул. Планировочная, д. 58";

/** Реквизиты владельца сайта (требования к идентификации информационного ресурса) */
export const LEGAL_ENTITY = {
  name: "ИП Файзрахманов Евгений Валерьевич",
  shortName: "ИП Файзрахманов Е. В.",
  inn: "540539897005",
  ogrnip: "326547600156291",
  address: SITE_ADDRESS,
} as const;

/** Якорь блока контактов (SocialCta) на страницах сайта */
export const CONTACT_SECTION_ID = "social-consult";
export const CONTACT_SECTION_HREF = `/#${CONTACT_SECTION_ID}`;
