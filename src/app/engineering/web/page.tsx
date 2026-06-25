import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export default function WebEngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-32">
      <div className="max-w-[1200px] mx-auto px-6 pt-32">
        {/* Reviews element */}
        <div className="mb-24">
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <Link href="/reviews" className="text-xs font-bold tracking-[0.15em] uppercase border-b-2 border-black/10 pb-1 hover:opacity-60 transition-opacity inline-block">
            READ OUR CLIENT REVIEWS
          </Link>
        </div>

        {/* Hero Hook */}
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-32 max-w-5xl">
          Your website is your shop.<br />
          <span className="text-black/40">We build, brand, and staff it.</span>
        </h1>

        {/* Featured Work Previews */}
        <div className="border-t-2 border-black/10 pt-16 mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Recent Deployments</h2>
            <p className="text-xl text-black/60 font-medium">Digital shops we've built and launched.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: 'Fortifier', url: 'https://fortifier.com.au/', type: 'Corporate Web Platform' },
              { name: 'Ronzev', url: 'https://ronzev.in/', type: 'E-Commerce / Brand Site' },
              { name: 'GECW College Union', url: 'http://collegeunion.gecwyd.ac.in/', type: 'Institutional Portal' }
            ].map((site, i) => (
              <div key={i} className="flex flex-col group">
                {/* Browser Mockup */}
                <div className="bg-[#F1F1F1] rounded-t-2xl p-3 flex items-center gap-2 border border-black/10 border-b-0">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                  </div>
                  <div className="ml-3 bg-white text-[10px] text-black/40 px-3 py-1 rounded-md font-mono truncate w-full border border-black/5 flex items-center">
                    <span className="text-black/20 mr-1">https://</span>{site.url.replace(/^https?:\/\//, '')}
                  </div>
                </div>
                
                {/* Iframe Container with 4:3 Aspect Ratio */}
                <div className="w-full pt-[75%] bg-black/5 border border-black/10 rounded-b-2xl overflow-hidden relative group-hover:border-black/30 transition-colors shadow-sm group-hover:shadow-xl group-hover:shadow-black/5 duration-500">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-[2px]">
                    <div className="opacity-0 group-hover:opacity-100 bg-black text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                      Visit Site <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                  
                  {/* Scaled iframe: 4x size scaled down to 25% */}
                  <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none bg-white">
                    <iframe 
                      src={site.url} 
                      title={site.name}
                      className="w-full h-full border-none"
                      loading="lazy"
                      scrolling="no"
                      tabIndex={-1}
                    />
                  </div>
                </div>

                <div className="mt-6 px-2">
                  <h3 className="text-xl font-bold mb-1 tracking-tight group-hover:text-black/80 transition-colors">{site.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40">{site.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explainer Section */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start border-t-2 border-black/10 pt-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">What is Web Design?</h2>
            <p className="text-xl leading-relaxed text-black/70 font-medium max-w-md">
              A physical store needs a great location, clear aisles, and helpful staff. Your website is no different. We translate these real-world essentials into high-converting digital systems.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Branding & Signage</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Visual Identity</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  The logo, colors, and typography that make people instantly recognize and trust your business.
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Store Layout & Aisles</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Site Structure & Navigation</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Can visitors find what they need in seconds, or do they get lost? Clean architecture ensures smooth browsing.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Helpful Staff Greeting</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">UX & Calls-to-Action</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Does the site naturally guide visitors toward booking or buying, or leave them confused?
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">Accessible Entrances</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Responsive Design</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Whether they walk in from a desktop, tablet, or phone, the experience must be flawless.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Tying it together */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            Good web design = more trust, more time on site, and more conversions. 
            <span className="text-white/50 block mt-2"> Just like a well-designed physical store sells more.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10 relative z-10">
            <p className="text-xl font-medium text-white/80">
              We design and build this for you, end to end.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-white/90 hover:scale-105 transition-all">
              Init Project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
