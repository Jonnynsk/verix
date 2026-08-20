import { SERVICE_TRTS_ABOUT } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTrtsAbout.module.scss";

export function ServiceTrtsAbout() {
  return (
    <ServiceSection
      id="service-trts-about"
      tag={SERVICE_TRTS_ABOUT.tag}
      title={SERVICE_TRTS_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_TRTS_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_TRTS_ABOUT.categories.map((item) => (
          <li key={item.title} className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>{item.title}</h3>
            <p className={styles.about__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
