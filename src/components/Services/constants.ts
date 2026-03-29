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
  | "indigo";

export type ServiceIconId =
  | "shieldCheck"
  | "mail"
  | "award"
  | "flame"
  | "flask"
  | "cog"
  | "leaf"
  | "scale";

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
    anchor: "service-iso",
    title: "Системы ISO",
    description:
      "Внедрение и сертификация систем менеджмента качества международных стандартов",
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
    anchor: "service-fire",
    title: "Пожарная безопасность",
    description:
      "Сертификаты и декларации пожарной безопасности на продукцию и строительные материалы",
    tone: "red",
    icon: "flame",
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
    anchor: "service-eco",
    title: "Эко-сертификация",
    description:
      "Подтверждение экологической безопасности продукции и производственных процессов",
    tone: "emerald",
    icon: "leaf",
  },
];
