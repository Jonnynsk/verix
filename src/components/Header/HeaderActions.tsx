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
  const rootClass =
    variant === "inline"
      ? `${styles.headerActions} ${styles["headerActions--inline"]}`
      : styles.headerActions;

  return (
    <div className={rootClass}>
      <div className={styles.headerActions__phoneRow}>
        <span className={styles.headerActions__iconCircle}>
          <PhoneIcon />
        </span>
        <a className={styles.headerActions__phone} href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>
      </div>
      <a
        href="#consult"
        className={styles.headerActions__consult}
        onClick={onConsultClick}
      >
        Консультация
      </a>
    </div>
  );
}
