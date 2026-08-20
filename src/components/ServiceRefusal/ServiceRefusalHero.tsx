import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";

import { SERVICE_REFUSAL_HERO } from "./constants";

import styles from "./ServiceRefusalHero.module.scss";

export function ServiceRefusalHero() {
  return (
    <section className={styles.hero} aria-labelledby="service-refusal-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_REFUSAL_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-refusal-hero-title" className={styles.hero__title}>
            {SERVICE_REFUSAL_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_REFUSAL_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId="social-consult"
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_REFUSAL_HERO.cta}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
