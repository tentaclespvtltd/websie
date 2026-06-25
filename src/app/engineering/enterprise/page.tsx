import Link from 'next/link'
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp, MapPin, Users, MessageSquare, ShoppingBag, Truck, Star } from 'lucide-react'

export default function EnterpriseAppsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-32">
      <div className="max-w-[1200px] mx-auto px-6 pt-32">
        
        {/* Reviews element */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link href="/services" className="text-xs font-bold tracking-[0.15em] uppercase border-b-2 border-black/10 pb-1 hover:opacity-60 transition-opacity inline-block self-start">
            BACK TO EXPERTISE
          </Link>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <Link href="/reviews" className="text-xs font-bold tracking-[0.15em] uppercase border-b-2 border-black/10 pb-1 hover:opacity-60 transition-opacity inline-block self-start">
              READ OUR CLIENT REVIEWS
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-8 max-w-5xl">
            Enterprise Apps.<br />
            <span className="text-black/40">Built for scale.</span>
          </h1>
          <p className="text-2xl text-black/60 font-medium max-w-2xl leading-relaxed">
            Custom internal tools, dashboards, and compliant platforms that streamline your complex operations.
          </p>
        </div>

        {/* Featured Case Study: Aerowis (Layout matched to image) */}
        <div className="mt-32">
          <div className="mb-8">
             <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-black/50">Featured Implementation</h2>
          </div>

          <div className="bg-[#EEF2F6] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            {/* Dashboard Mockup / Header area */}
            <div className="relative mb-24 z-10 flex flex-col lg:block">
               <div className="w-full lg:w-[90%] bg-white rounded-2xl shadow-2xl shadow-black/5 overflow-hidden border border-black/5 relative z-10">
                 {/* macOS style window header */}
                 <div className="bg-[#F8F9FA] px-4 py-3 border-b border-black/5 flex items-center gap-2">
                   <div className="flex gap-1.5 ml-1">
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                   </div>
                   <div className="mx-auto bg-white border border-black/5 rounded-md px-16 py-1 flex items-center justify-center -ml-10">
                      <img src="/aerowis/logo.png" alt="Aerowis" className="h-4 object-contain opacity-70" />
                   </div>
                 </div>
                 {/* App Screenshot */}
                 <div className="bg-[#FAFBFC] relative flex items-center justify-center p-0 overflow-hidden">
                     <img src="/aerowis/aerowi.png" alt="Aerowis Dashboard" className="w-full h-auto object-cover" />
                 </div>
               </div>
               
               {/* Mobile Mockup overlapping */}
               <div className="w-[45%] max-w-[280px] lg:absolute lg:-bottom-12 lg:-right-4 z-20 rounded-[2rem] border-[6px] md:border-8 border-gray-900 overflow-hidden shadow-2xl bg-white mt-8 lg:mt-0 self-end">
                  <img src="/aerowis/mobile.png" alt="Aerowis Mobile App" className="w-full h-auto object-cover" />
               </div>
            </div>

            {/* Content Layout mimicking the image */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
               <div className="lg:col-span-4">
                 <h3 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Key Features Built.</h3>
               </div>
               
               <div className="lg:col-span-8 space-y-12">
                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
                       <BookOpen className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Institution Management Software.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Customized software tailored for Aerowis Aviation Institute to completely digitize their operations. From tracking student progress to managing the core administrative workflow.
                     </p>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
                       <Users className="w-6 h-6" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Students & Staff Portal.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Comprehensive modules to manage students, handle complex student fee structures, and oversee employees, including automated salaries and attendance scheduling.
                     </p>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
                       <ShieldCheck className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Attendance & Schedules.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Real-time attendance tracking integrated with dynamic scheduling for classes and instructors, ensuring 100% operational efficiency and compliance.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Featured Case Study: Al habeeb (WhatsApp Bot) */}
        <div className="mt-24">
          <div className="mb-8">
             <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-black/50">WhatsApp Bot Ordering System</h2>
          </div>

          <div className="bg-[#F4F7F4] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/50 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            {/* Dashboard Mockup / Header area */}
            <div className="relative mb-24 z-10 flex flex-col lg:block">
               <div className="w-full lg:w-[90%] bg-white rounded-2xl shadow-2xl shadow-black/5 overflow-hidden border border-black/5 relative z-10">
                 {/* macOS style window header */}
                 <div className="bg-[#F8F9FA] px-4 py-3 border-b border-black/5 flex items-center gap-2">
                   <div className="flex gap-1.5 ml-1">
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                     <div className="w-3 h-3 rounded-full bg-black/15"></div>
                   </div>
                   <div className="mx-auto bg-white border border-black/5 rounded-md px-16 py-1 flex items-center justify-center -ml-10">
                      <span className="font-bold text-[10px] text-green-800 uppercase tracking-widest opacity-80">Al habeeb</span>
                   </div>
                 </div>
                 {/* App Screenshot */}
                 <div className="bg-[#FAFBFC] relative flex items-center justify-center p-0 overflow-hidden">
                     <img src="/wabot/wabot.png" alt="Al Habeeb Dashboard" className="w-full h-auto object-cover" />
                 </div>
               </div>
               
               {/* Mobile/Chat Mockup overlapping */}
               <div className="w-[45%] max-w-[280px] lg:absolute lg:-bottom-12 lg:-right-4 z-20 rounded-[2rem] border-[6px] md:border-8 border-gray-900 overflow-hidden shadow-2xl bg-white mt-8 lg:mt-0 self-end">
                  <img src="/wabot/chat.png" alt="Al Habeeb WhatsApp Chat" className="w-full h-auto object-cover" />
               </div>
            </div>

            {/* Content Layout mimicking the image */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
               <div className="lg:col-span-4">
                 <h3 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Key Features Built.</h3>
               </div>
               
               <div className="lg:col-span-8 space-y-12">
                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-[#1A4D2E] flex items-center justify-center text-white shadow-lg">
                       <MessageSquare className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">WABA API Bot Integration.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       A fully automated WhatsApp ordering system built on the official WABA API. Customers can effortlessly browse categories, view offers, and place orders directly through automated chat flows.
                     </p>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-[#1A4D2E] flex items-center justify-center text-white shadow-lg">
                       <ShoppingBag className="w-6 h-6" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Comprehensive Store Management.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Powerful backend dashboard to orchestrate your entire digital storefront. Seamlessly manage multiple branches, product catalogs, categories, incoming orders, and targeted discount offers.
                     </p>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-[#1A4D2E] flex items-center justify-center text-white shadow-lg">
                       <Truck className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Logistics & Agent Tracking.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       End-to-end operational control with built-in delivery agent management and customer insights. Monitor dispatch statuses, agent availability, and customer interactions in real time.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Tying it together */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            Complex operations demand robust engineering. 
            <span className="text-white/50 block mt-2"> Let's build the system your business runs on.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10 relative z-10">
            <p className="text-xl font-medium text-white/80">
              End-to-end enterprise architecture.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-white/90 hover:scale-105 transition-all">
              Discuss Requirements <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
