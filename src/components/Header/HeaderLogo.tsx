import Link from "next/link";

import styles from "./HeaderLogo.module.scss";

type HeaderLogoProps = {
  href?: string;
  /** Тёмный подвал: белый вордмарк, марка 40×40 */
  variant?: "header" | "footer";
};

export function HeaderLogo({
  href = "/",
  variant = "header",
}: HeaderLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link href={href} className={styles.link} aria-label="Верикс — на главную">
      <span
        className={`${styles.mark} ${isFooter ? styles.mark_footer : ""}`}
        aria-hidden
      >
        В
      </span>
      <span
        className={`${styles.wordmark} ${isFooter ? styles.wordmark_footer : ""}`}
      >
        ВЕРИКС
      </span>
    </Link>
  );
}
