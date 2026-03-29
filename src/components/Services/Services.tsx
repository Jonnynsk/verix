import { ServiceGlyph } from "./ServiceGlyph";
import {
  SERVICE_CARDS,
  SERVICES_SUBTITLE,
  SERVICES_TAG,
  SERVICES_TITLE,
} from "./constants";

import styles from "./Services.module.scss";

export function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className={styles.services__inner}>
        <p className={styles.services__tag}>{SERVICES_TAG}</p>
        <h2 id="services-title" className={styles.services__title}>
          {SERVICES_TITLE}
        </h2>
        <p className={styles.services__subtitle}>{SERVICES_SUBTITLE}</p>

        <ul className={styles.services__grid}>
          {SERVICE_CARDS.map((card) => (
            <li
              key={card.anchor}
              id={card.anchor}
              className={`${styles.services__card} ${styles[`services__card--${card.tone}`]}`}
            >
              <div
                className={`${styles.services__icon} ${styles[`services__icon--${card.tone}`]}`}
              >
                <ServiceGlyph id={card.icon} />
              </div>
              <h3 className={styles.services__cardTitle}>{card.title}</h3>
              <p className={styles.services__cardText}>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
