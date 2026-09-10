import { SERVICE_TRADEMARK_FAQ } from "./constants";
import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";
import styles from "./ServiceTrademarkFaq.module.scss";

export function ServiceTrademarkFaq() {
  return (
    <ServiceSection
      id="service-trademark-faq"
      tag={SERVICE_TRADEMARK_FAQ.tag}
      title={SERVICE_TRADEMARK_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_TRADEMARK_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
