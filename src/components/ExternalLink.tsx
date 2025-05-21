import type { UrlObject } from "node:url";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly href: UrlObject | string;
  readonly title?: string;
};

export default function ExternalLink({ className, children, href, title }: Props) {
  return (
    <Link
      className={className ?? "underline underline-offset-4 hover:text-(--pink)"}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </Link>
  );
}
