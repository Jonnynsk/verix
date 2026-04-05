import Link from "next/link";

import styles from "./HeaderLogo.module.scss";

type HeaderLogoProps = {
  href?: string;
  /** Тёмный подвал: белый вордмарк, марка 40×40 */
  variant?: "header" | "footer";
};

function BrandMark({ variant }: { variant: "header" | "footer" }) {
  const strokePrimary = variant === "footer" ? "#ffffff" : "#002D51";
  const strokeAccent = "#00B4B4";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden
      className={styles.headerLogo__brandMark}
    >
      <line
        x1="18"
        y1="42"
        x2="46"
        y2="70"
        stroke={strokePrimary}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <line
        x1="46"
        y1="70"
        x2="102"
        y2="24"
        stroke={strokeAccent}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      <BrandMark variant={variant} />
      <span
        className={`${styles.headerLogo__wordmark} ${
          isFooter ? styles.headerLogo__wordmark_footer : ""
        }`}
      >
        ВЕРИКС
      </span>
    </Link>
  );
}
