import { Star } from 'lucide-react'

const MOCK_REVIEWS = [
  {
    id: 1,
    clientName: 'Sarah Jenkins',
    company: 'Nexus Tech',
    role: 'CEO',
    review: 'Tentacles transformed our entire digital infrastructure. Their engineering team understood our scale requirements perfectly and delivered a platform that is lightning fast. Outstanding communication throughout the process.',
    rating: 5,
    date: 'March 2026'
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    company: 'Fortifier',
    role: 'CTO',
    review: 'We were struggling with legacy architecture until we partnered with Tentacles. The transition to a modern stack was seamless. The new enterprise application they built handles our daily transactions with zero latency.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 3,
    clientName: 'Elena Rodriguez',
    company: 'Aerowis Aviation',
    role: 'Operations Director',
    review: 'The DGCA compliant digital log system they engineered is a game changer for our operations. 100% uptime and a beautiful UI that our staff actually enjoys using. Highly recommend their enterprise web solutions.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 4,
    clientName: 'David Kim',
    company: 'tenPOS Systems',
    role: 'Founder',
    review: 'Building an offline-first POS requires deep technical expertise. Tentacles nailed it. Our clients love the sub-100ms billing times. True engineering excellence.',
    rating: 5,
    date: 'December 2025'
  },
  {
    id: 5,
    clientName: 'Jessica Walsh',
    company: 'Global Retail Corp',
    role: 'Head of Digital',
    review: 'The user experience design for our e-commerce platform led to a 40% increase in conversions in the first month. They don\'t just write code; they understand business logic.',
    rating: 5,
    date: 'November 2025'
  },
  {
    id: 6,
    clientName: 'Marcus Thorne',
    company: 'Quantum Finance',
    role: 'VP of Engineering',
    review: 'Security and scale were our top priorities. Tentacles delivered a rock-solid financial dashboard that our institutional investors trust. The code quality is pristine.',
    rating: 5,
    date: 'October 2025'
  }
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/20 selection:text-primary py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-xs mb-6 rounded-full uppercase tracking-widest">
            Client Testimonials
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight mb-6 text-text-main">
            Don't just take our word for it.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            See what founders, CTOs, and operators have to say about partnering with Tentacles.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10 bg-card border border-border-subtle inline-flex p-5 rounded-2xl shadow-sm">
             <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
             </div>
             <div className="hidden sm:block w-px h-8 bg-border-subtle mx-2"></div>
             <div>
                <div className="font-bold text-lg leading-none mb-1 text-text-main">5.0 / 5.0</div>
                <div className="text-xs text-muted-foreground font-mono">Based on {MOCK_REVIEWS.length}+ verified reviews</div>
             </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className="bg-card border border-border-subtle rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/[0.05] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-mono">{review.date}</span>
              </div>
              
              <p className="text-text-main leading-relaxed mb-8 flex-1 relative z-10 text-sm md:text-base">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border-subtle/50 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg uppercase group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                   {review.clientName.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-text-main text-sm">{review.clientName}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 font-medium">{review.role}, <span className="text-text-main/80">{review.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
