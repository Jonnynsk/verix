import { ServiceSection } from "@/components/ServiceSection";
import { AboutFsaVerification } from "./AboutFsaVerification";
import { ABOUT_REQUISITES } from "./constants";
import styles from "./AboutRequisites.module.scss";

export function AboutRequisites() {
  return (
    <ServiceSection id="requisites" tag={ABOUT_REQUISITES.tag} title={ABOUT_REQUISITES.title} variant="muted">
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <tbody>
            {ABOUT_REQUISITES.data.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AboutFsaVerification />
      <p className={styles.note}>{ABOUT_REQUISITES.note}</p>
    </ServiceSection>
  );
}
