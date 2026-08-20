"use client";

import Link from "next/link";

import type { NAV_ITEMS } from "./constants";

import styles from "./HeaderNav.module.scss";

type Item = (typeof NAV_ITEMS)[number];

type HeaderNavDesktopProps = {
  items: readonly Item[];
};

export function HeaderNavDesktop({ items }: HeaderNavDesktopProps) {
  function blurActive() {
    (document.activeElement as HTMLElement | null)?.blur();
  }

  return (
    <nav
      className={`${styles.headerNav} ${styles["headerNav--horizontal"]}`}
      aria-label="Основная навигация"
    >
      <ul className={styles.headerNav__list}>
        {items.map((item) =>
          "children" in item && item.children ? (
            <li key={item.href} className={styles.headerNav__dropdown}>
              <Link
                href={item.href}
                className={styles.headerNav__link}
                onClick={blurActive}
              >
                {item.label}
              </Link>
              <ul className={styles.headerNav__submenu} aria-label={item.label}>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={styles.headerNav__subLink}
                      onClick={blurActive}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href} className={styles.headerNav__link}>
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
