import { ServiceSection } from "@/components/ServiceSection";
import styles from "./SharedFaq.module.scss";

type FaqItem = { question: string; answer: string };

type SharedFaqProps = {
  id?: string;
  tag?: string;
  title: string;
  items: readonly FaqItem[] | FaqItem[];
};

export const stripHtml = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, "");

export function SharedFaq({ id = "faq", tag, title, items }: SharedFaqProps) {
  return (
    <ServiceSection id={id} tag={tag} title={title} variant="muted">
      <div className={styles.faq__list}>
        {items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p
              className={styles.faq__answer}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
