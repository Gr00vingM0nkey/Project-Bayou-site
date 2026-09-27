const stats = [
  { value: '250k+', unit: 'reach', label: 'people reached with our story' },
  { value: '1,400', unit: 'photos', label: 'wildlife moments documented' },
  { value: '90+', unit: 'talks', label: 'community talks and tours given' },
  { value: '38', unit: 'schools', label: 'classrooms learning the bayou' },
]

export function Impact() {
  return (
    <section id="impact" className="bg-bayou-deep py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-leaf">
          Our Impact
        </p>
        <h2 className="max-w-4xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-balance">
          Awareness, growing along the water&rsquo;s edge.
        </h2>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bayou-deep p-8 md:p-10"
            >
              <dd className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-black text-white md:text-6xl">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wide text-leaf">
                  {stat.unit}
                </span>
              </dd>
              <dt className="mt-3 text-white/70">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
