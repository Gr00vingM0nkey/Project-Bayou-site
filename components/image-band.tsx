export function ImageBand() {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden">
      <img
        src="/images/bayou-trail.png"
        alt="A winding trail alongside the bayou surrounded by dense green trees at golden hour"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bayou-deep/80 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <blockquote className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.01em] text-white text-balance">
          &ldquo;When we care for the bayou, the bayou takes care of the
          city.&rdquo;
        </blockquote>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Project Bayou
        </p>
      </div>
    </section>
  )
}
