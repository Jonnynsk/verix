import type { ReactNode } from "react";

import type { MarqueeIconId } from "./constants";

type Props = { id: MarqueeIconId };

const vb = "0 0 14 14";
const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Линейные значки 14×14 под карточки услуг (щит, медаль, конверт, маркировка, колба, шестерня, весы, документ). */
export function MarqueeIcon({ id }: Props) {
  return (
    <svg
      width={14}
      height={14}
      viewBox={vb}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {glyphs[id]}
    </svg>
  );
}

const glyphs: Record<MarqueeIconId, ReactNode> = {
  trts: (
    <>
      <path
        {...stroke}
        d="M7 2.05 10.95 4.05V7.55L7 12.15 3.05 7.55V4.05L7 2.05z"
      />
      <path {...stroke} d="m5.35 6.65 1.15 1.15 2.5-2.5" />
    </>
  ),
  declar: (
    <>
      <circle {...stroke} cx={7} cy={5.25} r={2.85} />
      <path
        {...stroke}
        d="M5.1 8.35 4.35 12.25 7 10.85l2.65 1.4-.75-3.9"
      />
    </>
  ),
  mail: (
    <>
      <rect {...stroke} x={2} y={3.5} width={10} height={7} rx={1.2} />
      <path {...stroke} d="m2 5.25 5.25 3.1a1.2 1.2 0 0 0 1.5 0L12 5.25" />
    </>
  ),
  honest: (
    <>
      <path {...stroke} d="M3.25 5.6V3.25H5.6" />
      <path {...stroke} d="M8.4 3.25h2.35V5.6" />
      <path {...stroke} d="M3.25 8.4v2.35H5.6" />
      <path {...stroke} d="M10.75 8.4v2.35H8.4" />
      <circle {...stroke} cx={7} cy={7} r={1.35} />
    </>
  ),
  lab: (
    <>
      <path
        {...stroke}
        d="M8.1 1.75v3.35c0 .25.05.5.15.7l2.35 5.15A2.05 2.05 0 0 1 8.65 13H5.35a2.05 2.05 0 0 1-1.95-2.05l2.35-5.15c.1-.2.15-.45.15-.7V1.75"
      />
      <path {...stroke} d="M5.75 1.75h2.5" />
      <path {...stroke} d="M4.55 9.25h4.9" />
    </>
  ),
  tu: (
    <>
      <circle {...stroke} cx={7} cy={7} r={2.15} />
      <circle {...stroke} cx={7} cy={7} r={4.75} />
      <path {...stroke} d="M7 1.25v1.35M7 11.4v1.35M1.25 7h1.35M11.4 7h1.35" />
      <path {...stroke} d="m3.05 3.05 1 .99M10.95 3.05l-1 .99M3.05 10.95l1-1M10.95 10.95l-1-1" />
    </>
  ),
  scale: (
    <>
      <path {...stroke} d="M7 1.75v10.5" />
      <path {...stroke} d="M2.4 5.1 4.35 8.4H.45L2.4 5.1z" />
      <path {...stroke} d="M11.6 5.1 9.65 8.4h3.9L11.6 5.1z" />
      <path {...stroke} d="M1.75 4.75h10.5" />
      <path {...stroke} d="M4.85 12.25h4.3" />
    </>
  ),
  volDoc: (
    <>
      <path
        {...stroke}
        d="M8.5 1.75H3.75a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1V4.75L8.5 1.75z"
      />
      <path {...stroke} d="M8.5 1.75v3h3" />
      <path {...stroke} d="m8.85 8.35 1.1 1.1 2.2-2.2" />
    </>
  ),
};
