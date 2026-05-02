'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquareText } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

function ContactForm() {
  const searchParams = useSearchParams()
  const defaultSubject = searchParams.get('subject') || ''
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // 1. Prepare WhatsApp Message
    const whatsappNumber = '919835139863'
    const whatsappMessage = `*New Inquiry from Max Engineering Website*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Company:* ${data.company || 'N/A'}%0A` +
      `*Subject:* ${data.subject}%0A` +
      `*Message:* ${data.message}`
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')

    // 2. Submit to Web3Forms (Email)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Placeholder for Access Key
          ...data
        })
      })

      const result = await response.json()
      if (result.success) {
        setIsSuccess(true)
        // Reset form or handle success
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-secondary/20 rounded-[3rem] p-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
           <Send className="text-secondary-foreground size-8" />
        </div>
        <h2 className="text-3xl font-black text-primary tracking-tighter uppercase italic mb-4">Message Sent!</h2>
        <p className="text-muted-foreground font-medium mb-10 max-w-sm mx-auto">
          Our technical team has received your enquiry. We have also opened a WhatsApp chat for immediate coordination.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-secondary-foreground transition-all"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-[#F8F9FA] rounded-[3rem] p-10 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.03)] focus-within:border-primary/10 transition-colors">
      <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 bg-secondary rounded-[1.5rem] flex items-center justify-center">
            <MessageSquareText className="text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-black text-primary tracking-tighter uppercase italic">Secure <span className="text-secondary">Enquiry</span></h2>
      </div>
      
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-primary/40 px-2">
              Identity
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#F8F9FA] px-6 py-5 border-none rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white transition-all font-bold text-primary placeholder:text-primary/20"
              placeholder="FULL NAME"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary/40 px-2">
              Communication
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#F8F9FA] px-6 py-5 border-none rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white transition-all font-bold text-primary placeholder:text-primary/20"
              placeholder="EMAIL ADDRESS"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-primary/40 px-2">
              Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full bg-[#F8F9FA] px-6 py-5 border-none rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white transition-all font-bold text-primary placeholder:text-primary/20"
              placeholder="ENTERPRISE NAME"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-primary/40 px-2">
              Inquiry Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              defaultValue={defaultSubject}
              className="w-full bg-[#F8F9FA] px-6 py-5 border-none rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white transition-all font-bold text-primary placeholder:text-primary/20"
              placeholder="WHAT IS YOUR ENQUIRY ABOUT?"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary/40 px-2">
            Inquiry Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full bg-[#F8F9FA] px-6 py-5 border-none rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white transition-all font-bold text-primary placeholder:text-primary/20 resize-none"
            placeholder="HOW CAN OUR ENGINEERS ASSIST YOU?"
          ></textarea>
        </div>

        <div className="flex items-center gap-4 px-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="w-5 h-5 rounded-lg border-2 border-primary/10 text-secondary focus:ring-offset-0 focus:ring-secondary cursor-pointer"
              />
            </div>
            <label htmlFor="terms" className="text-xs text-muted-foreground font-medium select-none cursor-pointer">
              I agree to the <span className="text-primary font-bold">Privacy Protocol</span> and data processing terms.
            </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-primary text-white px-8 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground shadow-2xl transition-all flex items-center justify-center gap-4 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Establish Contact'}
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
        </button>
      </form>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/industrial_hero_bg_1775038948618.png"
              alt="Industrial Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-none tracking-tighter uppercase italic mb-4">
              <span className="text-secondary opacity-60">Technical</span> Contact
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-12 bg-secondary/30" />
              <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Support Desk</span>
              <div className="h-px w-12 bg-secondary/30" />
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Contact Info Cards */}
              <div className="lg:col-span-4 space-y-6">
                 {[
                   { icon: Phone, label: 'Direct Line', value: '+91 98351 39863', sub: 'Technical Desk Support' },
                   { icon: Mail, label: 'Email Desk', value: 'info@maxengineering.com', sub: 'Response within 2 hours' },
                   { icon: MapPin, label: 'HQ Address', value: 'New Purulia Road, Mango,\nJamshedpur, Jharkhand - 831012', sub: '' },
                   { icon: Clock, label: 'Standard Hours', value: '09:00 AM - 06:00 PM IST', sub: 'Mon - Sat Support' }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-[#F8F9FA] border border-border/50 rounded-3xl p-8 hover:bg-primary group transition-all duration-500">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                        <item.icon className="text-primary group-hover:text-secondary-foreground size-5" strokeWidth={2.5} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 block mb-1">{item.label}</span>
                      <p className="text-xl font-black text-primary group-hover:text-white transition-colors tracking-tight mb-1 whitespace-pre-line leading-tight">{item.value}</p>
                      {item.sub && (
                        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                          item.label === 'Standard Hours' 
                            ? 'text-primary group-hover:text-white mt-2' 
                            : 'text-muted-foreground group-hover:text-white/40'
                        }`}>
                          {item.sub}
                        </p>
                      )}
                   </div>
                 ))}
              </div>

              {/* Contact Form Container */}
              <div className="lg:col-span-8">
                <Suspense fallback={<div className="h-[600px] bg-[#F8F9FA] rounded-[3rem] animate-pulse" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                 <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase italic">Our <span className="text-secondary italic">Office</span></h2>
                 <p className="text-white/40 font-medium text-lg mt-4 uppercase tracking-widest text-[10px]">Headquarters Industrial Complex</p>
              </div>
              <div className="h-96 w-full bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                 <iframe
                   src="https://maps.google.com/maps?q=New%20Purulia%20Road,%20Mango,%20Jamshedpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   width="100%"
                   height="100%"
                   style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-10 left-10 pointer-events-none">
                    <div className="flex items-center gap-3 text-white/40 font-black tracking-widest text-[10px] uppercase">
                       <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                       Satellite Relay Active
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

