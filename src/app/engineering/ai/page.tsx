import Link from 'next/link'
import { Star, ArrowRight, Cpu, Zap, Activity, MessageSquare, Calendar, Shield, Mic, PhoneCall, Headphones } from 'lucide-react'

export default function AIEngineeringPage() {
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
          AI Agents.<br />
          <span className="text-black/40">Work, automated.</span>
        </h1>

        {/* Featured Case Study */}
        <div className="mt-32 mb-32 border-t-2 border-black/10 pt-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured AI Systems</h2>
            <p className="text-xl text-black/60 font-medium">Autonomous tools driving real business efficiency.</p>
          </div>

          {/* Case Study: Hospital Booking */}
          <div className="bg-white border border-black/10 rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/3 -translate-x-1/4"></div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              {/* Left Side: Chat UI Mockup */}
              <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-start lg:order-2">
                <div className="w-full rounded-[1.5rem] border border-black/10 overflow-hidden shadow-2xl bg-[#F8F9FA] mx-auto lg:mx-0 flex flex-col">
                  {/* Chat Header */}
                  <div className="flex items-center gap-4 px-5 py-4 bg-white border-b border-black/5">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shadow-sm">
                      CB
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">CareBot Assistant</h4>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-500">Online</p>
                    </div>
                  </div>
                  {/* Chat Bubbles */}
                  <div className="p-5 flex flex-col gap-4 text-sm min-h-[300px]">
                    <div className="self-end bg-black text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                      I need to see Dr. Smith for a cardiology follow-up next week.
                    </div>
                    <div className="self-start bg-white border border-black/5 text-black/80 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                      <p className="mb-2">I can help with that. I see 3 available slots for Dr. Smith next week:</p>
                      <ul className="list-disc ml-4 space-y-1 mb-2 font-medium text-black">
                        <li>Tuesday at 10:00 AM</li>
                        <li>Thursday at 2:30 PM</li>
                      </ul>
                      <p>Do either of those work for you?</p>
                    </div>
                    <div className="self-end bg-black text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm hover:scale-[1.02] transition-transform">
                      Tuesday at 10 works perfectly.
                    </div>
                    <div className="self-start bg-emerald-50 border border-emerald-100 text-emerald-900 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm relative overflow-hidden group cursor-default">
                      <div className="absolute inset-0 bg-emerald-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      <span className="relative z-10 font-bold">Booking confirmed.</span>
                      <p className="relative z-10 mt-1 text-emerald-800/80">I've sent a calendar invite and updated your EMR file.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-7 space-y-10 lg:order-1">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-500/10 text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4 rounded-full">Conversational AI</div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Patient Support.</h3>
                  <p className="text-xl text-black/60 font-medium leading-relaxed max-w-lg">
                    Deploy intelligent agents that handle complex customer interactions via text or voice, capable of understanding intent and taking direct action in your booking systems.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                 <div className="flex flex-col gap-3 group">
                   <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                     <MessageSquare className="w-5 h-5" />
                   </div>
                   <h4 className="text-lg font-bold text-black tracking-tight">Natural Language.</h4>
                   <p className="text-black/60 text-sm leading-relaxed">
                     Agents understand context, typos, and complex multi-part requests just like a human operator.
                   </p>
                 </div>

                 <div className="flex flex-col gap-3 group">
                   <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
                     <Calendar className="w-5 h-5" />
                   </div>
                   <h4 className="text-lg font-bold text-black tracking-tight">System Integrations.</h4>
                   <p className="text-black/60 text-sm leading-relaxed">
                     Agents securely write to your database, updating calendars and internal systems (like medical records) instantly.
                   </p>
                 </div>

                 <div className="flex flex-col gap-3 sm:col-span-2 group">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                     <Shield className="w-5 h-5" />
                   </div>
                   <h4 className="text-lg font-bold text-black tracking-tight">Privacy & Compliance.</h4>
                   <p className="text-black/60 text-sm leading-relaxed">
                     Built with strict guardrails to ensure HIPAA compliance, protect patient data, and prevent hallucinations (making up false information).
                   </p>
                 </div>
               </div>
              </div>
            </div>

          </div>

          {/* Third Case Study: Voice Calling AI */}
          <div className="mt-8 bg-white border border-black/10 rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/4"></div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              {/* Left Side: Voice Calling UI Mockup */}
              <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-start">
                <div className="w-[80%] max-w-[300px] lg:w-full rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl bg-[#0A0A0A] mx-auto lg:mx-0 relative flex flex-col h-[550px] group">
                  {/* Status Bar */}
                  <div className="h-7 w-full flex justify-between items-center px-6 text-white/90 text-[10px] font-bold mt-2">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="flex gap-0.5"><div className="w-1 h-2 bg-white rounded-sm"></div><div className="w-1 h-2.5 bg-white rounded-sm"></div><div className="w-1 h-3 bg-white rounded-sm"></div><div className="w-1 h-3.5 bg-white/40 rounded-sm"></div></div>
                      <div className="w-4 h-2.5 rounded-sm border border-white/40 flex items-center p-[1px]"><div className="bg-white h-full w-[80%] rounded-sm"></div></div>
                    </div>
                  </div>

                  {/* Call Screen Content */}
                  <div className="flex-1 flex flex-col items-center pt-6 pb-6 px-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 flex items-center justify-center shadow-inner mb-2 animate-pulse">
                         <Mic className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-white text-lg font-medium">Alex (AI Agent)</h4>
                      <p className="text-white/60 text-xs font-mono">00:45</p>
                    </div>

                    {/* Realtime Transcription UI */}
                    <div className="relative z-10 w-full mb-6 flex flex-col gap-3 text-[11px] font-medium mt-auto">
                      
                      {/* Caller */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-tr-sm p-3 border border-white/5 text-white/90 shadow-lg self-end max-w-[90%] text-right">
                        Hi, I saw the 3-bedroom listing on Oak St online.
                      </div>
                      
                      {/* AI Agent */}
                      <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl rounded-tl-sm p-3 border border-purple-500/20 text-white shadow-lg self-start max-w-[90%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                        <span className="relative z-10">Great choice! That property is still available. Would you like me to schedule a viewing this week?</span>
                      </div>
                      
                      {/* Caller */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-tr-sm p-3 border border-white/5 text-white/90 shadow-lg self-end max-w-[90%] text-right">
                        Yes, Saturday morning works.
                      </div>
                      
                      {/* AI Agent */}
                      <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl rounded-tl-sm p-3 border border-purple-500/20 text-white shadow-lg self-start max-w-[90%] relative">
                        Booked you for Saturday 10 AM with our agent Priya. You'll get a confirmation text shortly.
                      </div>
                    </div>

                    {/* Call Controls */}
                    <div className="relative z-10 flex gap-5 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/5">
                        <Mic className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer hover:scale-105 transition-transform">
                        <PhoneCall className="w-6 h-6 text-white rotate-[135deg]" />
                      </div>
                      <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/5">
                        <span className="text-white font-bold tracking-wider text-xs">key</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 text-purple-700 font-bold text-[10px] uppercase tracking-widest mb-4 rounded-full">Voice Automation</div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Phone Call Agents.</h3>
                  <p className="text-xl text-black/60 font-medium leading-relaxed max-w-lg">
                    Deploy hyper-realistic voice agents capable of conducting human-level phone conversations for inbound support or outbound campaigns.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
                      <Mic className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-black tracking-tight">No Awkward Pauses.</h4>
                    <p className="text-black/60 text-sm leading-relaxed">
                      Conversations flow naturally without delays. The agent speaks with a human-like voice and stops listening if you interrupt it.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-black tracking-tight">Outbound Campaigns.</h4>
                    <p className="text-black/60 text-sm leading-relaxed">
                      <span className="font-bold text-black/80">Example:</span> Agent calls 200 leads from a webinar <span className="text-blue-500 font-bold">→</span> Asks qualifying questions <span className="text-blue-500 font-bold">→</span> Books meetings only for interested leads <span className="text-blue-500 font-bold">→</span> Sends you a daily summary.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:col-span-2 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-orange-100 transition-all">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-black tracking-tight">Inbound Support Triage.</h4>
                    <p className="text-black/60 text-sm leading-relaxed">
                      Never miss a call again. Agents answer 24/7, solve tier-1 issues, and intelligently route complex queries to human staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Explainer Section */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start border-t-2 border-black/10 pt-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">What are AI Agents?</h2>
            <p className="text-xl leading-relaxed text-black/70 font-medium max-w-md">
              Think of an AI Agent as a highly skilled digital employee that never sleeps. It's not just a chatbot—it's a tool that can click buttons, read emails, update spreadsheets, and make decisions based on your business rules.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              
              <div className="flex flex-col h-full bg-black/5 p-6 rounded-2xl border border-black/5">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Front Desk</h3>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Customer Support Triage</h4>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  Instantly categorizing, answering, and routing customer tickets with human-like empathy.
                </p>
                <div className="mt-auto bg-white p-4 rounded-xl shadow-sm text-sm border border-black/5">
                  <span className="font-bold text-black/80">Example:</span> Patient texts 'Do you accept BlueCross?' <span className="text-emerald-500 font-bold">→</span> Agent checks policy DB <span className="text-emerald-500 font-bold">→</span> Replies: 'Yes, we do! Would you like to book?'
                </div>
              </div>
              
              <div className="flex flex-col h-full bg-black/5 p-6 rounded-2xl border border-black/5">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Accountant</h3>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Invoice Processing</h4>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  Reading PDFs, cross-referencing orders, and updating your systems without manual data entry.
                </p>
                <div className="mt-auto bg-white p-4 rounded-xl shadow-sm text-sm border border-black/5">
                  <span className="font-bold text-black/80">Example:</span> Vendor emails an invoice PDF <span className="text-emerald-500 font-bold">→</span> Agent reads it, flags a ₹2,000 mismatch <span className="text-emerald-500 font-bold">→</span> Notifies finance before payment.
                </div>
              </div>

              <div className="flex flex-col h-full bg-black/5 p-6 rounded-2xl border border-black/5">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Researcher</h3>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Market Analysis</h4>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  Scraping competitors, summarizing news, and delivering structured daily reports to your inbox.
                </p>
                <div className="mt-auto bg-white p-4 rounded-xl shadow-sm text-sm border border-black/5">
                  <span className="font-bold text-black/80">Example:</span> Every morning at 8 AM <span className="text-emerald-500 font-bold">→</span> Agent scans 5 competitor sites <span className="text-emerald-500 font-bold">→</span> Sends a 1-page summary to your inbox.
                </div>
              </div>

              <div className="flex flex-col h-full bg-black/5 p-6 rounded-2xl border border-black/5">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Manager</h3>
                <h4 className="text-xl font-bold mb-3 tracking-tight">Workflow Orchestration</h4>
                <p className="text-black/60 leading-relaxed text-sm mb-4">
                  Agents communicating with other tools and agents to solve complex problems autonomously.
                </p>
                <div className="mt-auto bg-white p-4 rounded-xl shadow-sm text-sm border border-black/5">
                  <span className="font-bold text-black/80">Example:</span> New lead fills out a web form <span className="text-emerald-500 font-bold">→</span> Agent qualifies them, creates a CRM record, and texts your sales team <span className="text-emerald-500 font-bold">→</span> Zero manual entry.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tying it together */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-1000"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            Stop doing robot work. <br/> Let the robots do it.
            <span className="text-white/50 block mt-4 text-2xl md:text-3xl font-medium"> Free up your human talent for creative, high-impact strategy.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10 relative z-10">
            <p className="text-xl font-medium text-white/80">
              We engineer custom autonomous pipelines.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-white/90 hover:scale-105 transition-all">
              Automate Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
