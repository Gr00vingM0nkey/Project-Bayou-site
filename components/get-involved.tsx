import { ArrowUpRight } from 'lucide-react'
import { ShareButton } from "@/components/share-button"

export function GetInvolved() {
  return (
    <section id="spread-awareness" className="relative overflow-hidden bg-background">
      <div className="relative min-h-[80svh]">
        <img
          src="/images/bayou-restoration.png"
          alt="Native trees planted along the grassy banks of an urban bayou"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-bayou-deep/70" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-[1400px] flex-col justify-center px-5 py-24 md:px-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-leaf">
            Spread Awareness
          </p>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.02em] text-white text-balance">
            Know the bayou. Share its story.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85 md:text-xl">
          Project Bayou is dedicated to protecting and restoring our urban waterways. The bayou is a living part of our city — a corridor for wildlife, water, and community. The more people understand it, the stronger the case for protecting it. Explore what makes the bayou worth saving, and help carry its story to your neighbors, friends, and community.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-8 py-4 font-semibold text-bayou-deep transition-transform hover:-translate-y-0.5"
            >
              
              <ShareButton />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-bayou-deep text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row md:items-end">
          <p className="font-display text-4xl font-black tracking-tight md:text-6xl">
            Project Bayou
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#what-we-do" className="text-white/70 transition-colors hover:text-white">
              What We Do
            </a>
            <a href="#the-bayou" className="text-white/70 transition-colors hover:text-white">
              The Bayou
            </a>
            <a href="#impact" className="text-white/70 transition-colors hover:text-white">
              Impact
            </a>
            <a href="#spread-awareness" className="text-white/70 transition-colors hover:text-white">
              Spread Awareness
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Project Bayou. A community environmental initiative.</p>
          <p>Restoring our urban waterways, one bank at a time.</p>
        </div>
      </div>
    </footer>
  )
}
