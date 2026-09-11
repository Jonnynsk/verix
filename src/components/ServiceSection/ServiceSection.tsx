import type { ReactNode } from "react";

import styles from "./ServiceSection.module.scss";

type ServiceSectionProps = {
  id?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "white" | "muted";
};

export function ServiceSection({
  id,
  tag,
  title,
  subtitle,
  children,
  variant = "white",
}: ServiceSectionProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      className={`${styles.section} ${styles[`section--${variant}`]}`}
      aria-labelledby={titleId}
    >
      <div className={styles.section__inner}>
        {tag ? <p className={styles.section__tag}>{tag}</p> : null}
        <h2 id={titleId} className={styles.section__title}>
          {title}
        </h2>
        {subtitle ? (
          <p className={styles.section__subtitle}>{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
