"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navClass =
    variant === "horizontal"
      ? `${styles.headerNav} ${styles["headerNav--horizontal"]}`
      : styles.headerNav;

  return (
    <nav className={navClass} id={id} aria-label="Основная навигация">
      <ul className={styles.headerNav__list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={
                !isHome && item.href.startsWith("#") ? `/${item.href}` : item.href
              }
              className={styles.headerNav__link}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
