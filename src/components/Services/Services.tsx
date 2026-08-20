import {
  SERVICES_SUBTITLE,
  SERVICES_TAG,
  SERVICES_TITLE,
} from "./constants";
import { ServicesGrid } from "./ServicesGrid";

import styles from "./Services.module.scss";

export function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className={styles.services__inner}>
        <p className={styles.services__tag}>{SERVICES_TAG}</p>
        <h2 id="services-title" className={styles.services__title}>
          {SERVICES_TITLE}
        </h2>
        <p className={styles.services__subtitle}>{SERVICES_SUBTITLE}</p>

        <ServicesGrid />
      </div>
    </section>
  );
}
