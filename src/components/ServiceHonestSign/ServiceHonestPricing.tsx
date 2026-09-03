import { ServiceSection } from "@/components/ServiceTrts/ServiceSection";

import { SERVICE_HONEST_PRICING } from "./constants";

import styles from "./ServiceHonestPricing.module.scss";

export function ServiceHonestPricing() {
  return (
    <ServiceSection
      id="service-honest-pricing"
      tag={SERVICE_HONEST_PRICING.tag}
      title={SERVICE_HONEST_PRICING.title}
      variant="muted"
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Стоимость и сроки работы с системой маркировки Честный знак
          </caption>
          <thead>
            <tr>
              {SERVICE_HONEST_PRICING.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_HONEST_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_HONEST_PRICING.note}</p>
    </ServiceSection>
  );
}
