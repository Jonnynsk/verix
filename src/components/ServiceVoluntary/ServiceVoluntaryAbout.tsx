import { ServiceSection } from "@/components/ServiceSection";

import { SERVICE_VOLUNTARY_ABOUT } from "./constants";

import styles from "./ServiceVoluntaryAbout.module.scss";

export function ServiceVoluntaryAbout() {
  return (
    <ServiceSection
      id="service-voluntary-about"
      tag={SERVICE_VOLUNTARY_ABOUT.tag}
      title={SERVICE_VOLUNTARY_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_VOLUNTARY_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_VOLUNTARY_ABOUT.categories.map((item) => (
          <li key={item.title} className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>{item.title}</h3>
            <p className={styles.about__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
