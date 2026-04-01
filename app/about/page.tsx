import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Award, Users, Target, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - FastGauge',
  description: 'Learn about FastGauge and our commitment to precision industrial measurement',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">About FastGauge</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Over 20 years of excellence in industrial measurement solutions
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To provide industrial enterprises with the most reliable, accurate, and innovative measurement instruments that enable precision monitoring and control of critical processes.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that quality measurement is the foundation of industrial excellence, and we're committed to delivering products that exceed expectations in reliability and performance.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To be the global leader in precision industrial measurement, recognized for innovation, quality, and customer success.
                </p>
                <p className="text-lg text-muted-foreground">
                  We envision a future where every industrial facility has access to world-class measurement technology, enabling greater efficiency, safety, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'Uncompromising commitment to quality in every product and service'
                },
                {
                  icon: Target,
                  title: 'Precision',
                  description: 'Accuracy and reliability in measurement and customer support'
                },
                {
                  icon: Users,
                  title: 'Partnership',
                  description: 'Building lasting relationships with our customers and suppliers'
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'Continuous improvement and adoption of new technologies'
                }
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="bg-white rounded-lg p-8 border border-border">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our History</h2>
            <div className="space-y-8">
              {[
                {
                  year: '2004',
                  title: 'Founded',
                  description:
                    'FastGauge Industries was established with a mission to revolutionize industrial measurement through precision and innovation.'
                },
                {
                  year: '2008',
                  title: 'First ISO Certification',
                  description:
                    'Achieved ISO 9001:2008 certification, demonstrating our commitment to quality management standards.'
                },
                {
                  year: '2012',
                  title: 'Global Expansion',
                  description:
                    'Expanded operations to Europe and Asia, establishing ourselves as a truly global measurement solutions provider.'
                },
                {
                  year: '2018',
                  title: 'Digital Innovation',
                  description:
                    'Launched our IoT-enabled smart monitoring system, connecting gauges to the cloud for real-time data analysis.'
                },
                {
                  year: '2024',
                  title: 'Present Day',
                  description:
                    'Serving over 10,000 industrial customers worldwide with an extensive product portfolio and 24/7 technical support.'
                }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                    {idx < 4 && <div className="w-1 h-20 bg-border my-2"></div>}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground max-w-2xl">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
              Our diverse team of engineers, technicians, and customer success specialists brings decades of combined experience in industrial measurement and automation. We&apos;re passionate about helping our customers succeed.
            </p>
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-foreground font-semibold">Dedicated Professionals</p>
              <p className="text-muted-foreground mt-2">
                Working across manufacturing, engineering, sales, and support
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the FastGauge difference. Contact our team to discuss how we can meet your industrial measurement needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
