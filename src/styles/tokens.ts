/**
 * Токены для TS/inline styles (дубль семантики из SCSS/CSS).
 * Figma node 3312-1725 (+ header).
 */
export const colors = {
  white: "#ffffff",
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1e293b",
  slate900: "#0f172a",
  gray200: "#e5e7eb",
  cyan50: "#ecfeff",
  cyan200: "#a5f3fc",
  cyan400: "#22d3ee",
  cyan500: "#06b6d4",
  cyan600: "#0891b2",
  white95: "rgba(255, 255, 255, 0.95)",
  white90: "rgba(255, 255, 255, 0.9)",
  borderSubtle: "rgba(226, 232, 240, 0.5)",
} as const;

export const gradients = {
  primaryCta:
    "linear-gradient(60deg, rgb(6, 182, 212) 25%, rgb(59, 130, 246) 100%)",
  heroFade:
    "linear-gradient(135deg, rgb(236, 254, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
} as const;

export const layout = {
  containerMax: 1280,
  contentMax: 1216,
  pagePaddingXMobile: 16,
  pagePaddingXTablet: 32,
  pagePaddingXDesktop: 80,
  pagePaddingXWide: 112,
} as const;

export const font = {
  family: '"Manrope", system-ui, sans-serif',
  sizeBody: 16,
  sizeLead: 20,
  sizeDisplay: 48,
  sizeMarquee: 14,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;
