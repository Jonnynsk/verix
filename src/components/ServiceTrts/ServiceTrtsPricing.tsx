import { SERVICE_TRTS_PRICING } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTrtsPricing.module.scss";

export function ServiceTrtsPricing() {
  return (
    <ServiceSection
      id="service-trts-pricing"
      tag={SERVICE_TRTS_PRICING.tag}
      title={SERVICE_TRTS_PRICING.title}
      variant="muted"
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Актуальные сроки и ориентировочная стоимость услуг по сертификации
            ТР ТС
          </caption>
          <thead>
            <tr>
              <th scope="col">Услуга</th>
              <th scope="col">Сроки</th>
              <th scope="col">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {SERVICE_TRTS_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_TRTS_PRICING.note}</p>
    </ServiceSection>
  );
}
