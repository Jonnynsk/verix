import { SERVICE_GOST_R_PRICING } from "./constants";
import { ServiceSection } from "@/components/ServiceSection";
import styles from "./ServiceGostRPricing.module.scss";

export function ServiceGostRPricing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Декларация ГОСТ Р",
    description: "Оформление декларации соответствия ГОСТ Р для маркетплейсов",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      offerCount: SERVICE_GOST_R_PRICING.rows.length,
      offers: SERVICE_GOST_R_PRICING.rows.map((row) => ({
        "@type": "Offer",
        name: row.service,
        price: row.price.replace(/\D/g, "") || "0",
        priceCurrency: "RUB",
      })),
    },
  };

  return (
    <ServiceSection
      id="service-gost-r-pricing"
      tag={SERVICE_GOST_R_PRICING.tag}
      title={SERVICE_GOST_R_PRICING.title}
      variant="muted"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pricing__tableWrap}>
        <table className={styles.pricing__table}>
          <caption className={styles.pricing__caption}>
            Актуальные сроки и ориентировочная стоимость услуг по декларированию
            ГОСТ Р
          </caption>
          <thead>
            <tr>
              {SERVICE_GOST_R_PRICING.columns.map((col) => (
                <th key={col} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_GOST_R_PRICING.rows.map((row) => (
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
      <p className={styles.pricing__note}>{SERVICE_GOST_R_PRICING.note}</p>
    </ServiceSection>
  );
}
