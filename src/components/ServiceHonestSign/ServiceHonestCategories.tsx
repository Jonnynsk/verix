import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { HonestCategoryIcon } from "./HonestCategoryIcon";
import { SERVICE_HONEST_CATEGORIES } from "./constants";

import styles from "./ServiceHonestCategories.module.scss";

export function ServiceHonestCategories() {
  return (
    <ServiceSection
      id="service-honest-categories"
      tag={SERVICE_HONEST_CATEGORIES.tag}
      title={SERVICE_HONEST_CATEGORIES.title}
    >
      <p className={styles.categories__text}>{SERVICE_HONEST_CATEGORIES.text}</p>

      <ul className={styles.categories__grid}>
        {SERVICE_HONEST_CATEGORIES.items.map((item) => (
          <li key={item.id} className={styles.categories__item}>
            <span className={styles.categories__icon} aria-hidden>
              <HonestCategoryIcon id={item.id} />
            </span>
            <span className={styles.categories__label}>{item.label}</span>
          </li>
        ))}
      </ul>

      <p className={styles.categories__note}>{SERVICE_HONEST_CATEGORIES.note}</p>

      <p className={styles.categories__ctaWrap}>
        <ScrollToAnchorLink
          targetId={CONTACT_SECTION_ID}
          fallbackHref={CONTACT_SECTION_HREF}
          className={styles.categories__cta}
        >
          {SERVICE_HONEST_CATEGORIES.cta}
        </ScrollToAnchorLink>
      </p>
    </ServiceSection>
  );
}
