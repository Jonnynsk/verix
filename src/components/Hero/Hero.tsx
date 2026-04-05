import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.scss";

function ArrowRightIcon() {
  return (
    <svg
      className={styles.hero__ctaIcon}
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M8.5 3.5L14 9l-5.5 5.5M14 9H2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={18} height={20} viewBox="0 0 18 20" fill="none" aria-hidden>
      <path
        d="M15.5 5.5l-8.2 8.2L3 9.4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width={18} height={20} viewBox="0 0 18 20" fill="none" aria-hidden>
      <path d="M10 2L4 12h5l-1 6 7-10H10V2z" fill="currentColor" />
    </svg>
  );
}

const STATS = [
  { value: "200+", label: "Компаний" },
  { value: "10+", label: "Лет опыта" },
  { value: "24/7", label: "Поддержка" },
] as const;

const heroImageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/hero/hero-main.jpg`;

export function Hero() {
  return (
    <section id="consult" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <p className={styles.hero__badge}>
            <span className={styles.hero__badgeDot} aria-hidden />
            <span>Аккредитованный центр сертификации</span>
          </p>

          <h1 id="hero-title" className={styles.hero__title}>
            <span className={styles.hero__titleLine}>
              Ваш надежный
              <br />
              партнер в{" "}
            </span>
            <span className={styles.hero__titleAccent}>сертификации</span>
          </h1>

          <p className={styles.hero__lead}>
            Оформляем все виды разрешительной документации с гарантией сроков и
            легитимности. Работаем по всей России.
          </p>

          <div className={styles.hero__actions}>
            <a className={styles.hero__ctaPrimary} href="#consult">
              Бесплатная консультация
              <ArrowRightIcon />
            </a>
            <Link className={styles.hero__ctaSecondary} href="/#services">
              Все услуги
            </Link>
          </div>

          <dl className={styles.hero__stats}>
            {STATS.map((row) => (
              <div key={row.label} className={styles.hero__stat}>
                <dt className={styles.hero__statValue}>{row.value}</dt>
                <dd className={styles.hero__statLabel}>{row.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.hero__visual}>
          <div className={styles.hero__blob} aria-hidden />
          <div className={styles.hero__blobSecondary} aria-hidden />
          <div className={styles.hero__card}>
            <div className={styles.hero__imageWrap}>
              <Image
                className={styles.hero__image}
                src={heroImageSrc}
                alt="Специалисты центра сертификации за работой"
                fill
                sizes="(min-width: 1024px) 492px, 100vw"
                priority
              />
            </div>

            <div className={`${styles.hero__float} ${styles.hero__float_cert}`}>
              <span className={styles.hero__floatIcon} data-tone="green">
                <CheckIcon />
              </span>
              <div className={styles.hero__floatText}>
                <p className={styles.hero__floatTitle}>Сертифицировано</p>
                <p className={styles.hero__floatSub}>ГОСТ Р</p>
              </div>
            </div>

            <div
              className={`${styles.hero__float} ${styles.hero__float_speed}`}
            >
              <span className={styles.hero__floatIcon} data-tone="gradient">
                <BoltIcon />
              </span>
              <div className={styles.hero__floatText}>
                <p className={styles.hero__floatTitle}>Быстро</p>
                <p className={styles.hero__floatSub}>От 1 рабочего дня</p>
              </div>
            </div>

            <div className={styles.hero__decorDot} aria-hidden />
            <div className={styles.hero__decorDotSecondary} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
