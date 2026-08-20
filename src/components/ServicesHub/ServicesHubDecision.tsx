import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICES_HUB_DECISION } from "./constants";

import styles from "./ServicesHubDecision.module.scss";

export function ServicesHubDecision() {
  return (
    <ServiceSection
      id="services-hub-decision"
      tag={SERVICES_HUB_DECISION.tag}
      title={SERVICES_HUB_DECISION.title}
      subtitle={SERVICES_HUB_DECISION.subtitle}
    >
      <ol className={styles.decision__list}>
        {SERVICES_HUB_DECISION.steps.map((step, index) => (
          <li key={step.title} className={styles.decision__item}>
            <span className={styles.decision__index} aria-hidden>
              {index + 1}
            </span>
            <div className={styles.decision__body}>
              <h3 className={styles.decision__title}>{step.title}</h3>
              <p className={styles.decision__text}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </ServiceSection>
  );
}
