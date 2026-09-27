type FeatureSectionProps = {
  id?: string
  eyebrow: string
  title: string
  body: string[]
  image: string
  alt: string
  reverse?: boolean
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  body,
  image,
  alt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section id={id} className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div className={reverse ? 'md:order-2' : ''}>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={image || '/placeholder.svg'}
              alt={alt}
              className="aspect-[4/5] size-full object-cover md:aspect-[5/6]"
            />
          </div>
        </div>
        <div className={reverse ? 'md:order-1' : ''}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-bayou">
            {eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-black leading-[0.95] tracking-[-0.02em] text-foreground">
            {title}
          </h2>
          <div className="mt-6 space-y-4">
            {body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
