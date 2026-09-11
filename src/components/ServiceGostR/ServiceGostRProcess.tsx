import { SERVICE_GOST_R_PROCESS } from "./constants";
import { ServiceSection } from "@/components/ServiceSection";

import styles from "./ServiceGostRProcess.module.scss";

export function ServiceGostRProcess() {
  return (
    <ServiceSection
      id="service-gost-r-process"
      tag={SERVICE_GOST_R_PROCESS.tag}
      title={SERVICE_GOST_R_PROCESS.title}
    >
      <ol className={styles.process__steps}>
        {SERVICE_GOST_R_PROCESS.steps.map((step, index) => (
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
          {SERVICE_GOST_R_PROCESS.docsTitle}
        </h3>
        <ul className={styles.process__docsList}>
          {SERVICE_GOST_R_PROCESS.docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </ServiceSection>
  );
}