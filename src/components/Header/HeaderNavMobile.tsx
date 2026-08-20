"use client";

import Link from "next/link";

import type { NAV_ITEMS } from "./constants";

import styles from "./HeaderNav.module.scss";

type Item = (typeof NAV_ITEMS)[number];

type HeaderNavMobileProps = {
  items: readonly Item[];
  id?: string;
  onNavigate?: () => void;
};

export function HeaderNavMobile({
  items,
  id,
  onNavigate,
}: HeaderNavMobileProps) {
  return (
    <nav className={styles.headerNav} id={id} aria-label="Основная навигация">
      <ul className={styles.headerNav__list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.headerNav__link}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
            {"children" in item && item.children ? (
              <ul className={styles.headerNav__nested}>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={styles.headerNav__nestedLink}
                      onClick={onNavigate}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
