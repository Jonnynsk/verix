import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_HONEST_WHY } from "./constants";

import styles from "./ServiceHonestWhy.module.scss";

export function ServiceHonestWhy() {
  return (
    <ServiceSection
      id="service-honest-why"
      tag={SERVICE_HONEST_WHY.tag}
      title={SERVICE_HONEST_WHY.title}
      variant="muted"
    >
      {SERVICE_HONEST_WHY.paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.why__text}>
          {paragraph}
        </p>
      ))}
    </ServiceSection>
  );
}
