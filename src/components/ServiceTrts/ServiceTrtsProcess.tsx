import { SERVICE_TRTS_PROCESS } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTrtsProcess.module.scss";

export function ServiceTrtsProcess() {
  return (
    <ServiceSection
      id="service-trts-process"
      tag={SERVICE_TRTS_PROCESS.tag}
      title={SERVICE_TRTS_PROCESS.title}
    >
      <ol className={styles.process__steps}>
        {SERVICE_TRTS_PROCESS.steps.map((step, index) => (
          <li key={step.title} className={styles.process__step}>
            <span className={styles.process__marker} aria-hidden>
              {index + 1}
            </span>
            <div className={styles.process__stepBody}>
              <h3 className={styles.process__stepTitle}>{step.title}</h3>
              <p className={styles.process__stepText}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.process__docs}>
        <h3 className={styles.process__docsTitle}>
          {SERVICE_TRTS_PROCESS.docsTitle}
        </h3>
        <ul className={styles.process__docsList}>
          {SERVICE_TRTS_PROCESS.docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </ServiceSection>
  );
}
