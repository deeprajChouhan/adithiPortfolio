export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/70 font-display text-xl font-semibold tracking-[0.18em] text-wine shadow-card backdrop-blur">
        AVS
      </div>
      {!compact && (
        <div>
          <p className="font-display text-xl leading-none text-charcoal">Adithi Varma Sagi</p>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/55">Chef Portfolio</p>
        </div>
      )}
    </div>
  );
}
