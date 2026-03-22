'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import type { Dish } from '@/data/content';

export function Lightbox({ dish, onClose }: { dish: Dish | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-cream shadow-soft lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="relative min-h-[320px] lg:min-h-[640px]">
              <Image src={dish.image} alt={dish.name} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal"
              >
                <X size={18} />
              </button>
              <div className="space-y-6 pt-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">{dish.category}</p>
                  <h3 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">{dish.name}</h3>
                  <p className="mt-4 text-base leading-7 text-charcoal/75">{dish.description}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-charcoal/55">Main ingredients</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient) => (
                      <span key={ingredient} className="rounded-full bg-white px-3 py-1 text-sm text-charcoal/80">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-charcoal/55">Techniques used</p>
                  <ul className="mt-3 grid gap-2 text-sm text-charcoal/75">
                    {dish.techniques.map((technique) => (
                      <li key={technique}>• {technique}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-charcoal/10 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Plating note</p>
                <p className="mt-3 text-sm leading-6 text-charcoal/75">{dish.platingNote}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
