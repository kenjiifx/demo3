import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Power<span className="text-primary-orange">Gym</span>
            </h3>
            <p className="text-gray-400">
              Your journey to fitness starts here. We're committed to helping you achieve your health and wellness goals.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary-orange transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-orange transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Fitness Street, City, State 12345</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@powergym.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PowerGym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}