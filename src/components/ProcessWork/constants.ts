export const PROCESS_TAG = "Процесс работы";

export const PROCESS_TITLE = "Как мы работаем";

export const PROCESS_SUBTITLE =
  "Четыре простых шага от заявки до получения документов";

export const PROCESS_STEPS = [
  {
    title: "Консультация",
    description:
      "Бесплатная консультация и подбор оптимальной схемы",
    state: "active" as const,
  },
  {
    title: "Заявка",
    description:
      "Оставляете заявку на сайте или звоните нам по телефону",
    state: "active" as const,
  },
  {
    title: "Оформление",
    description: "Подготовка макетов и оформление всех документов",
    state: "pending" as const,
  },
  {
    title: "Результат",
    description:
      "Получаете готовые документы с бесплатной доставкой",
    state: "pending" as const,
  },
] as const;
