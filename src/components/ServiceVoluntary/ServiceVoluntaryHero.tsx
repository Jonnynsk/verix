import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { SERVICE_VOLUNTARY_HERO } from "./constants";

import styles from "./ServiceVoluntaryHero.module.scss";

export function ServiceVoluntaryHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-voluntary-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_VOLUNTARY_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-voluntary-hero-title" className={styles.hero__title}>
            {SERVICE_VOLUNTARY_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_VOLUNTARY_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId={CONTACT_SECTION_ID}
              fallbackHref={CONTACT_SECTION_HREF}
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_VOLUNTARY_HERO.ctaPrimary}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
