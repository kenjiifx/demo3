'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary-blue">
            Power<span className="text-primary-orange">Gym</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-orange transition-colors font-medium">
              Home
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-primary-orange transition-colors font-medium">
              Programs
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-orange transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-orange transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-orange transition-colors">
              Home
            </Link>
            <Link href="/programs" className="block py-2 text-gray-700 hover:text-primary-orange transition-colors">
              Programs
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-primary-orange transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-orange transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}