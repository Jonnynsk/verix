import { ServiceSection } from "@/components/ServiceSection";
import { SERVICE_TRADEMARK_PRICING } from "./constants";
import styles from "./ServiceTrademarkPricing.module.scss";

export function ServiceTrademarkPricing() {
  return (
    <ServiceSection
      id="service-trademark-pricing"
      tag={SERVICE_TRADEMARK_PRICING.tag}
      title={SERVICE_TRADEMARK_PRICING.title}
    >
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Стоимость и сроки регистрации товарного знака
          </caption>
          <thead>
            <tr>
              {SERVICE_TRADEMARK_PRICING.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_TRADEMARK_PRICING.rows.map((row) => (
              <tr key={row.service}>
                <td>{row.service}</td>
                <td>{row.term}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.pricing__note}>{SERVICE_TRADEMARK_PRICING.note}</p>
    </ServiceSection>
  );
}
