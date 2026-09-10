import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";
import { SERVICE_TRADEMARK_ABOUT } from "./constants";
import styles from "./ServiceTrademarkAbout.module.scss";

export function ServiceTrademarkAbout() {
  return (
    <ServiceSection
      id="service-trademark-about"
      tag={SERVICE_TRADEMARK_ABOUT.tag}
      title={SERVICE_TRADEMARK_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_TRADEMARK_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_TRADEMARK_ABOUT.benefits.map((item) => (
          <li key={item.title} className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>{item.title}</h3>
            <p className={styles.about__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
