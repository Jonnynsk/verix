export const SERVICES_TAG = "Наши услуги";

export const SERVICES_TITLE = "Полный спектр услуг";

export const SERVICES_SUBTITLE =
  "Профессиональное оформление всех видов разрешительной документации";

export type ServiceTone =
  | "blue"
  | "amber"
  | "purple"
  | "red"
  | "cyan"
  | "orange"
  | "emerald"
  | "indigo"
  | "honest";

export type ServiceIconId =
  | "shieldCheck"
  | "mail"
  | "award"
  | "flame"
  | "flask"
  | "cog"
  | "scale"
  | "markHonest"
  | "fileCheck";

export const SERVICE_CARDS: ReadonlyArray<{
  anchor: string;
  title: string;
  description: string;
  tone: ServiceTone;
  icon: ServiceIconId;
}> = [
  {
    anchor: "service-trts",
    title: "Сертификация ТР ТС",
    description:
      "Обязательное подтверждение соответствия продукции требованиям технических регламентов",
    tone: "blue",
    icon: "shieldCheck",
  },
  {
    anchor: "service-gost",
    title: "Декларирование ГОСТ Р",
    description:
      "Подтверждение соответствия продукции требованиям национальных стандартов",
    tone: "purple",
    icon: "award",
  },
  {
    anchor: "service-refusal",
    title: "Отказные письма",
    description:
      "Официальные разъяснения о том, что продукция не подлежит обязательной сертификации",
    tone: "amber",
    icon: "mail",
  },
  {
    anchor: "service-honest",
    title: "Честный знак",
    description:
      "Помощь в регистрации и маркировке товаров в национальной системе прослеживаемости",
    tone: "honest",
    icon: "markHonest",
  },
  {
    anchor: "service-sgr",
    title: "Свидетельства СГР",
    description:
      "Государственная регистрация продукции для законной реализации на территории РФ",
    tone: "cyan",
    icon: "flask",
  },
  {
    anchor: "service-tu",
    title: "Разработка ТУ",
    description:
      "Разработка технических условий и технологических инструкций на производство",
    tone: "orange",
    icon: "cog",
  },
  {
    anchor: "service-expert",
    title: "Экспертные заключения",
    description:
      "Заключения Роспотребнадзора о соответствии санитарно-эпидемиологическим нормам",
    tone: "indigo",
    icon: "scale",
  },
  {
    anchor: "service-voluntary",
    title: "Добровольная сертификация",
    description: "Подтверждение определённых характеристик продукции и услуг",
    tone: "emerald",
    icon: "fileCheck",
  },
];
