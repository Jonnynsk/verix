import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_SGR_FAQ } from "./constants";

import styles from "./ServiceSgrFaq.module.scss";

export function ServiceSgrFaq() {
  return (
    <ServiceSection
      id="service-sgr-faq"
      tag={SERVICE_SGR_FAQ.tag}
      title={SERVICE_SGR_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_SGR_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}