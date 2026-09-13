import { ServiceSection } from "@/components/ServiceSection";
import { ABOUT_PRINCIPLES } from "./constants";
import styles from "./AboutPrinciples.module.scss";

export function AboutPrinciples() {
  return (
    <ServiceSection
      id="principles"
      tag={ABOUT_PRINCIPLES.tag}
      title={ABOUT_PRINCIPLES.title}
      variant="white"
    >
      <ul className={styles.principles__grid}>
        {ABOUT_PRINCIPLES.items.map((item) => (
          <li key={item.title} className={styles.principles__card}>
            <h3 className={styles.principles__cardTitle}>{item.title}</h3>
            <p className={styles.principles__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
