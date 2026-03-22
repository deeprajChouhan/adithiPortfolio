import { MapPin, Timer } from 'lucide-react';

import type { Internship } from '@/data/content';

export function ExperienceCard({ internship }: { internship: Internship }) {
  return (
    <article className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="rounded-full bg-olive/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-olive">
            {internship.label}
          </span>
          <h3 className="mt-4 font-display text-3xl text-charcoal">{internship.role}</h3>
          <p className="mt-2 text-lg text-wine">{internship.company}</p>
        </div>
        <div className="space-y-2 text-sm text-charcoal/65">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span>{internship.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={16} className="text-gold" />
            <span>{internship.duration}</span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-base leading-7 text-charcoal/75">{internship.summary}</p>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-charcoal/75 sm:grid-cols-2">
        {internship.responsibilities.map((responsibility) => (
          <li key={responsibility} className="rounded-2xl bg-cream px-4 py-3">
            {responsibility}
          </li>
        ))}
      </ul>
    </article>
  );
}
