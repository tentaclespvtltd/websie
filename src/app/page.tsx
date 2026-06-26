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
          
          {/* Avatar Group */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-background shadow-sm" src="https://i.pravatar.cc/100?img=11" alt="Avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-background shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="Avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-background shadow-sm" src="https://i.pravatar.cc/100?img=47" alt="Avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-background shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="Avatar" />
            </div>
            <div className="text-xs text-muted-foreground font-semibold text-left leading-tight">
              Trusted by 7-8+ <br /> Figure Founders
            </div>
          </div>
          
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

        {/* Image Grid Section */}
        <div className="max-w-[1200px] w-full mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            
            {/* Left Image Card */}
            <div className="md:col-span-5 relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team member" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating UI Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl border border-black/5">
                <div className="flex justify-between items-center mb-3">
                   <span className="text-xs font-bold text-text-main">Finance Balance</span>
                   <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-3xl font-bold font-heading text-text-main mb-6">$5,569,897</div>
                
                {/* Mock Chart/Progress */}
                <div className="w-full h-4 rounded-full bg-muted flex overflow-hidden mb-3">
                   <div className="h-full bg-blue-500 w-[60%]"></div>
                   <div className="h-full bg-orange-300 w-[20%]"></div>
                   <div className="h-full bg-transparent w-[20%]"></div>
                </div>
                
                <div className="flex items-center gap-4 text-[10px] font-semibold text-muted-foreground">
                   <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Profit</div>
                   <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-300"></div> Total Earning</div>
                   <div className="ml-auto text-text-main">Total Target</div>
                </div>
              </div>
            </div>
            
            {/* Right Image Card */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating UI Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-white rounded-2xl p-5 shadow-xl border border-black/5">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-text-main">Total Customers</span>
                    <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"><MoreHorizontal className="w-4 h-4 text-text-main" /></div>
                    </div>
                 </div>
                 
                 <div className="flex justify-between items-end">
                    <div className="text-4xl font-bold font-heading text-text-main">829</div>
                    <div className="bg-blue-100 text-blue-600 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center shadow-sm">
                       <ArrowUp className="w-3 h-3 mr-1" /> 15%
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
