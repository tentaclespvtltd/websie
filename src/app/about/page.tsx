import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import teamData from '@/data/team.json'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-32">
      <div className="max-w-[1200px] mx-auto px-6 pt-32">
        
        {/* Intro */}
        <div className="mb-24">
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <p className="text-xs font-bold tracking-[0.15em] uppercase border-b-2 border-black/10 pb-1 inline-block">
            ABOUT TENTACLES PVT. LTD.
          </p>
        </div>

        {/* Hero Hook */}
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-32 max-w-5xl">
          Engineering the future.<br />
          <span className="text-black/40">Not just building it.</span>
        </h1>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start border-t-2 border-black/10 pt-16 mb-32">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Philosophy</h2>
            <p className="text-xl leading-relaxed text-black/70 font-medium max-w-md">
              We treat every line of code as a critical piece of infrastructure. Great software isn't just written; it's meticulously engineered for performance, scalability, and impact.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Core Value</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Client-Centric</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  We partner deeply with our clients, treating their business challenges as our own to craft bespoke solutions that drive real results.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Core Value</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Radical Excellence</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  We don't settle for "good enough". We write clean, maintainable, and highly optimized code, ensuring long-term reliability.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Core Value</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Absolute Speed</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Performance is a feature. We engineer systems that are incredibly fast and efficient from the ground up.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Core Value</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Transparent Integrity</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Honest communication, transparent processes, and taking ownership of our work every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="border-t-2 border-black/10 pt-16 mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Leadership</h2>
            <p className="text-xl text-black/60 font-medium">The minds driving our operations forward.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
            {teamData.map((member, i) => (
              <div key={i} className="flex flex-col group">
                <div className="w-full pt-[120%] bg-black/5 border border-black/10 overflow-hidden relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">{member.role}</p>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{member.name}</h3>
                  <p className="text-black/70 leading-relaxed text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tying it together CTA */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            Great teams build great products. 
            <span className="text-white/50 block mt-2">Let's build something exceptional together.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10 relative z-10">
            <p className="text-xl font-medium text-white/80">
              Partner with our leadership team today.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-white/90 hover:scale-105 transition-all">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
