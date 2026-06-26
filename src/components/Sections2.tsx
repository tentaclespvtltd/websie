"use client"

import { Plus, Minus, ArrowRight, ArrowUpRight, Database } from 'lucide-react'
import { useState } from 'react'

export function ProcessTimeline() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business goals and technical requirements.' },
    { num: '02', title: 'Strategy', desc: 'Formulating the optimal architecture and technology stack.' },
    { num: '03', title: 'Architecture', desc: 'Designing the database schema, API contracts, and infrastructure.' },
    { num: '04', title: 'Development', desc: 'Agile engineering with rigorous code reviews and quality checks.' },
    { num: '05', title: 'Testing', desc: 'Comprehensive automated and manual QA for flawless execution.' },
    { num: '06', title: 'Deployment', desc: 'Zero-downtime releases to scalable cloud environments.' },
    { num: '07', title: 'Continuous Support', desc: '24/7 monitoring, maintenance, and feature iterations.' }
  ]
  
  return (
    <section className="py-24 bg-card border-b border-border-subtle relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
           <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
              Our Methodology
           </div>
           <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading text-text-main tracking-tight">How We Build</h2>
        </div>
        
        <div className="relative border-l border-border-subtle ml-4 md:ml-0 md:border-none">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="mb-12 relative md:flex md:items-center md:justify-center group"
            >
              {/* Connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle group-hover:bg-primary/50 transition-colors duration-300 -translate-x-1/2"></div>
              
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2'} pl-8 pb-2 relative z-10`}>
                <div className="md:hidden absolute left-[-21px] top-2 w-10 h-10 bg-background border border-border-subtle flex items-center justify-center font-bold text-xs text-primary rounded-full shadow-sm">
                  {step.num}
                </div>
                
                <h3 className="text-xl font-bold mb-2 font-heading text-text-main tracking-wide">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg md:inline-block">{step.desc}</p>
              </div>
              
              {/* Center status step marker */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFFFFF] border border-border-subtle rounded-full items-center justify-center font-bold text-sm text-muted-foreground z-20 group-hover:border-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_4px_12px_rgba(5,150,105,0.2)] transition-all duration-300">
                {step.num}
              </div>
              
              <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} relative z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Industries() {
  const industries = [
    'Education', 'Healthcare', 'Retail', 'Hospitality', 'Manufacturing', 
    'Finance', 'Logistics', 'Startups', 'SMEs', 'Enterprise'
  ]
  
  return (
    <section className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
            Industries We Serve
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading text-text-main tracking-tight">Domain Expertise</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <div 
              key={i}
              className="p-6 content-card flex flex-col items-center justify-center text-center group hover:bg-text-main hover:text-white hover:border-text-main transition-all duration-300 cursor-default"
            >
              <Database className="w-5 h-5 mb-3 text-primary group-hover:text-white transition-colors" />
              <span className="font-bold text-sm tracking-wide group-hover:text-white transition-colors">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ImpactCounters() {
  return (
    <section className="py-16 bg-[#F3F4F6] border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { value: '25+', label: 'Products Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
            { value: '20+', label: 'Enterprise Clients' },
            { value: '99.98%', label: 'System Uptime' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col border-l border-border-subtle pl-6 group">
              <span className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-text-main transition-colors">{stat.value}</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    { q: 'How long does development take?', a: 'Development timelines vary based on complexity. A typical enterprise application takes 3-6 months from discovery to initial deployment, while smaller platforms may take 6-8 weeks.' },
    { q: 'How much does custom software cost?', a: 'We scope projects based on engineering effort. After our initial discovery call, we provide a detailed technical proposal with transparent pricing and milestones.' },
    { q: 'Do you provide maintenance?', a: 'Yes. We offer continuous support, infrastructure monitoring, and SLAs to ensure your platforms remain performant and secure long after launch.' },
    { q: 'Can you redesign existing systems?', a: 'Absolutely. We frequently modernize legacy systems by refactoring codebases, migrating to the cloud, and implementing contemporary UI/UX principles.' },
    { q: 'Do you build mobile applications?', a: 'Yes. We engineer high-performance native (Swift, Kotlin) and cross-platform (React Native, Flutter) mobile applications for both iOS and Android ecosystems.' }
  ]
  
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full">
             Support
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-text-main tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="content-card overflow-hidden max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border-b border-border-subtle last:border-b-0"
              >
                <button 
                  className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-center bg-transparent hover:bg-muted/50 transition-colors group cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-base font-bold text-text-main group-hover:text-primary transition-colors pr-6">
                     {faq.q}
                  </span>
                  {openIndex === i ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-muted-foreground shrink-0" />}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#F9FAFB]/40 ${openIndex === i ? 'max-h-56 border-t border-border-subtle' : 'max-h-0'}`}
                >
                  <p className="p-6 md:px-8 md:py-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
