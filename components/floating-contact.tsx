'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingContact() {
  const whatsappNumber = '919835139863'
  const phoneNumber = '+919835139863'

  return (
    <div className="fixed right-6 bottom-8 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} fill="white" className="text-white" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.1 }}
        className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Call Us"
      >
        <Phone size={20} fill="currentColor" strokeWidth={0} className="text-primary" />
      </motion.a>
    </div>
  )
}
