"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { NAV_ITEMS } from "./constants";
import { HeaderActions } from "./HeaderActions";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

import styles from "./Header.module.scss";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" aria-hidden>
      {open ? (
        <path
          fill="currentColor"
          d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
        />
      )}
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles["header__inner"]}>
        <div className={styles["header__bar"]}>
          <HeaderLogo />
          <div className={styles["header__nav--desktop"]}>
            <HeaderNav items={NAV_ITEMS} variant="horizontal" />
          </div>
          <div className={styles["header__actions--desktop"]}>
            <HeaderActions variant="inline" />
          </div>
          <button
            type="button"
            className={styles["header__menu-toggle"]}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles["header__sr-only"]}>
              {menuOpen ? "Закрыть меню" : "Открыть меню"}
            </span>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
        <div
          className={`${styles["header__mobile-panel"]} ${menuOpen ? styles["header__mobile-panel--open"] : ""}`}
          id={panelId}
          aria-hidden={!menuOpen}
        >
          <div className={styles["header__mobile-panel-inner"]}>
            <div
              className={styles["header__mobile-content"]}
              inert={menuOpen ? undefined : true}
            >
              <HeaderNav
                items={NAV_ITEMS}
                variant="stacked"
                onNavigate={closeMenu}
              />
              <HeaderActions
                variant="stacked"
                onConsultClick={closeMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
