import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_REFUSAL_PRICING } from "./constants";

import styles from "./ServiceRefusalPricing.module.scss";

export function ServiceRefusalPricing() {
  return (
    <ServiceSection
      id="service-refusal-pricing"
      tag={SERVICE_REFUSAL_PRICING.tag}
      title={SERVICE_REFUSAL_PRICING.title}
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Стоимость и сроки оформления отказных писем
          </caption>
          <thead>
            <tr>
              {SERVICE_REFUSAL_PRICING.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_REFUSAL_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_REFUSAL_PRICING.note}</p>
    </ServiceSection>
  );
}
