import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { ServiceSection } from "@/components/ServiceSection";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { SERVICE_SGR_ABOUT } from "./constants";

import styles from "./ServiceSgrAbout.module.scss";

export function ServiceSgrAbout() {
  return (
    <ServiceSection
      id="service-sgr-about"
      tag={SERVICE_SGR_ABOUT.tag}
      title={SERVICE_SGR_ABOUT.title}
      variant="muted"
    >
      <p className={styles.about__text}>{SERVICE_SGR_ABOUT.text}</p>

      <ul className={styles.about__grid}>
        {SERVICE_SGR_ABOUT.categories.map((item) => (
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
          {SERVICE_SGR_ABOUT.cta}
        </ScrollToAnchorLink>
      </p>
    </ServiceSection>
  );
}