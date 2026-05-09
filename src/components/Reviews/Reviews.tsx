import { REVIEWS_CARDS, REVIEWS_TAG, REVIEWS_TITLE } from "./constants";
import { ReviewCard } from "./ReviewCard";

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
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      </div>
    </section>
  );
}

