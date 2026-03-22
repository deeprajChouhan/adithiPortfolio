'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, GraduationCap, Mail, MapPin, Quote, Star } from 'lucide-react';
import { useMemo, useState } from 'react';


import { DishCard } from '@/components/dish-card';
import { ExperienceCard } from '@/components/experience-card';
import { Footer } from '@/components/footer';
import { Lightbox } from '@/components/lightbox';
import { Logo } from '@/components/logo';
import { Navbar } from '@/components/navbar';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SkillGrid } from '@/components/skill-grid';
import {
  certifications,
  chefProfile,
  dishCategories,
  dishes,
  education,
  heroStats,
  internships,
  skills,
  socialLinks,
  testimonials,
  type Dish,
} from '@/data/content';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof dishCategories)[number]>('All');
  const [activeDish, setActiveDish] = useState<Dish | null>(null);

  const filteredDishes = useMemo(() => {
    if (selectedCategory === 'All') return dishes;
    return dishes.filter((dish) => dish.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main id="home">
      <Navbar />

      <section className="section-shell relative overflow-hidden section-space pt-12 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal delay={0.15} className="relative">
            <div className="texture-panel relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-[#d9c4a7]/40 p-4 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/branding/adithi.jpeg"
                  alt="Editorial hero dish composition"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-5 bottom-8 max-w-xs rounded-[1.75rem] border border-white/30 bg-white/80 p-5 shadow-card backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Culinary focus</p>
                <p className="mt-3 text-sm leading-6 text-charcoal/75">
                  Elegant plating, flavour balance, kitchen discipline, and thoughtful growth through real internship experience.
                </p>
              </div>
              <div className="absolute -right-4 top-8 flex h-24 w-24 animate-float items-center justify-center rounded-full border border-white/30 bg-wine/85 font-display text-2xl text-white shadow-card">
                AVS
              </div>
            </div>
          </Reveal>

          <Reveal className="space-y-8">
            <Logo />
            <div className="inline-flex rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-charcoal/70 shadow-card backdrop-blur">
              Third-year Culinary Arts Management student
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-wine/80">{chefProfile.title}</p>
                <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] text-charcoal sm:text-7xl xl:text-[7rem]">
                  A refined culinary identity in the making.
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-charcoal/72 md:text-xl">{chefProfile.heroStatement}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#dishes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm uppercase tracking-[0.24em] text-white transition hover:bg-wine"
              >
                View My Dishes
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal px-6 py-4 text-sm uppercase tracking-[0.24em] text-charcoal transition hover:border-wine hover:text-wine"
              >
                Contact Me
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.1 * index}>
                  <div className="rounded-[1.75rem] border border-charcoal/10 bg-white/75 p-5 shadow-card backdrop-blur">
                    <p className="font-display text-3xl text-charcoal">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-charcoal/55">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A student chef building a personal culinary language."
            description="Authentic, ambitious, and carefully framed to reflect where Adithi is now — a committed culinary student with professional kitchen exposure through internships, not exaggerated executive-level claims."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <div className="texture-panel rounded-[2rem] border border-charcoal/10 bg-white/70 p-8 shadow-card">
              <p className="text-sm uppercase tracking-[0.28em] text-gold">Personal introduction</p>
              <p className="mt-6 text-lg leading-8 text-charcoal/72">{chefProfile.intro}</p>
              <p className="mt-6 text-base leading-7 text-charcoal/68">{chefProfile.philosophy}</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Current Journey',
                body: 'Currently in the third year of Culinary Arts Management studies, blending classroom learning with hands-on service experience.',
              },
              {
                title: 'Career Direction',
                body: 'Seeking kitchens where discipline, flavour awareness, and plating craft can continue to grow into a strong culinary foundation.',
              },
              {
                title: 'Creative Lens',
                body: 'Inspired by editorial aesthetics, warm hospitality, regional flavours, and dishes that feel memorable yet grounded.',
              },
              {
                title: 'Kitchen Mindset',
                body: 'Values consistency, hygiene, mise en place, and collaborative service as much as beautiful final presentation.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="rounded-[1.75rem] border border-charcoal/10 bg-[#f8f4ee] p-6 shadow-card">
                  <h3 className="font-display text-3xl text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic training with a practical kitchen focus."
            description="This section presents her studies clearly and professionally, reinforcing that she is an emerging chef still in training while highlighting the depth of her culinary preparation."
          />
        </Reveal>
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-charcoal/10 bg-charcoal p-8 text-white shadow-soft">
              <div className="flex items-center gap-3 text-gold">
                <GraduationCap size={18} />
                <p className="text-xs uppercase tracking-[0.3em]">Current programme</p>
              </div>
              <h3 className="mt-5 font-display text-4xl">{education.program}</h3>
              <p className="mt-3 text-lg text-cream/85">{education.institution}</p>
              <div className="mt-8 space-y-3 text-sm text-cream/80">
                <p>{education.location}</p>
                <p>{education.duration}</p>
                <p>{education.currentYear}</p>
              </div>
              <p className="mt-8 text-base leading-7 text-cream/85">{education.summary}</p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Previous Education</p>
                <p className="mt-3 font-medium text-cream">{education.previousEducation.institution}</p>
                <p className="mt-1 text-sm text-cream/75">{education.previousEducation.board}</p>
                <p className="mt-1 text-sm text-cream/75">{education.previousEducation.duration}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-card">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Coursework & focus areas</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {education.coursework.map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-cream px-5 py-4 text-sm text-charcoal/75">
                    <div className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 shrink-0 text-olive" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="internships" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Internships"
            title="Hands-on kitchen experience, presented honestly."
            description="Every role here is clearly framed as internship experience. The emphasis is on real responsibilities, steady growth, and the professional habits developed inside working kitchens."
          />
        </Reveal>
        <div className="grid gap-6">
          {internships.map((internship, index) => (
            <Reveal key={`${internship.company}-${internship.duration}`} delay={index * 0.08}>
              <ExperienceCard internship={internship} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="dishes" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Signature Dishes"
            title="The visual and creative centerpiece of the portfolio."
            description="A curated dish gallery designed to highlight flavour thinking, plating style, and technical growth. Content is data-driven so new dishes can be added or updated quickly later."
            action={
              <div className="flex flex-wrap gap-2">
                {dishCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${selectedCategory === category
                      ? 'bg-charcoal text-white'
                      : 'border border-charcoal/10 bg-white text-charcoal/70 hover:border-charcoal/30'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} onSelect={setActiveDish} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section id="skills" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Kitchen strengths presented with clarity and style."
            description="Rather than plain bullet points, the skill section gives each capability its own presence while keeping descriptions realistic and easy to update as her experience grows."
          />
        </Reveal>
        <Reveal>
          <SkillGrid skills={skills} />
        </Reveal>
      </section>

      <section id="achievements" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Certifications"
            title="A flexible space for workshops, certificates, and future milestones."
            description="Designed so new culinary workshops, short courses, awards, or competitions can be added as data entries without touching the overall layout."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-wine">
                    <Star size={20} />
                  </div>
                  <span className="rounded-full bg-olive/10 px-3 py-1 text-xs uppercase tracking-[0.26em] text-olive">
                    {item.date}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-base text-wine">{item.issuer}</p>
                <p className="mt-4 text-sm leading-6 text-charcoal/72">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Editable mentor feedback for a more human portfolio."
            description="These placeholder testimonials are intentionally realistic and can be replaced later with quotes from chefs, mentors, or internship supervisors."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="rounded-[2rem] border border-charcoal/10 bg-[#faf7f1] p-6 shadow-card sm:p-8">
                <Quote size={24} className="text-gold" />
                <p className="mt-6 text-base leading-7 text-charcoal/75">“{testimonial.quote}”</p>
                <div className="mt-8 border-t border-charcoal/10 pt-5">
                  <p className="font-display text-2xl text-charcoal">{testimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-charcoal/50">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section-space bg-charcoal text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
                <h2 className="mt-4 font-display text-5xl leading-none text-cream sm:text-6xl">
                  Open to internships and junior kitchen opportunities.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-cream/80">{chefProfile.availability}</p>

            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin size={18} className="text-gold" />
                {chefProfile.location}
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Mail size={18} className="text-gold" />
                adithi@example.com
              </div>
            </div>
            <br />
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cream/60">Social & portfolio links</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.22em] text-cream/80 transition hover:border-gold hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <Lightbox dish={activeDish} onClose={() => setActiveDish(null)} />
    </main>
  );
}
