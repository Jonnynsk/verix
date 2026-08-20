import Link from "next/link";

import { SERVICE_TRTS_DOC_TYPES } from "./constants";
import { ServiceSection } from "./ServiceSection";

import styles from "./ServiceTrtsDocTypes.module.scss";

export function ServiceTrtsDocTypes() {
  return (
    <ServiceSection
      id="service-trts-doc-types"
      tag={SERVICE_TRTS_DOC_TYPES.tag}
      title={SERVICE_TRTS_DOC_TYPES.title}
      subtitle={SERVICE_TRTS_DOC_TYPES.subtitle}
    >
      <ul className={styles.docTypes__grid}>
        {SERVICE_TRTS_DOC_TYPES.items.map((item) => (
          <li key={item.title} className={styles.docTypes__card}>
            <h3 className={styles.docTypes__cardTitle}>{item.title}</h3>
            <p className={styles.docTypes__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>

      <p className={styles.docTypes__ctaWrap}>
        <Link className={styles.docTypes__cta} href="#service-trts-lead">
          {SERVICE_TRTS_DOC_TYPES.cta}
        </Link>
      </p>
    </ServiceSection>
  );
}
