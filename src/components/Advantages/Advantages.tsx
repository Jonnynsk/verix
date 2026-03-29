import { AdvantageGlyph } from "./AdvantageGlyph";
import {
  ADVANTAGE_CARDS,
  ADVANTAGES_SUBTITLE,
  ADVANTAGES_TAG,
  ADVANTAGES_TITLE,
} from "./constants";

import styles from "./Advantages.module.scss";

export function Advantages() {
  return (
    <section
      id="advantages"
      className={styles.advantages}
      aria-labelledby="advantages-title"
    >
      <div className={styles.advantages__inner}>
        <p className={styles.advantages__tag}>{ADVANTAGES_TAG}</p>
        <h2 id="advantages-title" className={styles.advantages__title}>
          {ADVANTAGES_TITLE}
        </h2>
        <p className={styles.advantages__subtitle}>{ADVANTAGES_SUBTITLE}</p>

        <ul className={styles.advantages__grid}>
          {ADVANTAGE_CARDS.map((card) => (
            <li key={card.title} className={styles.advantages__card}>
              <div
                className={`${styles.advantages__icon} ${styles[`advantages__icon--${card.tone}`]}`}
              >
                <AdvantageGlyph id={card.icon} />
              </div>
              <h3 className={styles.advantages__cardTitle}>{card.title}</h3>
              <p className={styles.advantages__cardText}>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
