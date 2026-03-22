'use client';

import { FormEvent, useState } from 'react';

const initialState = { name: '', email: '', message: '' };

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<typeof initialState> = {};

    if (!values.name.trim()) nextErrors.name = 'Please share your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'Please add your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'A short message will help Adithi reply thoughtfully.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
    setValues(initialState);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-white/70" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-2 text-sm text-[#ffd6d6]">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-white/70" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold"
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-2 text-sm text-[#ffd6d6]">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-white/70" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold"
          placeholder="Tell me about the opportunity, internship, or collaboration."
        />
        {errors.message && <p className="mt-2 text-sm text-[#ffd6d6]">{errors.message}</p>}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-[0.22em] text-charcoal transition hover:bg-[#d1b47d]"
        >
          Send message
        </button>
        {submitted && (
          <p className="text-sm text-cream/90">
            Thank you — this demo form confirms the message on the front end and can be wired to an email service later.
          </p>
        )}
      </div>
    </form>
  );
}
