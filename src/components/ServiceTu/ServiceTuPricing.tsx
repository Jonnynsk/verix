import { SERVICE_TU_PRICING } from "./constants";
import { ServiceSection } from "@/components/ServiceSection";

import styles from "./ServiceTuPricing.module.scss";

export function ServiceTuPricing() {
  return (
    <ServiceSection
      id="service-tu-pricing"
      tag={SERVICE_TU_PRICING.tag}
      title={SERVICE_TU_PRICING.title}
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Актуальные сроки и ориентировочная стоимость услуг по разработке ТУ
          </caption>
          <thead>
            <tr>
              <th scope="col">Услуга</th>
              <th scope="col">Сроки</th>
              <th scope="col">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {SERVICE_TU_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_TU_PRICING.note}</p>
    </ServiceSection>
  );
}
