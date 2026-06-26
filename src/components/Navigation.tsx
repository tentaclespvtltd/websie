"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Terminal } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-4 bg-background/90 backdrop-blur-md border-b border-border-subtle shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wider text-text-main flex items-center gap-2 hover:opacity-90">
          <img src="/image.png" alt="Tentacles Logo" className="h-8 w-auto object-contain" />
          <span className="font-heading font-semibold text-base tracking-normal text-text-main">Tentacles Pvt. Ltd.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "text-[11px] font-mono uppercase tracking-widest transition-colors",
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground hover:text-text-main'
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold text-white bg-text-main border border-text-main rounded hover:bg-transparent hover:text-text-main transition-all uppercase tracking-wider"
          >
            <Terminal className="mr-1.5 w-3.5 h-3.5" />
            Init Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAFAFB] border-b border-border-subtle p-6 shadow-md flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-text-main"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-4 text-xs font-mono font-bold text-white bg-text-main rounded border border-text-main"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Terminal className="mr-2 w-4 h-4" />
            Init Project
          </Link>
        </div>
      )}
    </header>
  )
}
