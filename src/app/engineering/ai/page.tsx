import Link from 'next/link'
import { Star, ArrowRight, Cpu, Zap, Activity, MessageSquare, Calendar, Shield, Mic, PhoneCall, Headphones } from 'lucide-react'

export default function AIEngineeringPage() {
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
          AI Agents.<br />
          <span className="text-black/40">Work, automated.</span>
        </h1>

        {/* Featured Case Study */}
        <div className="mt-32 mb-32 border-t-2 border-black/10 pt-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured AI Systems</h2>
            <p className="text-xl text-black/60 font-medium">Autonomous tools driving real business efficiency.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study: Hospital Booking */}
            <div className="flex flex-col group">
              {/* Browser Mockup Header */}
              <div className="bg-[#F1F1F1] rounded-t-2xl p-3 flex items-center gap-2 border border-black/10 border-b-0">
                <div className="flex gap-1.5 ml-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                </div>
                <div className="ml-3 bg-white text-[10px] text-black/40 px-3 py-1 rounded-md font-mono truncate w-full border border-black/5 flex items-center">
                  <span className="text-black/20 mr-1">App:</span> CareBot Assistant
                </div>
              </div>
              
              <div className="w-full pt-[75%] bg-black/5 border border-black/10 rounded-b-2xl overflow-hidden relative group-hover:border-black/30 transition-colors shadow-sm group-hover:shadow-xl group-hover:shadow-black/5 duration-500">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Chat UI Mockup */}
                  <div className="w-full max-w-sm rounded-[1.5rem] border border-black/10 overflow-hidden shadow-2xl bg-[#F8F9FA] flex flex-col h-full max-h-[400px]">
                    {/* Chat Header */}
                    <div className="flex items-center gap-4 px-5 py-3 bg-white border-b border-black/5 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shadow-sm text-xs">
                        CB
                      </div>
                      <div>
                        <h4 className="font-bold text-sm tracking-tight">CareBot Assistant</h4>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-500">Online</p>
                      </div>
                    </div>
                    {/* Chat Bubbles */}
                    <div className="p-4 flex flex-col gap-3 text-xs overflow-hidden h-full">
                      <div className="self-end bg-black text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        I need to see Dr. Smith for a cardiology follow-up next week.
                      </div>
                      <div className="self-start bg-white border border-black/5 text-black/80 px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="mb-1">I can help with that. I see 3 available slots:</p>
                        <ul className="list-disc ml-4 space-y-0.5 mb-1 font-medium text-black">
                          <li>Tue 10:00 AM</li>
                          <li>Thu 2:30 PM</li>
                        </ul>
                      </div>
                      <div className="self-end bg-black text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        Tuesday at 10 works perfectly.
                      </div>
                      <div className="self-start bg-emerald-50 border border-emerald-100 text-emerald-900 px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/10"></div>
                        <span className="relative z-10 font-bold block mb-1">Booking confirmed.</span>
                        <p className="relative z-10 text-[10px] text-emerald-800/80">I've sent a calendar invite and updated your EMR file.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 px-2">
                <h3 className="text-xl font-bold mb-1 tracking-tight group-hover:text-black/80 transition-colors">Patient Support Triage</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40">Conversational AI</p>
              </div>
            </div>

            {/* Case Study: Voice Calling AI */}
            <div className="flex flex-col group">
              {/* Phone Mockup Header */}
              <div className="bg-[#0A0A0A] rounded-t-2xl p-3 flex items-center justify-center gap-2 border border-black/10 border-b-0">
                <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
              </div>
              
              <div className="w-full pt-[75%] bg-[#0A0A0A] border border-black/10 rounded-b-2xl overflow-hidden relative group-hover:border-black/30 transition-colors shadow-sm group-hover:shadow-xl group-hover:shadow-black/5 duration-500">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  
                  {/* Voice Calling UI Mockup */}
                  <div className="w-full max-w-sm rounded-[2rem] border-[4px] border-gray-900 overflow-hidden shadow-2xl bg-black flex flex-col h-full max-h-[400px] relative">
                    {/* Status Bar */}
                    <div className="h-6 w-full flex justify-between items-center px-5 text-white/90 text-[9px] font-bold mt-1 shrink-0">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="flex gap-0.5"><div className="w-0.5 h-1.5 bg-white rounded-sm"></div><div className="w-0.5 h-2 bg-white rounded-sm"></div><div className="w-0.5 h-2.5 bg-white rounded-sm"></div></div>
                        <div className="w-3 h-2 rounded-sm border border-white/40 flex items-center p-[1px]"><div className="bg-white h-full w-[80%] rounded-sm"></div></div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center pt-4 pb-4 px-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-transparent to-black pointer-events-none"></div>
                      
                      <div className="relative z-10 flex flex-col items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 flex items-center justify-center shadow-inner mb-1">
                           <Mic className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-white text-sm font-medium">Alex (AI Agent)</h4>
                        <p className="text-white/60 text-[10px] font-mono">00:45</p>
                      </div>

                      {/* Realtime Transcription UI */}
                      <div className="relative z-10 w-full mb-4 flex flex-col gap-2 text-[10px] font-medium mt-auto">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl rounded-tr-sm p-2 border border-white/5 text-white/90 shadow-lg self-end max-w-[90%] text-right">
                          Hi, I saw the 3-bedroom listing on Oak St online.
                        </div>
                        
                        <div className="bg-purple-500/20 backdrop-blur-md rounded-xl rounded-tl-sm p-2 border border-purple-500/20 text-white shadow-lg self-start max-w-[90%]">
                          Great choice! That property is still available. Would you like me to schedule a viewing this week?
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md rounded-xl rounded-tr-sm p-2 border border-white/5 text-white/90 shadow-lg self-end max-w-[90%] text-right">
                          Yes, Saturday morning works.
                        </div>
                        
                        <div className="bg-purple-500/20 backdrop-blur-md rounded-xl rounded-tl-sm p-2 border border-purple-500/20 text-white shadow-lg self-start max-w-[90%]">
                          Booked you for Saturday 10 AM with Priya.
                        </div>
                      </div>

                      {/* Call Controls */}
                      <div className="relative z-10 flex gap-3 mt-auto shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/5">
                          <Mic className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
                          <PhoneCall className="w-4 h-4 text-white rotate-[135deg]" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/5">
                          <span className="text-white font-bold tracking-wider text-[9px]">key</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-6 px-2">
                <h3 className="text-xl font-bold mb-1 tracking-tight group-hover:text-black/80 transition-colors">Phone Call Agents</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40">Voice Automation</p>
              </div>
            </div>
          </div>
        </div>


        {/* Explainer Section */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start border-t-2 border-black/10 pt-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">What are AI Agents?</h2>
            <p className="text-xl leading-relaxed text-black/70 font-medium max-w-md">
              Unlike traditional chatbots that just talk, AI Agents actually take action. They can navigate interfaces, read emails, and update spreadsheets—automating repetitive tasks based on your own business rules.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Front Desk</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Customer Support Triage</h4>
                <p className="text-black/70 leading-relaxed text-lg mb-3">
                  Instantly categorizing, answering, and routing customer tickets with human-like empathy.
                </p>
                <p className="text-black/50 text-sm">
                  <span className="font-bold text-black/60">Example:</span> Patient texts 'Do you accept BlueCross?' → Agent checks policy DB → Replies: 'Yes, we do! Would you like to book?'
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Accountant</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Invoice Processing</h4>
                <p className="text-black/70 leading-relaxed text-lg mb-3">
                  Reading PDFs, cross-referencing orders, and updating your systems without manual data entry.
                </p>
                <p className="text-black/50 text-sm">
                  <span className="font-bold text-black/60">Example:</span> Vendor emails an invoice PDF → Agent reads it, flags a ₹2,000 mismatch → Notifies finance before payment.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Researcher</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Market Analysis</h4>
                <p className="text-black/70 leading-relaxed text-lg mb-3">
                  Scraping competitors, summarizing news, and delivering structured daily reports to your inbox.
                </p>
                <p className="text-black/50 text-sm">
                  <span className="font-bold text-black/60">Example:</span> Every morning at 8 AM → Agent scans 5 competitor sites → Sends a 1-page summary to your inbox.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-black/40">The Manager</h3>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">Workflow Orchestration</h4>
                <p className="text-black/70 leading-relaxed text-lg mb-3">
                  Agents communicating with other tools and agents to solve complex problems autonomously.
                </p>
                <p className="text-black/50 text-sm">
                  <span className="font-bold text-black/60">Example:</span> New lead fills out a web form → Agent qualifies them, creates a CRM record, and texts your sales team → Zero manual entry.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Tying it together */}
        <div className="mt-32 bg-black text-white p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 max-w-3xl tracking-tight relative z-10">
            Stop doing robot work. <br/> Let the robots do it.
            <span className="text-white/50 block mt-2"> Free up your human talent for creative, high-impact strategy.</span>
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
