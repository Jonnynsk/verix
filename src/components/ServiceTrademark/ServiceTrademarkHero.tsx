import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { SERVICE_TRADEMARK_HERO } from "./constants";
import { CONTACT_SECTION_ID } from "@/constants/site";
import styles from "./ServiceTrademarkHero.module.scss";

export function ServiceTrademarkHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="service-trademark-hero-title"
    >
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <ul className={styles.hero__badges} aria-label="Преимущества">
            {SERVICE_TRADEMARK_HERO.badges.map((badge) => (
              <li key={badge} className={styles.hero__badge}>
                {badge}
              </li>
            ))}
          </ul>

          <h1 id="service-trademark-hero-title" className={styles.hero__title}>
            {SERVICE_TRADEMARK_HERO.title}
          </h1>

          <p className={styles.hero__lead}>{SERVICE_TRADEMARK_HERO.lead}</p>

          <div className={styles.hero__actions}>
            <ScrollToAnchorLink
              targetId={CONTACT_SECTION_ID}
              className={styles.hero__ctaPrimary}
            >
              {SERVICE_TRADEMARK_HERO.cta}
            </ScrollToAnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
