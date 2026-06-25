import Link from 'next/link'
import { Star, ArrowRight, BookOpen, Users, ShieldCheck, Moon } from 'lucide-react'

export default function MobileEngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-32">
      <div className="max-w-[1200px] mx-auto px-6 pt-32">
        
        {/* Reviews element */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
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
        </div>

        {/* Hero Hook */}
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-32 max-w-5xl">
          Mobile Apps.<br />
          <span className="text-black/40">In their pocket.</span>
        </h1>

        {/* Featured Case Study: Aerowis */}
        <div className="mt-32 mb-32 border-t-2 border-black/10 pt-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured Mobile Enterprise</h2>
            <p className="text-xl text-black/60 font-medium">Complex operations packed into intuitive mobile experiences.</p>
          </div>

          <div className="bg-[#EEF2F6] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              {/* Left Side: Mobile Mockup & Store Links */}
              <div className="lg:col-span-4 flex flex-col gap-8 items-center lg:items-start">
                <div className="w-[80%] max-w-[300px] lg:w-full rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl bg-white mx-auto lg:mx-0">
                  <img src="/aerowis/mobile.png" alt="Aerowis Mobile App" className="w-full h-auto object-cover" />
                </div>

                <div className="flex flex-row gap-3 w-full max-w-[340px] mx-auto lg:mx-0 mt-4">
                  <a 
                    href="https://play.google.com/store/apps/details?id=org.aerowis&hl=en_IN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-black text-white rounded-xl hover:bg-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/10"
                  >
                    <img 
                      src="/playstore.png" 
                      alt="Google Play" 
                      className="w-6 h-6 object-contain shrink-0"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] font-bold tracking-wider text-white/40 uppercase leading-none">GET IT ON</span>
                      <span className="text-[11px] font-black tracking-wide text-white mt-0.5 leading-none">Google Play</span>
                    </div>
                  </a>
                  <a 
                    href="https://apps.apple.com/in/app/aerowis/id6758422976" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-black text-white rounded-xl hover:bg-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/10"
                  >
                    <img 
                      src="/appstore.png" 
                      alt="App Store" 
                      className="w-6 h-6 object-contain shrink-0 rounded-[5px]"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[7px] font-bold tracking-wider text-white/40 uppercase leading-none">Download on the</span>
                      <span className="text-[11px] font-black tracking-wide text-white mt-0.5 leading-none">App Store</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-black/5 text-black font-bold text-[10px] uppercase tracking-widest mb-4 rounded-full">Aerowis Aviation</div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Key Mobile Features.</h3>
                </div>
                
                <div className="space-y-12">
                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
                       <BookOpen className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Institution Management Software.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Customized software tailored for Aerowis Aviation Institute to completely digitize their operations. From tracking student progress to managing the core administrative workflow directly on mobile.
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
                       Comprehensive mobile modules to manage students, handle complex student fee structures, and oversee employees, including automated salaries and attendance scheduling.
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

                 <div className="flex flex-col sm:flex-row gap-6">
                   <div className="shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
                       <Moon className="w-5 h-5" />
                     </div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold mb-3 tracking-tight">Modern Dark Mode UI.</h4>
                     <p className="text-black/70 text-lg leading-relaxed">
                       Built with native App Store and Play Store design guidelines, featuring a beautiful, immersive night mode for comfortable viewing in any environment.
                     </p>
                   </div>
                 </div>

               </div>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Open Source Project: Pzync */}
        <div className="border-t-2 border-black/10 pt-16 mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured Open Source Project</h2>
            <p className="text-xl text-black/60 font-medium">Tools we build and share with the community.</p>
          </div>

          <div className="bg-[#F8F9FA] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border border-black/5">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              {/* Left Side: Mockup & Links */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden border border-black/5">
                  <div className="bg-[#F1F1F1] px-4 py-3 border-b border-black/5 flex items-center gap-2">
                    <div className="flex gap-1.5 ml-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                    </div>
                    <div className="mx-auto bg-white border border-black/5 rounded-md px-12 py-1 flex items-center justify-center -ml-8">
                       <span className="font-bold text-[10px] text-black/60 uppercase tracking-widest">Pzync App</span>
                    </div>
                  </div>
                  <div className="bg-white relative flex items-center justify-center p-0">
                      <img src="/pzync/app.png" alt="Pzync Desktop App" className="w-full h-auto object-cover" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a href="https://adhil72.github.io/pzync/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white border border-black/10 rounded-xl hover:border-black/30 transition-colors group">
                    <span className="text-sm font-bold tracking-wide">Website Preview</span>
                    <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </a>
                  <a href="https://github.com/adhil72/pzync" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-black text-white rounded-xl hover:bg-black/80 transition-colors group">
                    <span className="text-sm font-bold tracking-wide flex items-center gap-2">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      Contribute on GitHub
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-black/5 text-black font-bold text-[10px] uppercase tracking-widest mb-4 rounded-full">Open Source Project</div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Pzync</h3>
                  <p className="text-xl text-black/70 font-medium leading-relaxed">
                    Local file transfers, clipboard sharing, media controls, and volume sync. No cloud. No accounts. Your data stays yours.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-black mt-2"></div></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">Local File Transfer</h4>
                      <p className="text-black/60 leading-relaxed">Peer-to-peer over your LAN — no cloud hops, no size limits, no waiting. Drag, drop, done.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-black mt-2"></div></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">Universal Clipboard</h4>
                      <p className="text-black/60 leading-relaxed">Copy on Android, paste on desktop. Instantly.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-black mt-2"></div></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">Media & Volume Controls</h4>
                      <p className="text-black/60 leading-relaxed">View and control what's playing on your PC, and keep your PC's master volume in sync with your phone — adjust from either device.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1"><div className="w-2 h-2 rounded-full bg-black mt-2"></div></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">Mobile Camera as Webcam</h4>
                      <p className="text-black/60 leading-relaxed">Use your phone's camera as a wireless webcam on desktop — for video calls, streaming, and recording. No extra hardware.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explainer Section */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start border-t-2 border-black/10 pt-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">What is Mobile App Design?</h2>
            <p className="text-xl leading-relaxed text-black/70 font-medium max-w-md">
              If your website is your shop, your app is the assistant your customer carries in their pocket — always open, always ready.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">A Loyal Regular with a Punch Card</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Push Notifications & Re-engagement</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Reminding customers to come back without them having to search for you again.
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">A Receptionist Who Knows You</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Personalized Experience</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Login, saved details, and recommendations based entirely on their past activity.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">A Store Open with the Lights Off</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Offline Access & Instant Load</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  The app works fast and reliably, even without a great internet connection.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">A Single Checkout Counter</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">One-Tap Actions</h4>
                <p className="text-black/70 leading-relaxed text-lg">
                  Checkout, booking, and ordering — all simplified into a few taps instead of navigating a whole website.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Tying it together */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            A good app keeps your business in your customer's pocket every day.
            <span className="text-white/50 block mt-2"> Building habit and loyalty in a way a website alone can't.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10 relative z-10">
            <p className="text-xl font-medium text-white/80">
              We design and build this for you, for iOS, Android, or both.
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
