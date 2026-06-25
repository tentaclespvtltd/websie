"use client"

import { Phone, Mail, MapPin, Building2, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-text-main py-16 lg:py-24 selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            Connect With Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
            Let's build something <br />
            extraordinary together.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Have an idea or a complex business challenge? Get in touch with our engineering team to discuss how we can design custom software tailored exactly to your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card border border-border-subtle/80 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>
              
              <h2 className="text-xl font-bold font-heading mb-8 text-text-main">Official Information</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">Official Phone</h3>
                    <a href="tel:+918921507695" className="text-text-main font-bold hover:text-primary transition-colors text-base">
                      +91 89215 07695
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">Official Email</h3>
                    <a href="mailto:info@tentaclespvtltd.com" className="text-text-main font-bold hover:text-primary transition-colors text-base break-all">
                      info@tentaclespvtltd.com
                    </a>
                  </div>
                </div>

                {/* Headquarters Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Registered Headquarters</h3>
                    <div className="text-sm text-text-main font-semibold leading-relaxed space-y-1">
                      <p className="font-bold text-base text-primary mb-1">Tentacles Private Limited</p>
                      <p>Room No. 204-B, TBI-GECW, First Floor,</p>
                      <p>Amenity Block, Government Engineering College Wayanad,</p>
                      <p>Thalappuzha, Mananthavady, Wayanad,</p>
                      <p>Kerala – 670644, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded map or TBI notice */}
            <div className="bg-primary/[0.03] border border-primary/10 rounded-3xl p-6 text-xs text-muted-foreground leading-relaxed font-mono">
              <span className="font-bold text-primary block mb-2">// INCUBATION NOTE</span>
              Tentacles Private Limited is incubated at the Technology Business Incubator (TBI) facility within the government engineering ecosystem in North Kerala, GEC Wayanad.
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border-subtle/80 rounded-3xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-bold font-heading mb-6 text-text-main">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-text-main"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-text-main"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="+91 99999 99999" 
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-text-main"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Custom Project Proposal" 
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-text-main"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Project Brief & Requirements</label>
                  <textarea 
                    rows={5} 
                    placeholder="Describe your operational flow, scale requirements, or what you want us to build..." 
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-text-main resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
