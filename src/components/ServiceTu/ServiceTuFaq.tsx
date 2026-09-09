import { SERVICE_TU_FAQ } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTuFaq.module.scss";

export function ServiceTuFaq() {
  return (
    <ServiceSection
      id="service-tu-faq"
      tag={SERVICE_TU_FAQ.tag}
      title={SERVICE_TU_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_TU_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}