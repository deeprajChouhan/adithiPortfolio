import { Knife, ShieldCheck, Sparkles, TimerReset } from 'lucide-react';

import type { Skill } from '@/data/content';

const iconMap = [Knife, Sparkles, ShieldCheck, TimerReset];

export function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {skills.map((skill, index) => {
        const Icon = iconMap[index % iconMap.length];

        return (
          <article key={skill.name} className="rounded-[1.75rem] border border-charcoal/10 bg-white p-5 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-wine">
                <Icon size={18} />
              </div>
              <span className="rounded-full bg-charcoal px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                {skill.level}
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl text-charcoal">{skill.name}</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">{skill.description}</p>
          </article>
        );
      })}
    </div>
  );
}
