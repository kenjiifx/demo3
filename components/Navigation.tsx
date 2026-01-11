'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent">
              Power<span className="text-primary-orange">Gym</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-6 py-2 font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-primary-orange'
                    : 'text-gray-700 hover:text-primary-orange'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-primary text-sm py-2 px-6"
            >
              <span>Free Trial</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2.5' : ''
              }`} />
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2.5' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-semibold transition-all ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-primary-orange to-primary-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}