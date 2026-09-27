'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'The Bayou', href: '#the-bayou' },
  { label: 'Impact', href: '#impact' },
  { label: 'Spread Awareness', href: '#spread-awareness' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5"
      >
        <a
          href="#top"
          className={`font-display text-lg font-extrabold tracking-tight transition-colors ${
            scrolled || open ? 'text-foreground' : 'text-white'
          }`}
        >
          Project Bayou
        </a>

        <ul
          className={`hidden items-center gap-9 md:flex ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`md:hidden ${scrolled || open ? 'text-foreground' : 'text-white'}`}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-1 px-5 pb-8 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-2xl font-bold text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
