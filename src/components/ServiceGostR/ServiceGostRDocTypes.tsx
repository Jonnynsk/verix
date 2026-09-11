import { ScrollToAnchorLink } from "@/components/ScrollToAnchorLink";
import { CONTACT_SECTION_HREF, CONTACT_SECTION_ID } from "@/constants/site";

import { SERVICE_GOST_R_DOC_TYPES } from "./constants";
import { ServiceSection } from "@/components/ServiceSection";

import styles from "./ServiceGostRDocTypes.module.scss";

export function ServiceGostRDocTypes() {
  return (
    <ServiceSection
      id="service-gost-r-doc-types"
      tag={SERVICE_GOST_R_DOC_TYPES.tag}
      title={SERVICE_GOST_R_DOC_TYPES.title}
      subtitle={SERVICE_GOST_R_DOC_TYPES.subtitle}
    >
      <ul className={styles.docTypes__grid}>
        {SERVICE_GOST_R_DOC_TYPES.items.map((item) => (
          <li key={item.title} className={styles.docTypes__card}>
            <h3 className={styles.docTypes__cardTitle}>{item.title}</h3>
            <p className={styles.docTypes__cardText}>{item.text}</p>
          </li>
        ))}
      </ul>

      <p className={styles.docTypes__ctaWrap}>
        <ScrollToAnchorLink
          targetId={CONTACT_SECTION_ID}
          fallbackHref={CONTACT_SECTION_HREF}
          className={styles.docTypes__cta}
        >
          {SERVICE_GOST_R_DOC_TYPES.cta}
        </ScrollToAnchorLink>
      </p>
    </ServiceSection>
  );
}