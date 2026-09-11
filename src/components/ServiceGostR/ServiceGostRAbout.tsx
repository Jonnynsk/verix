import { SERVICE_GOST_R_ABOUT } from "./constants";
import { ServiceSection } from "@/components/ServiceSection";

import styles from "./ServiceGostRAbout.module.scss";

export function ServiceGostRAbout() {
  return (
    <ServiceSection
      id="service-gost-r-about"
      tag={SERVICE_GOST_R_ABOUT.tag}
      title={SERVICE_GOST_R_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text} dangerouslySetInnerHTML={{ __html: SERVICE_GOST_R_ABOUT.text }} />
      <p className={styles.about__text2} dangerouslySetInnerHTML={{ __html: SERVICE_GOST_R_ABOUT.text2 }} />

      <ul className={styles.about__grid}>
        {SERVICE_GOST_R_ABOUT.categories.map((item) => (
          <li key={item.title} className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>{item.title}</h3>
            <p className={styles.about__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}