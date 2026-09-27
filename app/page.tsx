import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { WhatWeDo } from '@/components/what-we-do'
import { FeatureSection } from '@/components/feature-section'
import { ImageBand } from '@/components/image-band'
import { Impact } from '@/components/impact'
import { GetInvolved, SiteFooter } from '@/components/get-involved'

export default function Page() {
  return (
    <main className="font-sans">
      <SiteNav />
      <Hero />
      <WhatWeDo />

      <FeatureSection
        id="the-bayou"
        eyebrow="The Bayou"
        title="A wild corridor through the city."
        body={[
          'Winding for miles beneath our skyline, the bayou is a rare ribbon of wilderness in an urban landscape — home to herons, turtles, cypress and cottonwood.',
          'For decades it was treated as infrastructure. Project Bayou reimagines it as a living ecosystem and a shared public space worth protecting.',
        ]}
        image="/images/bayou-wildlife.png"
        alt="A great egret standing among native wetland plants at the edge of the bayou"
      />

      <ImageBand />

      <Impact />
      <GetInvolved />
      <SiteFooter />
    </main>
  )
}
