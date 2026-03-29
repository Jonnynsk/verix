export const ADVANTAGES_TAG = "Наши преимущества";

export const ADVANTAGES_TITLE = "Почему выбирают нас?";

export const ADVANTAGES_SUBTITLE =
  "Индивидуальный подход и гарантия качества на каждом этапе";

export type AdvantageTone =
  | "emerald"
  | "blue"
  | "purple"
  | "orange"
  | "amber"
  | "cyan";

export const ADVANTAGE_CARDS: ReadonlyArray<{
  title: string;
  description: string;
  tone: AdvantageTone;
  icon: "zap" | "clock" | "headset" | "map" | "wallet" | "truck";
}> = [
  {
    title: "Быстрый старт",
    description:
      "Начинаем работу в день обращения. Оперативная подготовка документов и макетов",
    tone: "emerald",
    icon: "zap",
  },
  {
    title: "Гарантия сроков",
    description:
      "Строго соблюдаем заявленные сроки. Финансовая ответственность за задержки",
    tone: "blue",
    icon: "clock",
  },
  {
    title: "Поддержка 24/7",
    description:
      "Персональный менеджер всегда на связи. Консультации на всех этапах работы",
    tone: "purple",
    icon: "headset",
  },
  {
    title: "Работа по всей РФ",
    description:
      "Удаленное оформление документов для клиентов из любого региона России",
    tone: "orange",
    icon: "map",
  },
  {
    title: "Гибкая оплата",
    description:
      "Индивидуальные условия. Рассрочка и поэтапная оплата по согласованию",
    tone: "amber",
    icon: "wallet",
  },
  {
    title: "Доставка курьером",
    description:
      "Бесплатная доставка оригиналов документов курьером лично в руки",
    tone: "cyan",
    icon: "truck",
  },
];
