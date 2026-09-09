import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_VOLUNTARY_FAQ } from "./constants";

import styles from "./ServiceVoluntaryFaq.module.scss";

export function ServiceVoluntaryFaq() {
  return (
    <ServiceSection
      id="service-voluntary-faq"
      tag={SERVICE_VOLUNTARY_FAQ.tag}
      title={SERVICE_VOLUNTARY_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_VOLUNTARY_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}
