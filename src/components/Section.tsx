import type { PropsWithChildren, ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly separator?: boolean;
  readonly title: string;
};

export default function Section({ children, separator, title }: Props) {
  return (
    <section className="flex w-full max-w-[600px] flex-col gap-y-3">
      {separator && <div className="h-[2px] grow rounded-full bg-black/20 dark:bg-white/20" />}
      <h1 className="m-0 flex w-full max-w-[600px] items-center gap-x-3 font-semibold">
        {title}
        <div className="h-[2px] grow rounded-full bg-black/20 dark:bg-white/20" />
      </h1>
      {children}
    </section>
  );
}

export function SubSection({ children }: PropsWithChildren) {
  return <span className="w-full max-w-[600px] text-justify text-gray-700 dark:text-gray-300/90">{children}</span>;
}
