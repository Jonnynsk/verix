import { SERVICE_GOST_R_FAQ } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceGostRFaq.module.scss";

export function ServiceGostRFaq() {
  return (
    <ServiceSection
      id="service-gost-r-faq"
      tag={SERVICE_GOST_R_FAQ.tag}
      title={SERVICE_GOST_R_FAQ.title}
      variant="muted"
    >
      <div className={styles.faq__list}>
        {SERVICE_GOST_R_FAQ.items.map((item) => (
          <details key={item.question} className={styles.faq__item}>
            <summary className={styles.faq__question}>{item.question}</summary>
            <p className={styles.faq__answer} dangerouslySetInnerHTML={{ __html: item.answer }} />
          </details>
        ))}
      </div>
    </ServiceSection>
  );
}