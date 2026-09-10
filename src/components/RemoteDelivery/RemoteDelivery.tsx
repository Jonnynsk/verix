import styles from "./RemoteDelivery.module.scss";

const DELIVERY_FEATURES = [
  {
    id: "eds",
    title: "100% удаленное оформление",
    description:
      "Работаем по ЭЦП (электронной цифровой подписи). Все сканы и макеты документов вы получаете на электронную почту или в мессенджер на согласование еще до отправки оригиналов.",
  },
  {
    id: "sdek",
    title: "Экспресс-доставка СДЭК",
    description:
      "Отправляем готовые бланки сертификатов, деклараций и отказных писем курьером прямо до вашего склада, офиса или пункта выдачи заказов.",
  },
  {
    id: "post",
    title: "Почта России и ТК",
    description:
      "Для отдаленных регионов и крупных партий используем надежные почтовые отправления с трек-номером для отслеживания.",
  },
  {
    id: "edo",
    title: "Официальный документооборот",
    description:
      "Полный комплект закрывающих документов (УПД, акты) через системы ЭДО (СБИС, Диадок) или почтой для вашей бухгалтерии.",
  },
] as const;

export function RemoteDelivery() {
  return (
    <section
      id="remote-delivery"
      className={styles.delivery}
      aria-labelledby="delivery-title"
    >
      <div className={styles.delivery__inner}>
        <p className={styles.delivery__tag}>Логистика и география</p>
        <h2 id="delivery-title" className={styles.delivery__title}>
          Работаем дистанционно по всей России. <br></br>
          Доставка оригиналов за 2–4 дня
        </h2>
        <p className={styles.delivery__subtitle}>
          Вам не нужно тратить время на поездки в офис. Оформляем всю
          разрешительную документацию удаленно и доставляем готовые оригиналы в
          любой регион РФ.
        </p>

        <ul className={styles.delivery__grid}>
          {DELIVERY_FEATURES.map((item, index) => (
            <li key={item.id} className={styles.delivery__card}>
              <div className={styles.delivery__number}>0{index + 1}</div>
              <h3 className={styles.delivery__cardTitle}>{item.title}</h3>
              <p className={styles.delivery__cardText}>{item.description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.delivery__notice}>
          <div className={styles.delivery__noticeBadge}>
            Важно для селлеров маркетплейсов
          </div>
          <p className={styles.delivery__noticeText}>
            Мы знаем, как важна каждая минута при отгрузке на склады{" "}
            <strong>Wildberries, Ozon</strong> или{" "}
            <strong>Яндекс Маркет</strong>. Готовые электронные версии
            документов загружаются в реестры (ФСА, ГИС МТ) в день регистрации, а
            физические оригиналы отправляются экспресс-почтой, чтобы вы успели
            вовремя закрыть поставку.
          </p>
        </div>
      </div>
    </section>
  );
}
