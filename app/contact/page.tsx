import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquareText } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Global Support - MAX ENGINEERING',
  description: 'Connect with the world&apos;s leading experts in industrial measurement.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        {/* Brief Technical Hero */}
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
                   { icon: MapPin, label: 'HQ Address', value: 'New Purulia Road, Mango, Jamshedpur', sub: 'Jharkhand - 831012' },
                   { icon: Clock, label: 'Standard Hours', value: '09:00 - 18:00 IST', sub: 'Mon - Sat Support' }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-[#F8F9FA] border border-border/50 rounded-3xl p-8 hover:bg-primary group transition-all duration-500">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                        <item.icon className="text-primary group-hover:text-secondary-foreground size-5" strokeWidth={2.5} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 block mb-1">{item.label}</span>
                      <p className="text-xl font-black text-primary group-hover:text-white transition-colors tracking-tight mb-1">{item.value}</p>
                      <p className="text-xs text-muted-foreground group-hover:text-white/40 transition-colors">{item.sub}</p>
                   </div>
                 ))}
              </div>

              {/* Contact Form - Ultra Modern */}
              <div className="lg:col-span-8">
                <div className="bg-white border-2 border-[#F8F9FA] rounded-[3rem] p-10 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.03)] focus-within:border-primary/10 transition-colors">
                  <div className="flex items-center gap-4 mb-12">
                     <div className="w-14 h-14 bg-secondary rounded-[1.5rem] flex items-center justify-center">
                        <MessageSquareText className="text-secondary-foreground" />
                     </div>
                     <h2 className="text-3xl font-black text-primary tracking-tighter uppercase italic">Secure <span className="text-secondary">Enquiry</span></h2>
                  </div>
                  
                  <form className="space-y-8">
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
                      className="group w-full bg-primary text-white px-8 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground shadow-2xl transition-all flex items-center justify-center gap-4 hover:scale-[1.02]"
                    >
                      Establish Contact
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                    </button>
                  </form>
                </div>
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
              <div className="h-96 w-full bg-white/5 rounded-[3rem] border border-white/10 relative flex items-center justify-center group overflow-hidden">
                 <MapPin className="w-16 h-16 text-secondary animate-bounce mb-4" strokeWidth={2.5} />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-10 text-white/40 font-black tracking-widest text-[10px] uppercase">Interactive Satellite Relay Map System Active</div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
