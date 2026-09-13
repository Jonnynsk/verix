import Image from "next/image";
import { ABOUT_HERO } from "./constants";
import styles from "./AboutHero.module.scss";

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <Image
        src="/images/about-hero-bg.avif"
        alt="Инфраструктура сертификационного центра ВЕРИКС"
        fill
        priority
        className={styles.hero__bg}
      />
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges}>
            {ABOUT_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>{badge}</li>
            ))}
          </ul>
          <h1 id="about-hero-title" className={styles.hero__title}>
            {ABOUT_HERO.title}
          </h1>
          <p className={styles.hero__lead}>{ABOUT_HERO.lead}</p>
        </div>
      </div>
    </section>
  );
}
