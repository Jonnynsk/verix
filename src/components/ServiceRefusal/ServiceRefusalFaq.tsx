import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_REFUSAL_FAQ } from "./constants";

import styles from "./ServiceRefusalFaq.module.scss";

export function ServiceRefusalFaq() {
  return (
    <ServiceSection
      id="service-refusal-faq"
      tag={SERVICE_REFUSAL_FAQ.tag}
      title={SERVICE_REFUSAL_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_REFUSAL_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
