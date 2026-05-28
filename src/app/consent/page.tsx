import type { Metadata } from "next";

import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { SEO_SITE_NAME } from "@/constants/seo";

import styles from "../privacy/privacy.module.scss";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных | ВЕРИКС",
  description:
    "Согласие субъекта персональных данных на обработку персональных данных Сертификационного центра ВЕРИКС.",
};

export default function ConsentPage() {
  return (
    <main className={styles.privacy}>
      <div className={styles.privacy__inner}>
        <article className={styles.privacy__article}>
          <h1 className={styles.privacy__title}>
            Согласие на обработку персональных данных
          </h1>

          <section className={styles.privacy__section} id="general">
            <h2 className={styles.privacy__heading}>1. Общие положения</h2>
            <p className={styles.privacy__text}>
              Настоящий документ определяет условия, на которых субъект
              персональных данных предоставляет согласие {SEO_SITE_NAME} (далее
              — Оператор) на обработку своих персональных данных в соответствии
              с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных
              данных».
            </p>
            <p
              className={`${styles.privacy__text} ${styles["privacy__text--spaced"]}`}
            >
              Согласие является отдельным документом и не заменяет{" "}
              <a className={styles.privacy__link} href="/privacy">
                Политику в отношении обработки персональных данных
              </a>
              .
            </p>
          </section>

          <section className={styles.privacy__section} id="operator">
            <h2 className={styles.privacy__heading}>2. Оператор</h2>
            <p className={styles.privacy__text}>
              Оператор: {SEO_SITE_NAME}. Контакт для обращений по вопросам
              обработки персональных данных:{" "}
              <a className={styles.privacy__link} href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              , телефон{" "}
              <a className={styles.privacy__link} href={`tel:${PHONE_TEL}`}>
                {PHONE_TEL}
              </a>
              .
            </p>
          </section>

          <section className={styles.privacy__section} id="data">
            <h2 className={styles.privacy__heading}>
              3. Перечень персональных данных
            </h2>
            <p className={styles.privacy__text}>
              Согласие распространяется на следующие категории персональных
              данных, которые субъект персональных данных добровольно
              предоставляет или которые автоматически передаются при
              использовании веб-сайта и обращении к Оператору:
            </p>
            <ul className={styles.privacy__bullets}>
              <li>
                технические данные: IP-адрес, файлы cookie, сведения об
                устройстве, операционной системе, браузере, действиях на
                веб-сайте;
              </li>
              <li>
                контактные данные: номер телефона, адрес электронной почты,
                сведения, содержащиеся в сообщениях при обращении через
                мессенджеры и социальные сети;
              </li>
              <li>
                иные сведения, которые субъект персональных данных сообщает
                Оператору при обращении.
              </li>
            </ul>
          </section>

          <section className={styles.privacy__section} id="purposes">
            <h2 className={styles.privacy__heading}>4. Цели обработки</h2>
            <p className={styles.privacy__text}>
              Персональные данные обрабатываются в целях:
            </p>
            <ul className={styles.privacy__bullets}>
              <li>
                предоставления доступа к информации и материалам веб-сайта;
              </li>
              <li>
                обработки обращений, консультирования и обратной связи с
                субъектом персональных данных;
              </li>
              <li>
                обеспечения функционирования и улучшения веб-сайта, в том числе
                с использованием систем веб-аналитики (при наличии согласия на
                использование cookie).
              </li>
            </ul>
          </section>

          <section className={styles.privacy__section} id="actions">
            <h2 className={styles.privacy__heading}>
              5. Действия с персональными данными
            </h2>
            <p className={styles.privacy__text}>
              Оператор вправе осуществлять с персональными данными следующие
              действия (операции): сбор, запись, систематизация, накопление,
              хранение, уточнение (обновление, изменение), извлечение,
              использование, передача (предоставление, доступ), обезличивание,
              блокирование, удаление и уничтожение — с использованием средств
              автоматизации и без их использования.
            </p>
          </section>

          <section className={styles.privacy__section} id="term">
            <h2 className={styles.privacy__heading}>6. Срок действия согласия</h2>
            <p className={styles.privacy__text}>
              Согласие действует с момента его предоставления до достижения
              целей обработки персональных данных либо до момента отзыва
              согласия субъектом персональных данных, если иное не предусмотрено
              законодательством Российской Федерации.
            </p>
          </section>

          <section className={styles.privacy__section} id="withdrawal">
            <h2 className={styles.privacy__heading}>7. Отзыв согласия</h2>
            <p className={styles.privacy__text}>
              Субъект персональных данных вправе отозвать настоящее согласие,
              направив Оператору уведомление на адрес электронной почты{" "}
              <a className={styles.privacy__link} href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>{" "}
              с пометкой «Отзыв согласия на обработку персональных данных».
              Отзыв не влияет на законность обработки, осуществлённой до его
              получения Оператором.
            </p>
          </section>

          <section className={styles.privacy__section} id="confirmation">
            <h2 className={styles.privacy__heading}>
              8. Порядок предоставления согласия
            </h2>
            <ol className={styles.privacy__list}>
              <li>
                8.1. На веб-сайте отсутствуют формы для сбора персональных
                данных. Согласие считается предоставленным при добровольном
                обращении к Оператору по телефону, электронной почте, через
                мессенджеры или социальные сети, а также при продолжении
                использования веб-сайта после ознакомления с настоящим
                документом и Политикой обработки персональных данных.
              </li>
              <li>
                8.2. При использовании файлов cookie согласие на их обработку
                предоставляется отдельно через баннер на веб-сайте (при его
                отображении).
              </li>
              <li>
                8.3. Актуальная версия настоящего Согласия размещена по адресу{" "}
                <a className={styles.privacy__link} href="/consent">
                  https://verix-cert.ru/consent
                </a>
                .
              </li>
            </ol>
          </section>
        </article>
      </div>
    </main>
  );
}
