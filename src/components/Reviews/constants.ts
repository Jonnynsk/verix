export type ReviewTone = "cyan" | "emerald" | "blue";

export type Review = {
  id: string;
  name: string;
  company: string;
  rating: 5;
  quote: string;
  initials: string;
  tone: ReviewTone;
};

export const REVIEWS_TAG = "отзывы клиентов";
export const REVIEWS_TITLE = "Нам доверяют";
export const REVIEWS_CARDS: ReadonlyArray<Review> = [
  {
    id: "alexey",
    name: "Алексей Петров",
    company: "ООО \"ПромСнаб\"",
    rating: 5,
    initials: "АП",
    tone: "cyan",
    quote:
      "Оформляли декларации ТР ТС на промышленное оборудование. Всё сделали быстро и профессионально. Менеджер всегда на связи — процесс занял минимум времени.",
  },
  {
    id: "mariya",
    name: "Мария Иванова",
    company: "ИП Иванова М.С.",
    rating: 5,
    initials: "МИ",
    tone: "emerald",
    quote:
      "Срочно нужен был сертификат ISO. Ребята внимательно подошли к задачам, согласовали сроки и подготовили документы без лишних задержек.",
  },
  {
    id: "vitaliy",
    name: "Виталий Сидоров",
    company: "ГК \"СтройРесурс\"",
    rating: 5,
    initials: "ВС",
    tone: "blue",
    quote:
      "Сотрудничествуем уже более двух лет. Всё делается в срок, документы подготовлены грамотно. Отдельно отмечу поддержку на всех этапах.",
  },
];

