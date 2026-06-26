import { ArrowRight, Globe, Smartphone, Layout, Server, Shield, Zap, Users, CheckCircle2, Star, Bot } from 'lucide-react'
import trustedCompanies from '@/data/trusted_by.json'
import testimonials from '@/data/testimonials.json'

export function TrustedBy() {
  // Triple the array to make it scroll seamlessly on all viewport sizes
  const doubledCompanies = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies]

  return (
    <section className="py-16 bg-background relative border-b border-border-subtle overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-text-main mb-10 uppercase tracking-widest flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-border-subtle"></span>
          Trusted by Innovative Companies
          <span className="w-12 h-px bg-border-subtle"></span>
        </p>

        {/* Seamless Infinite Slider (Marquee) */}
        <div className="relative w-full overflow-hidden mask-gradient-horizontal">
          <div className="flex gap-16 items-center w-max animate-marquee py-3">
            {doubledCompanies.map((company, j) => (
              <a
                key={j}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={`${company.name}`}
                    className="object-contain max-w-[110px] max-h-[30px]"
                    style={{
                      marginTop: company.name === "Aerowis Aviation" ? "0" : (company as any).marginTop ? `${(company as any).marginTop}px` : '0'
                    }}
                  />
                ) : (
                  <span className="text-sm font-bold text-text-main tracking-wider uppercase font-mono">
                    {company.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export function Services() {
  const services = [
    { icon: <Globe className="w-6 h-6" />, title: 'Web Engineering', desc: 'Scalable web platforms built with React, Next.js, and modern ecosystems.', path: '/engineering/web' },
    { icon: <Layout className="w-6 h-6" />, title: 'Enterprise Applications', desc: 'Custom internal tools and dashboards that streamline operations.', path: '/engineering/enterprise' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Applications', desc: 'Native and cross-platform mobile apps for iOS and Android.', path: '/engineering/mobile' },
    { icon: <Bot className="w-6 h-6" />, title: 'AI Agent Automation', desc: 'Intelligent autonomous agents that automate complex workflows with precision.', path: '/engineering/ai', isAi: true },
  ]

  return (
    <section className="py-24 bg-background border-b border-border-subtle relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.01),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-main font-heading tracking-tight">Comprehensive Services</h2>
          <p className="text-base text-muted-foreground max-w-xl">
            Engineering digital systems built for performance, reliability, and long-term growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.path}
              className={`group p-6 bg-card border ${s.isAi ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-border-subtle hover:border-primary/30'} transition-all duration-300 rounded-xl relative flex flex-col`}
            >
              <div className={`relative z-10 w-12 h-12 ${s.isAi ? 'bg-blue-500/10 text-blue-600' : 'bg-primary/10 text-primary'} rounded-lg flex items-center justify-center mb-5`}>
                {s.icon}
              </div>
              <h3 className={`relative z-10 text-lg font-bold mb-2 font-heading text-text-main tracking-wide transition-colors ${s.isAi ? 'group-hover:text-blue-600' : 'group-hover:text-primary'}`}>{s.title}</h3>
              <p className="relative z-10 text-muted-foreground mb-6 text-sm leading-relaxed flex-1">{s.desc}</p>

              <div className={`relative z-10 flex items-center ${s.isAi ? 'text-blue-600' : 'text-primary'} text-sm font-semibold mt-auto border-t border-border-subtle/50 pt-4 transition-colors cursor-pointer`}>
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyTentacles() {
  return (
    <section className="py-24 bg-card border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 font-heading text-text-main tracking-tight">
              Engineering <br />Excellence.
            </h2>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              We don't just write code. We build robust, scalable architectures that businesses depend on to operate at scale.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Performance First', desc: 'Lightning fast applications optimized for the best user experience.', icon: <Zap className="w-5 h-5 text-primary" /> },
              { title: 'Built for Scale', desc: 'Architectures that handle millions of users seamlessly.', icon: <Layout className="w-5 h-5 text-primary" /> },
              { title: 'Transparent Collaboration', desc: 'Clear communication, agile processes, and zero surprises.', icon: <Users className="w-5 h-5 text-primary" /> },
              { title: 'Security by Design', desc: 'Enterprise-grade security protocols implemented from day one.', icon: <Shield className="w-5 h-5 text-primary" /> }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-background border border-border-subtle hover:border-primary/30 transition-all duration-300 rounded-xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-main tracking-wide">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export function Testimonials() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading text-text-main tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <a
              href="https://www.google.com/search?sca_esv=b2b623efc307516e&sxsrf=APpeQnvsCLiga0NIjzGyk03TeBN4YZ6NPw:1782493158998&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_w88-G8GYPoY-8fjYGDzAsae6afXzoJaDjvMx2c5WkhcyoMohRk9w7lhDGVSrTlkYaw7RM0dgH8ggkMK1xmNzwVF6v1Q4t9JWrMNMXnj_bH55fDOTg%3D%3D&q=Tentacles+Private+Limited+Reviews&sa=X&ved=2ahUKEwjMxrm8sKWVAxWoxjgGHdqoNTIQ0bkNegQIQRAH&biw=1920&bih=961&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="p-6 content-card flex flex-col relative hover:shadow-md transition-all rounded-xl border border-border-subtle cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">{t.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </div>
                <div className="w-6 h-6 flex-shrink-0">
                  <svg viewBox="0 0 48 48" className="w-full h-full"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-sm text-text-main leading-relaxed flex-1">"{t.quote}"</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ScheduleDialog } from './ScheduleDialog'

export function FinalCTA() {
  return (
    <section className="py-24 bg-card text-text-main relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="content-card bg-background/50 p-8 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
              Get In Touch
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-heading tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Let's talk about how our engineering team can architect and scale your next software product.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-text-main text-white font-semibold text-sm hover:bg-transparent hover:text-text-main border border-text-main transition-all rounded-lg shadow-md cursor-pointer flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <ScheduleDialog>
              <button className="px-8 py-3 bg-transparent border border-border-subtle text-text-main font-semibold text-sm hover:bg-muted transition-all rounded-lg cursor-pointer">
                Schedule Consultation
              </button>
            </ScheduleDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
