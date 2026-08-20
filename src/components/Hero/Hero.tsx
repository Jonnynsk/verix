import Link from "next/link";

import { HeroVisual, HERO_MAIN_IMAGE_SRC } from "@/components/HeroVisual";

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

const STATS = [
  { value: "200+", label: "Компаний" },
  { value: "10+", label: "Лет опыта" },
  { value: "24/7", label: "Поддержка" },
] as const;

const HERO_FLOATS = [
  {
    id: "cert",
    tone: "green",
    icon: "check",
    title: "Сертифицировано",
    subtitle: "ГОСТ Р",
    position: "primary",
  },
  {
    id: "speed",
    tone: "gradient",
    icon: "bolt",
    title: "Быстро",
    subtitle: "От 1 рабочего дня",
    position: "secondary",
  },
] as const;

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
            Оформляем все виды разрешительной документации для маркетплейсов
            (Wildberries, Ozon, Яндекс Маркет), производителей и импортеров.
            Работаем с ИП, ООО и самозанятыми. Гарантируем сроки и легитимность.
            Работаем по всей России.
          </p>

          <div className={styles.hero__actions}>
            <a className={styles.hero__ctaPrimary} href="#social-consult">
              Бесплатная консультация
              <ArrowRightIcon />
            </a>
            <Link className={styles.hero__ctaSecondary} href="/services">
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

        <HeroVisual
          imageSrc={HERO_MAIN_IMAGE_SRC}
          imageAlt="Специалисты центра сертификации за работой"
          floats={HERO_FLOATS}
          priority
        />
      </div>
    </section>
  );
}
