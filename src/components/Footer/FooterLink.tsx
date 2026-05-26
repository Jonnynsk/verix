"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
};

function resolveHref(href: string, isHome: boolean) {
  if (href.startsWith("#")) {
    return isHome ? href : `/${href}`;
  }
  return href;
}

export function FooterLink({ href, className, children }: FooterLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link href={resolveHref(href, isHome)} className={className}>
      {children}
    </Link>
  );
}
