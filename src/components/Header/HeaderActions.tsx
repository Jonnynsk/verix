import { PHONE_DISPLAY, PHONE_TEL } from "./constants";
import { PhoneIcon } from "./PhoneIcon";

import styles from "./HeaderActions.module.scss";

type HeaderActionsProps = {
  variant?: "stacked" | "inline";
  onConsultClick?: () => void;
};

export function HeaderActions({
  variant = "stacked",
  onConsultClick,
}: HeaderActionsProps) {
  const wrapClass =
    variant === "inline" ? `${styles.wrap} ${styles.inline}` : styles.wrap;

  return (
    <div className={wrapClass}>
      <div className={styles.phoneRow}>
        <span className={styles.iconCircle}>
          <PhoneIcon />
        </span>
        <a className={styles.phone} href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>
      </div>
      <a
        href="#consult"
        className={styles.consult}
        onClick={onConsultClick}
      >
        Консультация
      </a>
    </div>
  );
}
