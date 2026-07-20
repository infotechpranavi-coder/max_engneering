import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import {
  companyStats,
  teamMembers,
  teamWorkImages,
} from '@/lib/about-content'

function TeamMemberCard({
  member,
}: {
  member: (typeof teamMembers)[number]
}) {
  return (
    <div className="h-full flex flex-col bg-primary rounded-3xl p-7 sm:p-8 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center flex-1">
        <div className="w-24 h-24 rounded-full p-1 bg-secondary mb-5 shrink-0">
          <div className="w-full h-full rounded-full bg-primary/80 border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-secondary font-poppins">{member.initials}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white font-poppins mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-secondary mb-3">{member.role}</p>

        <a
          href={`tel:${member.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-secondary transition-colors mb-5"
        >
          <Phone size={12} />
          {member.phone}
        </a>

        <p className="text-sm text-white/65 leading-relaxed mt-auto">{member.bio}</p>
      </div>
    </div>
  )
}

export function AboutCompanySection() {
  const [featuredImage, ...galleryImages] = teamWorkImages

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-secondary">
            <span className="w-8 h-px bg-secondary/60" />
            Since 2005
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary font-poppins tracking-tight mt-4 max-w-3xl leading-[1.15]">
            Instrumentation solutions built for{' '}
            <span className="text-secondary">industrial excellence</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ScrollReveal direction="right">
              <div className="relative pl-5 sm:pl-6">
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-linear-to-b from-secondary via-secondary/40 to-transparent" />
                <div className="space-y-5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                  <p>
                    Max Engineering is a service provider for process automation — from system design
                    and process instrumentation to supply of equipment and accessories required for
                    complete automation across industrial plants.
                  </p>
                  <p>
                    We deliver calibration, erection, and commissioning for process and control
                    equipment nationwide, trusted by leading steel, power, and mining corporations for
                    precision work at scale.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08}>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {companyStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative bg-primary rounded-2xl p-4 sm:p-5 overflow-hidden border border-white/5 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                  >
                    <div className="absolute -top-3 -right-1 text-[3.5rem] font-black text-white/[0.04] font-poppins leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl font-black text-secondary font-poppins tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-semibold text-white/55 mt-1 leading-snug capitalize">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12}>
              <div className="bg-white rounded-3xl border border-primary/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="p-6 sm:p-8 pb-0 sm:pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="max-w-xl">
                      <h3 className="text-lg sm:text-xl font-bold text-primary font-poppins mb-2">
                        Our team at work
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Skilled engineers, technicians, and supervisors across blast furnaces, sinter
                        plants, power stations, and instrumentation systems — backed by hands-on
                        expertise and zero-accident operations.
                      </p>
                    </div>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-2 shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-secondary transition-colors"
                    >
                      View gallery
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 sm:gap-3 p-4 sm:p-6 pt-0">
                  <div className="col-span-12 sm:col-span-7 relative aspect-[16/10] sm:aspect-auto sm:min-h-[220px] rounded-2xl overflow-hidden bg-[#EEF0F2]">
                    <Image
                      src={featuredImage}
                      alt="Max Engineering team on site"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 420px"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white/90 bg-primary/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      Field operations
                    </span>
                  </div>

                  <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 gap-2 sm:gap-3">
                    {galleryImages.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] sm:aspect-auto sm:min-h-0 sm:flex-1 rounded-2xl overflow-hidden bg-[#EEF0F2]"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                          sizes="200px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal direction="left" delay={0.05} className="hidden lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-2">
                Leadership
              </p>
            </ScrollReveal>
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} direction="left" delay={index * 0.1} className="flex-1">
                <TeamMemberCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
