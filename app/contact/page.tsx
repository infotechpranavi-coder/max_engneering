import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - FastGauge',
  description: 'Get in touch with FastGauge for product inquiries and support',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Have questions? We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    Phone
                  </h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+12345678900" className="hover:text-primary transition-colors font-semibold">
                      +1 (234) 567-8900
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available Monday - Friday, 9AM - 5PM EST
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@fastgauge.com" className="hover:text-primary transition-colors font-semibold">
                      info@fastgauge.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    123 Industrial Avenue<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to be contacted by FastGauge regarding my inquiry
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              How We Can Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Product Inquiries',
                  description:
                    'Have questions about our gauges? Our experts can help you find the perfect product for your needs.'
                },
                {
                  title: 'Technical Support',
                  description:
                    'Need assistance with installation, calibration, or troubleshooting? Our technical team is here to help.'
                },
                {
                  title: 'Custom Solutions',
                  description:
                    'Looking for a specialized solution? We offer custom gauge design and manufacturing services.'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
            <p className="text-sm text-muted-foreground mt-1">123 Industrial Ave, Tech City, TC 12345</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
