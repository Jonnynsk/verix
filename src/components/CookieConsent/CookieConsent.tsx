"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import styles from "./CookieConsent.module.scss";

const STORAGE_KEY = "verix:cookie-consent:v1";

type CookieConsentProps = {
  privacyHref?: string;
};

export function CookieConsent({
  privacyHref = "/privacy",
}: CookieConsentProps) {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = window.localStorage.getItem(STORAGE_KEY) === "1";
      setIsVisible(!accepted);
    } catch {
      // Если storage недоступен (например, privacy mode), показываем баннер каждый раз.
      setIsVisible(true);
    } finally {
      setIsReady(true);
    }
  }, []);

  const onAccept = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // no-op
    }
    setIsVisible(false);
  }, []);

  if (!isReady || !isVisible) return null;

  return (
    <section
      className={styles.cookieConsent}
      role="dialog"
      aria-label="Уведомление об использовании cookie"
    >
      <div className={styles.cookieConsent__inner}>
        <p className={styles.cookieConsent__text}>
          Мы используем файлы cookie для улучшения работы сайта. Продолжая
          пользоваться сайтом, вы соглашаетесь с нашей{" "}
          <Link className={styles.cookieConsent__link} href={privacyHref}>
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          type="button"
          className={styles.cookieConsent__button}
          onClick={onAccept}
        >
          Принять
        </button>
      </div>
    </section>
  );
}
