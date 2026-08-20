import Image from "next/image";

import styles from "./HeroVisual.module.scss";

export type HeroVisualFloatTone = "green" | "gradient" | "amber";

export type HeroVisualFloatIcon = "check" | "bolt" | "mail";

export type HeroVisualFloat = {
  id: string;
  tone: HeroVisualFloatTone;
  icon: HeroVisualFloatIcon;
  title: string;
  subtitle: string;
  position: "primary" | "secondary";
};

type HeroVisualProps = {
  imageSrc: string;
  imageAlt: string;
  floats: readonly HeroVisualFloat[];
  priority?: boolean;
};

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

function MailIcon() {
  return (
    <svg width={18} height={20} viewBox="0 0 18 20" fill="none" aria-hidden>
      <path
        d="M2 4h14v12H2V4zm0 0l7 6 7-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatIcon({ name }: { name: HeroVisualFloatIcon }) {
  switch (name) {
    case "check":
      return <CheckIcon />;
    case "bolt":
      return <BoltIcon />;
    case "mail":
      return <MailIcon />;
    default:
      return null;
  }
}

export function HeroVisual({
  imageSrc,
  imageAlt,
  floats,
  priority = false,
}: HeroVisualProps) {
  return (
    <div className={styles.visual}>
      <div className={styles.visual__blob} aria-hidden />
      <div className={styles.visual__blobSecondary} aria-hidden />
      <div className={styles.visual__card}>
        <div className={styles.visual__imageWrap}>
          <Image
            className={styles.visual__image}
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 492px, 100vw"
            priority={priority}
          />
        </div>

        {floats.map((item) => (
          <div
            key={item.id}
            className={`${styles.visual__float} ${styles[`visual__float_${item.position}`]}`}
          >
            <span className={styles.visual__floatIcon} data-tone={item.tone}>
              <FloatIcon name={item.icon} />
            </span>
            <div className={styles.visual__floatText}>
              <p className={styles.visual__floatTitle}>{item.title}</p>
              <p className={styles.visual__floatSub}>{item.subtitle}</p>
            </div>
          </div>
        ))}

        <div className={styles.visual__decorDot} aria-hidden />
        <div className={styles.visual__decorDotSecondary} aria-hidden />
      </div>
    </div>
  );
}
