"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type ScrollToAnchorLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  fallbackHref?: string;
  onNavigate?: () => void;
};

export function ScrollToAnchorLink({
  targetId,
  className,
  children,
  fallbackHref,
  onNavigate,
}: ScrollToAnchorLinkProps) {
  const pathname = usePathname();
  const href = fallbackHref ?? `#${targetId}`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(
      null,
      "",
      `${pathname}${window.location.search}#${targetId}`,
    );
    onNavigate?.();
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
