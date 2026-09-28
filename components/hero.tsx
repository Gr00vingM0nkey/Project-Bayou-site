import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* skyline photo background */}
      <img
        src="/images/project-bayou-hero.jpg"
        alt="Skyline rising above the tree-lined bayou"
        className="pointer-events-none absolute inset-0 z-0 size-full select-none object-cover"
      />

      {/* aligned brand lockup */}
      <div className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center gap-3 px-5 pt-28 md:px-10 md:pt-32">
        <img
          src="/images/bayou-emblem-transparent.png"
          alt="Project Bayou emblem"
          className="h-14 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] md:h-16"
        />
        <img
          src="/images/bayou-wordmark-transparent.png"
          alt="Project Bayou"
          className="h-9 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] md:h-11"
        />
      </div>

      {/* intro copy */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[50%] z-10 flex justify-start">
        <h1 className="whitespace-nowrap font-anton uppercase leading-[8] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] text-[3.5vw] pl-150">
          We Are
        </h1>
      </div>

      {/* giant one-line title sitting behind the treeline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[45%] z-10 flex justify-center ">
        <h1 className="whitespace-nowrap font-anton uppercase leading-[0.85] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] text-[15.5vw]">
          Project Bayou
        </h1>
      </div>

      {/* treeline foreground hides the bottoms of the letters */}
      <img
        src="/images/bayou-foreground.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full select-none object-cover"
      />

      <div className="relative z-50 mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-5 pt-110 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90 drop-shadow-md md:text-base">
          What we do
        </p>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-black/60 blur-xl " />
          <div className="relative p-6 ">
            <p className="max-w-md text-pretty text-lg leading-relaxed text-white drop-shadow-md md:text-xl">
              A community-led effort to restore, protect, and reconnect our city
              with the living waterways that flow through its heart.
            </p>
          </div>
        </div>
        <a
          href="#what-we-do"
          className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/90 drop-shadow-md transition-colors hover:text-white"
        >
          <span className="grid size-11 place-items-center rounded-full border border-white/60">
            <ArrowDown className="size-5" />
          </span>
          Explore
        </a>
      </div>
    </section>
  )
}
