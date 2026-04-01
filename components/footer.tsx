import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-colors">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-lg tracking-tight">FastGauge</span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              Premium industrial measurement instruments engineered for precision monitoring and control.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-5 text-base">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products?category=pressure" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Pressure Gauges
                </Link>
              </li>
              <li>
                <Link href="/products?category=temperature" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Temperature Gauges
                </Link>
              </li>
              <li>
                <Link href="/products?category=hardware" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Industrial Hardware
                </Link>
              </li>
              <li>
                <Link href="/products?category=custom" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-5 text-base">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-85 hover:opacity-100 hover:text-white transition-all">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 text-base">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href="mailto:info@fastgauge.com" className="hover:text-white transition-colors">
                  info@fastgauge.com
                </a>
              </div>
              <div className="flex items-start gap-3 opacity-85">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span className="leading-relaxed">123 Industrial Ave, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} FastGauge Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
