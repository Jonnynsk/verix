import { ServiceSection } from "@/components/ServiceSection";

import { SERVICE_VOLUNTARY_PRICING } from "./constants";

import styles from "./ServiceVoluntaryPricing.module.scss";

export function ServiceVoluntaryPricing() {
  return (
    <ServiceSection
      id="service-voluntary-pricing"
      tag={SERVICE_VOLUNTARY_PRICING.tag}
      title={SERVICE_VOLUNTARY_PRICING.title}
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Стоимость и сроки оформления добровольной сертификации
          </caption>
          <thead>
            <tr>
              {SERVICE_VOLUNTARY_PRICING.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_VOLUNTARY_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_VOLUNTARY_PRICING.note}</p>
    </ServiceSection>
  );
}
