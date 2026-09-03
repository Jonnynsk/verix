import type { ReactNode } from "react";

import type { SERVICE_HONEST_CATEGORIES } from "./constants";

type CategoryId = (typeof SERVICE_HONEST_CATEGORIES.items)[number]["id"];

const common = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<CategoryId, ReactNode> = {
  shoes: (
    <svg {...common}>
      <path d="M3 18h18" />
      <path d="M7 18V9l4-3 4 3v9" />
      <path d="M11 6V4h2v2" />
    </svg>
  ),
  outerwear: (
    <svg {...common}>
      <path d="M12 3 7 8h3v13h4V8h3z" />
    </svg>
  ),
  textile: (
    <svg {...common}>
      <path d="M4 4h16v4H4z" />
      <path d="M6 8v12" />
      <path d="M18 8v12" />
      <path d="M6 20h12" />
    </svg>
  ),
  perfume: (
    <svg {...common}>
      <path d="M9 3h6v3H9z" />
      <path d="M10 6h4v2" />
      <rect x="8" y="8" width="8" height="13" rx="2" />
    </svg>
  ),
  tires: (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  photo: (
    <svg {...common}>
      <path d="M4 7h4l2-2h4l2 2h4v11H4z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  water: (
    <svg {...common}>
      <path d="M12 2.5c3 4 6 6.5 6 10a6 6 0 1 1-12 0c0-3.5 3-6 6-10z" />
    </svg>
  ),
  bikes: (
    <svg {...common}>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17h5l3-7h4" />
      <path d="M9 10l3-3h4" />
    </svg>
  ),
  medical: (
    <svg {...common}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  ),
};

export function HonestCategoryIcon({ id }: { id: CategoryId }) {
  return icons[id];
}
