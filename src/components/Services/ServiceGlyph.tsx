import type { ServiceIconId } from "./constants";

const common = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceGlyph({ id }: { id: ServiceIconId }) {
  switch (id) {
    case "shieldCheck":
      return (
        <svg {...common} aria-hidden>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      );
    case "award":
      return (
        <svg {...common} aria-hidden>
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common} aria-hidden>
          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
          <path d="M6.453 15h11.094" />
          <path d="M8.5 2h7" />
        </svg>
      );
    case "cog":
      return (
        <svg {...common} aria-hidden>
          <path d="M11 10.27 7 3.34" />
          <path d="m11 13.73-4 6.93" />
          <path d="M12 22v-2" />
          <path d="M12 2v2" />
          <path d="M14 12h8" />
          <path d="m17 20.66-1-1.73" />
          <path d="m17 3.34-1 1.73" />
          <path d="M2 12h2" />
          <path d="m20.66 17-1.73-1" />
          <path d="m20.66 7-1.73 1" />
          <path d="m3.34 17 1.73-1" />
          <path d="m3.34 7 1.73 1" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    case "fileCheck":
      return (
        <svg {...common} aria-hidden>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4h4" />
          <path d="m9 13 2 2 4-4" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3v18" />
          <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
          <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
          <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
          <path d="M7 21h10" />
        </svg>
      );
    case "markHonest":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path
            d="
        M2 6 a 4 4 0 0 1 4 -4 H10 v 2 H6 a 2 2 0 0 0 -2 2 V10 H2 Z
        M22 6 a 4 4 0 0 0 -4 -4 H14 v 2 h 4 a 2 2 0 0 1 2 2 V10 h 2 Z
        M2 18 a 4 4 0 0 0 4 4 H10 v -2 H6 a 2 2 0 0 1 -2 -2 V14 H2 Z
        M22 18 a 4 4 0 0 1 -4 4 H14 v -2 h 4 a 2 2 0 0 0 2 -2 V14 h 2 Z
      "
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.05 13.35L10.95 16.05L16.95 9.85"
          />
        </svg>
      );
  }
}
