import { SERVICE_GOST_R_HERO } from "./constants";

import styles from "./ServiceGostRHero.module.scss";

export function ServiceGostRHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-gost-r-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_GOST_R_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-gost-r-hero-title" className={styles.hero__title}>
            {SERVICE_GOST_R_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_GOST_R_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <a
              href="#social-consult"
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_GOST_R_HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}