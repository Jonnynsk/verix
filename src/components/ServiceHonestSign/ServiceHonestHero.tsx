import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { SERVICE_HONEST_HERO } from "./constants";

import styles from "./ServiceHonestHero.module.scss";

export function ServiceHonestHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-honest-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_HONEST_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-honest-hero-title" className={styles.hero__title}>
            {SERVICE_HONEST_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_HONEST_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId={CONTACT_SECTION_ID}
              fallbackHref={CONTACT_SECTION_HREF}
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_HONEST_HERO.cta}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
