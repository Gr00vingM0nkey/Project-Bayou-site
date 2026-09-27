const pillars = [
  {
    no: '01',
    title: 'Educate',
    body: 'We tell the story of the bayou, its ecology, its history, and why this overlooked corridor matters to everyone who lives beside it.',
  },
  {
    no: '02',
    title: 'Document',
    body: 'We track the plants, wildlife, and shifting seasons of the watershed, revealing a living ecosystem hiding in plain sight.',
  },
  {
    no: '03',
    title: 'Inspire',
    body: 'We help neighbors notice, value, and advocate for the bayou, turning quiet awareness into active stewardship.',
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-bayou">
              Our Mission
            </p>
            <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.02em] text-foreground">
              What We Do
            </h2>
          </div>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:col-span-4">
            The bayou is more than a drainage channel — it is a wild green
            corridor running through the middle of the city. We work to help
            people see it, understand it, and care about it.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-24 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.no}
              className="flex flex-col gap-4 bg-background p-8 md:p-10"
            >
              <span className="font-display text-5xl font-extrabold text-leaf">
                {pillar.no}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
