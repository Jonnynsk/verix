import { REVIEWS_CARDS, REVIEWS_TAG, REVIEWS_TITLE } from "./constants";
import { Stars } from "./Stars";

import styles from "./Reviews.module.scss";

export function Reviews() {
  return (
    <section
      id="reviews"
      className={styles.reviews}
      aria-labelledby="reviews-title"
    >
      <div className={styles.reviews__inner}>
        <p className={styles.reviews__tag}>{REVIEWS_TAG}</p>
        <h2 id="reviews-title" className={styles.reviews__title}>
          {REVIEWS_TITLE}
        </h2>

        <ul className={styles.reviews__grid}>
          {REVIEWS_CARDS.map((review) => (
            <li key={review.id} className={styles.reviews__card}>
              <div className={styles.reviews__top}>
                <div
                  className={`${styles.reviews__avatar} ${
                    styles[`reviews__avatar--${review.tone}`]
                  }`}
                  aria-hidden
                >
                  {review.initials}
                </div>

                <div>
                  <div className={styles.reviews__personName}>
                    {review.name}
                  </div>
                  <div className={styles.reviews__personCompany}>
                    {review.company}
                  </div>
                </div>
              </div>

              <div
                className={styles.reviews__stars}
                aria-label={`Рейтинг ${review.rating} из 5`}
              >
                <Stars rating={review.rating} />
              </div>

              <p className={styles.reviews__quote}>
                &quot;{review.quote}&quot;
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

