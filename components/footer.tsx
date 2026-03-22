import { Instagram, Linkedin, Mail } from 'lucide-react';

import { socialLinks } from '@/data/content';
import { Logo } from './logo';

const iconMap = {
  Instagram,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-[#efe7d9] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <Logo />

        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition hover:border-wine hover:text-wine"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-charcoal/45">
            © 2026 Adithi Varma Sagi · Culinary Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
