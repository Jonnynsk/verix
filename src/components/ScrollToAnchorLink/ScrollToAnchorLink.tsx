"use client";

import type { MouseEvent, ReactNode } from "react";

type ScrollToAnchorLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
};

export function ScrollToAnchorLink({
  targetId,
  className,
  children,
}: ScrollToAnchorLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
