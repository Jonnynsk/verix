import styles from "./privacy.module.scss";

export default function PrivacyPage() {
  return (
    <main className={styles.privacy}>
      <div className={styles.privacy__inner}>
        <h1 className={styles.privacy__title}>Политика конфиденциальности</h1>
        <p className={styles.privacy__text}>
          Текст политики можно вставить сюда. Если нужно — сделаю аккуратную
          верстку под ваш контент (разделы, списки, якоря, дата обновления).
        </p>
      </div>
    </main>
  );
}

