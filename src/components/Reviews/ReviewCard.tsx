"use client";

import { useId, useMemo, useState } from "react";

import type { Review } from "./constants";

import styles from "./Reviews.module.scss";

type ReviewCardProps = {
  review: Review;
};

const MIN_CHARS_TO_TOGGLE = 240;

export function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();

  const hasToggle = useMemo(
    () => review.quote.trim().length >= MIN_CHARS_TO_TOGGLE,
    [review.quote],
  );

  return (
    <li
      className={`${styles.reviews__card} ${
        expanded ? styles["reviews__card--expanded"] : ""
      }`}
    >
      <div className={styles.reviews__top}>
        <div
          className={`${styles.reviews__avatar} ${
            styles[`reviews__avatar--${review.tone}`]
          }`}
          aria-hidden
        >
          {review.initials}
        </div>

        <div className={styles.reviews__personName}>{review.name}</div>
      </div>

      <p
        id={quoteId}
        className={`${styles.reviews__quote} ${
          !expanded ? styles["reviews__quote--clamped"] : ""
        }`}
      >
        &quot;{review.quote}&quot;
      </p>

      {hasToggle ? (
        <button
          type="button"
          className={styles.reviews__toggle}
          aria-expanded={expanded}
          aria-controls={quoteId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Свернуть" : "Читать полностью"}
        </button>
      ) : null}
    </li>
  );
}
