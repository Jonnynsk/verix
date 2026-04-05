import { Fragment } from "react";

import { MARQUEE_ITEMS } from "./constants";
import { MarqueeIcon } from "./MarqueeIcon";

import styles from "./Marquee.module.scss";

function MarqueeRow() {
  return (
    <>
      {MARQUEE_ITEMS.map(({ label, icon }, i) => (
        <Fragment key={`${label}-${i}`}>
          <span className={styles.marquee__segment}>
            <span className={styles.marquee__item}>
              <span>{label}</span>
              <MarqueeIcon id={icon} />
            </span>
          </span>
          <span className={styles.marquee__sep} aria-hidden>
            •
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <aside className={styles.marquee} aria-label="Направления сертификации">
      <div className={styles.marquee__track}>
        <div className={styles.marquee__group}>
          <MarqueeRow />
        </div>
        <div className={styles.marquee__group} aria-hidden>
          <MarqueeRow />
        </div>
        <div className={styles.marquee__group} aria-hidden>
          <MarqueeRow />
        </div>
      </div>
    </aside>
  );
}
