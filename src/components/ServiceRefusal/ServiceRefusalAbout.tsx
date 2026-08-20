import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { SERVICE_REFUSAL_ABOUT } from "./constants";

import styles from "./ServiceRefusalAbout.module.scss";

export function ServiceRefusalAbout() {
  return (
    <ServiceSection
      id="service-refusal-about"
      tag={SERVICE_REFUSAL_ABOUT.tag}
      title={SERVICE_REFUSAL_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_REFUSAL_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_REFUSAL_ABOUT.categories.map((item) => (
          <li key={item} className={styles.about__item}>
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.about__ctaWrap}>
        <ScrollToAnchorLink
          targetId={CONTACT_SECTION_ID}
          fallbackHref={CONTACT_SECTION_HREF}
          className={styles.about__cta}
        >
          {SERVICE_REFUSAL_ABOUT.cta}
        </ScrollToAnchorLink>
      </p>
    </ServiceSection>
  );
}
