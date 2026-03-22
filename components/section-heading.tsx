import { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        <div className="space-y-3">
          <h2 className="font-display text-4xl leading-none text-charcoal sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-7 text-charcoal/70 md:text-lg">{description}</p>
        </div>
      </div>
      {action}
    </div>
  );
}
