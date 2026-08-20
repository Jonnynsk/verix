import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICES_HUB_CARDS } from "./constants";

import styles from "./ServicesHubCards.module.scss";

export function ServicesHubCards() {
  return (
    <ServiceSection
      id="services-hub-cards"
      tag={SERVICES_HUB_CARDS.tag}
      title={SERVICES_HUB_CARDS.title}
      subtitle={SERVICES_HUB_CARDS.subtitle}
      variant="muted"
    >
      <div className={styles.cards__grid}>
        <ServicesGrid />
      </div>
    </ServiceSection>
  );
}
