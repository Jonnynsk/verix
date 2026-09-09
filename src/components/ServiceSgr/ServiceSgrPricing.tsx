import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_SGR_PRICING } from "./constants";

import styles from "./ServiceSgrPricing.module.scss";

export function ServiceSgrPricing() {
  return (
    <ServiceSection
      id="service-sgr-pricing"
      tag={SERVICE_SGR_PRICING.tag}
      title={SERVICE_SGR_PRICING.title}
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Стоимость и сроки оформления СГР
          </caption>
          <thead>
            <tr>
              {SERVICE_SGR_PRICING.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_SGR_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_SGR_PRICING.note}</p>
    </ServiceSection>
  );
}