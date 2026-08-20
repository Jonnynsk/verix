import { HeroVisual, SERVICES_HERO_IMAGE_SRC } from "@/components/HeroVisual";

import { SERVICES_HUB_HERO } from "./constants";

import styles from "./ServicesHubHero.module.scss";

export function ServicesHubHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-hub-hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <p className={styles.hero__tag}>{SERVICES_HUB_HERO.tag}</p>
          <h1 id="services-hub-hero-title" className={styles.hero__title}>
            {SERVICES_HUB_HERO.title}
          </h1>
          <p className={styles.hero__lead}>{SERVICES_HUB_HERO.lead}</p>
        </div>

        <HeroVisual
          imageSrc={SERVICES_HERO_IMAGE_SRC}
          imageAlt={SERVICES_HUB_HERO.imageAlt}
          floats={SERVICES_HUB_HERO.floats}
        />
      </div>
    </section>
  );
}
