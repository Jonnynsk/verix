import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";

import { SERVICE_TU_HERO } from "./constants";

import styles from "./ServiceTuHero.module.scss";

export function ServiceTuHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-tu-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_TU_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-tu-hero-title" className={styles.hero__title}>
            {SERVICE_TU_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_TU_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId="social-consult"
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_TU_HERO.ctaPrimary}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}