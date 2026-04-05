import type { NAV_ITEMS } from "./constants";

import styles from "./HeaderNav.module.scss";

type Item = (typeof NAV_ITEMS)[number];

type HeaderNavProps = {
  items: readonly Item[];
  variant?: "stacked" | "horizontal";
  id?: string;
  onNavigate?: () => void;
};

export function HeaderNav({
  items,
  variant = "stacked",
  id,
  onNavigate,
}: HeaderNavProps) {
  const navClass =
    variant === "horizontal"
      ? `${styles.headerNav} ${styles["headerNav--horizontal"]}`
      : styles.headerNav;

  return (
    <nav className={navClass} id={id} aria-label="Основная навигация">
      <ul className={styles.headerNav__list}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={styles.headerNav__link}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
