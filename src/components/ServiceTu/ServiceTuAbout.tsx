import { SERVICE_TU_ABOUT } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTuAbout.module.scss";

export function ServiceTuAbout() {
  return (
    <ServiceSection
      id="service-tu-about"
      tag={SERVICE_TU_ABOUT.tag}
      title={SERVICE_TU_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_TU_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_TU_ABOUT.items.map((item) => (
          <li key={item.title} className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>{item.title}</h3>
            <p className={styles.about__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>

      <p className={styles.about__note}>{SERVICE_TU_ABOUT.note}</p>
    </ServiceSection>
  );
}