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
    <Link
      href={href}
      className={styles.headerLogo__link}
      aria-label="Верикс — на главную"
    >
      <span
        className={`${styles.headerLogo__mark} ${
          isFooter ? styles["headerLogo__mark_footer"] : ""
        }`}
        aria-hidden
      >
        В
      </span>
      <span
        className={`${styles.headerLogo__wordmark} ${
          isFooter ? styles["headerLogo__wordmark_footer"] : ""
        }`}
      >
        ВЕРИКС
      </span>
    </Link>
  );
}
