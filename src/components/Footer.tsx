import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-card text-muted-foreground py-20 border-t border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/image.png" alt="Tentacles Logo" className="h-8 w-auto object-contain" />
            <span className="text-lg font-bold text-text-main font-heading tracking-normal">Tentacles Pvt. Ltd.</span>
          </div>
          <p className="text-xs font-mono leading-relaxed mb-6 max-w-sm">
            Engineering Tomorrow's Digital Infrastructure. We build robust, enterprise software systems that scale dynamically.
          </p>
          <div className="text-[11px] font-mono text-muted-foreground/80 space-y-1.5">
            <p className="font-semibold text-text-main">HEADQUARTERS:</p>
            <p>Room No. 204-B, TBI-GECW, First Floor,</p>
            <p>Amenity Block, Government Engineering College Wayanad,</p>
            <p>Thalappuzha, Mananthavady, Wayanad,</p>
            <p>Kerala – 670644, India</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-text-main font-mono text-xs uppercase tracking-widest">Directories</h4>
          <ul className="space-y-4 text-xs font-mono">
            <li><Link href="/about" className="hover:text-primary transition-colors">/about</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">/services</Link></li>
            <li><Link href="/case-studies" className="hover:text-primary transition-colors">/case-studies</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">/contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-text-main font-mono text-xs uppercase tracking-widest">Security</h4>
          <ul className="space-y-4 text-xs font-mono">
            <li><Link href="/" className="hover:text-primary transition-colors">privacy.md</Link></li>
            <li><Link href="/" className="hover:text-primary transition-colors">terms.md</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-text-main font-mono text-xs uppercase tracking-widest">Connection</h4>
          <ul className="space-y-4 text-xs font-mono">
            <li className="hover:text-primary transition-colors font-medium text-text-main/80">info@tentaclespvtltd.com</li>
            <li className="hover:text-primary transition-colors">+91 89215 07695</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border-subtle/50 text-center font-mono text-[10px] text-muted-foreground/50">
        © {new Date().getFullYear()} Tentacles Private Limited. SYSTEM_ESTABLISHED_2026.
      </div>
    </footer>
  )
}
