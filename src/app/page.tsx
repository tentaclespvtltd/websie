import { MoreHorizontal, ArrowUp } from 'lucide-react'
import { TrustedBy, Services, WhyTentacles, Testimonials, FinalCTA } from '@/components/Sections'
import { ProcessTimeline, FAQ } from '@/components/Sections2'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <HeroSection />
      <TrustedBy />
      <Services />
      <WhyTentacles />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background overflow-hidden border-b border-border-subtle">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/2"></div>

      {/* Very subtle jagged background pattern similar to the image */}
      <div className="absolute inset-0 opacity-[0.03] -z-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 L50 0 L100 100 Z' fill='%23059669'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px'
      }}></div>

      <div className="w-full relative z-10 flex flex-col items-center">

        {/* Top Text Content */}
        <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 font-heading text-text-main">
            Built From Scratch. <br className="hidden md:block" /> Built For You.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
            We design and engineer custom software — no templates, no rigid platforms — tailored to how your business actually operates and built to scale as you grow.
          </p>

          <button className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 transition-all rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
            Let's Talk About Your Goals
          </button>
        </div>
      </div>
    </section>
  )
}
