'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import type { Dish } from '@/data/content';

export function DishCard({ dish, onSelect }: { dish: Dish; onSelect: (dish: Dish) => void }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-card"
    >
      <button type="button" className="w-full text-left" onClick={() => onSelect(dish)}>
        <div className="relative aspect-[4/4.6] overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-sm shadow-sm">
            {dish.category}
          </div>
          <div className="absolute bottom-0 p-5 text-white">
            <h3 className="font-display text-3xl leading-none shadow-sm">{dish.name}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/90 drop-shadow-md">{dish.description}</p>
          </div>
        </div>
        <div className="space-y-5 p-5">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-charcoal/55">
              <Sparkles size={14} className="text-gold" />
              Techniques
            </div>
            <div className="flex flex-wrap gap-2">
              {dish.techniques.map((technique) => (
                <span
                  key={technique}
                  className="rounded-full bg-cream px-3 py-1 text-xs text-charcoal/75"
                >
                  {technique}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm leading-6 text-charcoal/70">{dish.platingNote}</p>
        </div>
      </button>
    </motion.article>
  );
}
