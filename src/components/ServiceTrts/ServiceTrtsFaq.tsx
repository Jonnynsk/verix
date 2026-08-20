import { SERVICE_TRTS_FAQ } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTrtsFaq.module.scss";

export function ServiceTrtsFaq() {
  return (
    <ServiceSection
      id="service-trts-faq"
      tag={SERVICE_TRTS_FAQ.tag}
      title={SERVICE_TRTS_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_TRTS_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
