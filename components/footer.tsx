import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-lg">FastGauge</span>
            </div>
            <p className="text-sm opacity-90">
              Premium industrial measurement instruments for precision monitoring and control.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=pressure" className="hover:opacity-80 transition-opacity">
                  Pressure Gauges
                </Link>
              </li>
              <li>
                <Link href="/products?category=temperature" className="hover:opacity-80 transition-opacity">
                  Temperature Gauges
                </Link>
              </li>
              <li>
                <Link href="/products?category=hardware" className="hover:opacity-80 transition-opacity">
                  Industrial Hardware
                </Link>
              </li>
              <li>
                <Link href="/products?category=custom" className="hover:opacity-80 transition-opacity">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:opacity-80 transition-opacity">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@fastgauge.com" className="hover:opacity-80 transition-opacity">
                  info@fastgauge.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Industrial Ave, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} FastGauge Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
