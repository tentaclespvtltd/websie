import { ArrowRight, Globe, Smartphone, Layout, Server, Shield, Zap, Users, CheckCircle2, Star, Bot } from 'lucide-react'
import trustedCompanies from '@/data/trusted_by.json'

export function TrustedBy() {
  return (
    <section className="py-10 border-b border-border-subtle bg-card overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 mb-5 flex items-center justify-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
      </div>
      <div className="flex w-[200%] animate-[slide_30s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex-1 flex justify-around items-center opacity-60">
            {trustedCompanies.map((company, j) => (
              <span key={j} className="text-lg font-bold text-text-main flex items-center gap-2 transition-all duration-200">
                {company.logo ? (
                  <img src={company.logo} alt={`${company.name} Logo`} className="h-7 w-auto object-contain brightness-0 hover:brightness-100 opacity-70 hover:opacity-100 transition-all duration-300" />
                ) : (
                  <span className="hover:text-primary opacity-60 hover:opacity-100 transition-all">{company.name}</span>
                )}
              </span>
            ))}
          </div>
        ))}
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
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
            Our Expertise
          </div>
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
              className={`group p-8 bg-card border ${s.isAi ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-border-subtle/80 hover:border-primary/40'} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.02] rounded-3xl relative overflow-hidden flex flex-col block`}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${s.isAi ? 'bg-blue-500/10' : 'bg-primary/5'} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

              {/* AI Visual Things */}
              {s.isAi && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_60%)] transition-opacity duration-500 group-hover:opacity-100 opacity-40"></div>
                  <div className="absolute top-12 right-12 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-24 right-28 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-300 opacity-40"></div>
                  <div className="absolute top-20 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
                  <svg className="absolute top-0 right-0 w-48 h-48 opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2" viewBox="0 0 100 100">
                    <line x1="70" y1="25" x2="50" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                    <line x1="70" y1="25" x2="85" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
                    <line x1="50" y1="45" x2="85" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500" />
                    <circle cx="70" cy="25" r="2" className="fill-blue-500/50" />
                    <circle cx="50" cy="45" r="1.5" className="fill-indigo-500/50" />
                    <circle cx="85" cy="55" r="2" className="fill-purple-500/50" />
                  </svg>
                </div>
              )}

              <div className={`relative z-10 w-12 h-12 ${s.isAi ? 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20' : 'bg-primary/10 text-primary group-hover:bg-primary/20'} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                {s.icon}
              </div>
              <h3 className={`relative z-10 text-xl font-bold mb-3 font-heading text-text-main tracking-wide transition-colors ${s.isAi ? 'group-hover:text-blue-600' : 'group-hover:text-primary'}`}>{s.title}</h3>
              <p className="relative z-10 text-muted-foreground mb-8 text-sm leading-relaxed flex-1">{s.desc}</p>
              
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
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
              Why Partner With Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 font-heading text-text-main tracking-tight">
              Engineering <br/>Excellence.
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
  const testimonials = [
    {
      quote: "Tentacles transformed our internal operations with an incredibly fast, reliable platform. Their engineering quality and communication exceeded expectations.",
      name: "Sarah Jenkins",
      role: "CTO",
      company: "Acme Corp",
    },
    {
      quote: "We needed a scalable POS system capable of handling 10k+ daily transactions offline. They delivered a solution that hasn't dropped a single transaction.",
      name: "David Chen",
      role: "Director of Retail",
      company: "tenRetail",
    },
    {
      quote: "The migration to our new infrastructure was seamless. We instantly saw a 60% faster loading time which directly led to a 3.2x increase in our lead generation.",
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "Fintech Growth",
    }
  ]
  return (
    <section className="py-24 bg-background border-b border-border-subtle relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading text-text-main tracking-tight">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="p-8 content-card flex flex-col relative hover:border-primary/20 transition-all"
            >
              <div className="text-primary mb-6 flex gap-1">
                 {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary" />
                 ))}
              </div>
              <p className="text-sm text-text-main mb-8 leading-relaxed flex-1">"{t.quote}"</p>
              
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                   {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
              <button className="px-8 py-3 bg-transparent border border-border-subtle text-text-main font-semibold text-sm hover:bg-muted transition-all rounded-lg cursor-pointer">
                 Schedule Consultation
              </button>
           </div>
        </div>
      </div>
    </section>
  )
}
