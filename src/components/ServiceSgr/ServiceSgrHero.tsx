import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";

import { SERVICE_SGR_HERO } from "./constants";

import styles from "./ServiceSgrHero.module.scss";

export function ServiceSgrHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-sgr-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_SGR_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-sgr-hero-title" className={styles.hero__title}>
            {SERVICE_SGR_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_SGR_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId="social-consult"
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_SGR_HERO.cta}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}