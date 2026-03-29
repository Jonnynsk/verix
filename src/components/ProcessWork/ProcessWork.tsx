import {
  PROCESS_STEPS,
  PROCESS_SUBTITLE,
  PROCESS_TAG,
  PROCESS_TITLE,
} from "./constants";

import styles from "./ProcessWork.module.scss";

export function ProcessWork() {
  return (
    <section
      id="process"
      className={styles.process}
      aria-labelledby="process-title"
    >
      <div className={styles.process__inner}>
        <p className={styles.process__tag}>{PROCESS_TAG}</p>
        <h2 id="process-title" className={styles.process__title}>
          {PROCESS_TITLE}
        </h2>
        <p className={styles.process__subtitle}>{PROCESS_SUBTITLE}</p>

        <div className={styles.process__timeline}>
          <div className={styles.process__line} aria-hidden />
          <ol className={styles.process__steps}>
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className={styles.process__step}
              >
                <div className={styles.process__markerWrap}>
                  <span
                    className={`${styles.process__marker} ${
                      step.state === "active"
                        ? styles["process__marker--active"]
                        : styles["process__marker--pending"]
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 className={styles.process__stepTitle}>{step.title}</h3>
                <p className={styles.process__stepText}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
