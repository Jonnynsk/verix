import styles from "./AboutFsaVerification.module.scss";

export function AboutFsaVerification() {
  return (
    <div className={styles.verification} aria-label="Статус верификации ФСА">
      <div className={styles.verification__iconWrap} aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <div className={styles.verification__content}>
        <div className={styles.verification__header}>
          <span className={styles.verification__title}>ФГИС Росаккредитация</span>
          <span className={styles.verification__badge}>
            <span className={styles.verification__dot} aria-hidden="true" />
            Реестр ФСА: Действует
          </span>
        </div>
        <p className={styles.verification__text}>
          Все оформленные документы мгновенно синхронизируются с официальной базой Росаккредитации и отображаются в публичном реестре до отгрузки на Wildberries и Ozon.
        </p>
      </div>
    </div>
  );
}
