import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";

import { SERVICE_TRTS_HERO } from "./constants";

import styles from "./ServiceTrtsHero.module.scss";

export function ServiceTrtsHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-trts-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_TRTS_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-trts-hero-title" className={styles.hero__title}>
            {SERVICE_TRTS_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_TRTS_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId="social-consult"
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_TRTS_HERO.ctaSecondary}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
