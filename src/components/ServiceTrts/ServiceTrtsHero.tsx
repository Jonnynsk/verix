import Link from "next/link";

import { PHONE_TEL } from "@/constants/site";

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
            <Link className={styles.hero__ctaPrimary} href="#service-trts-lead">
              {SERVICE_TRTS_HERO.ctaPrimary}
            </Link>
            <Link
              className={styles.hero__ctaSecondary}
              href={`tel:${PHONE_TEL}`}
            >
              {SERVICE_TRTS_HERO.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
