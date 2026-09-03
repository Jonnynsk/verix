import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_HONEST_FAQ } from "./constants";

import styles from "./ServiceHonestFaq.module.scss";

export function ServiceHonestFaq() {
  return (
    <ServiceSection
      id="service-honest-faq"
      tag={SERVICE_HONEST_FAQ.tag}
      title={SERVICE_HONEST_FAQ.title}
    >
      <div className={styles.faq__list}>
        {SERVICE_HONEST_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
