import styles from "./SeoContent.module.scss";

interface SeoContentProps {
  html?: string;
}

export function SeoContent({ html }: SeoContentProps) {
  if (!html) return null;

  return (
    <section className={styles.section} aria-labelledby="seo-article-heading">
      <div className={styles.section__inner}>
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
