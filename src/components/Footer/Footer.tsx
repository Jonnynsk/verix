import { HeaderLogo } from "@/components/Header/HeaderLogo";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_ADDRESS,
  SITE_EMAIL,
} from "@/constants/site";
import {
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  FOOTER_TAGLINE,
} from "./constants";
import { FooterSocialIcons } from "./FooterSocialIcons";

import styles from "./Footer.module.scss";

function PhoneIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__main}>
          <div className={styles.footer__brand}>
            <HeaderLogo variant="footer" />
            <p className={styles.footer__tagline}>{FOOTER_TAGLINE}</p>
            <FooterSocialIcons />
          </div>

          <nav className={styles.footer__column} aria-label="Услуги">
            <h4 className={styles.footer__heading}>Услуги</h4>
            <ul className={styles.footer__list}>
              {FOOTER_SERVICES.map((item) => (
                <li key={item.href}>
                  <a className={styles.footer__link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.footer__column} aria-label="Компания">
            <h4 className={styles.footer__heading}>Компания</h4>
            <ul className={styles.footer__list}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.href}>
                  <a className={styles.footer__link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer__column}>
            <h4 className={styles.footer__heading}>Контакты</h4>
            <ul
              className={`${styles.footer__list} ${styles.footer__listContacts}`}
            >
              <li>
                <div className={styles.footer__contact}>
                  <span className={styles.footer__contactIcon}>
                    <PhoneIcon />
                  </span>
                  <div className={styles.footer__contactBody}>
                    <span className={styles.footer__contactLabel}>
                      Бесплатно по РФ
                    </span>
                    <a
                      className={styles.footer__contactValue}
                      href={`tel:${PHONE_TEL}`}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.footer__contact}>
                  <span className={styles.footer__contactIcon}>
                    <MailIcon />
                  </span>
                  <div className={styles.footer__contactBody}>
                    <span className={styles.footer__contactLabel}>Email</span>
                    <a
                      className={`${styles.footer__contactValue}`}
                      href={`mailto:${SITE_EMAIL}`}
                    >
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.footer__contact}>
                  <span className={styles.footer__contactIcon}>
                    <MapIcon />
                  </span>
                  <div className={styles.footer__contactBody}>
                    <span className={styles.footer__contactLabel}>Офис</span>
                    <p>{SITE_ADDRESS}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © {year} Сертификационный центр ВЕРИКС. Все права защищены.
          </p>
          <ul className={styles.footer__legal}>
            {FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <a className={styles.footer__legalLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
