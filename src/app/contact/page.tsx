"use client"

import { ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "97663c4b-5adc-4713-9683-4258338b50dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(data.success ? "Success! We will get back to you soon." : "Error: Something went wrong.");
    } catch (error) {
      setResult("Error: Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        
        {/* Intro */}
        <div className="mb-12">
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-4 h-4 fill-black text-black" />
            ))}
          </div>
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase border-b border-black/10 pb-1 inline-block">
            INITIATE COMMUNICATIONS
          </p>
        </div>

        {/* Hero Hook */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-16 max-w-4xl">
          Let's talk.<br />
          <span className="text-black/40">No templates. Just engineering.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-black/10 pt-12">
          
          {/* Information Column */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-8 tracking-tight">Official Details</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 text-black/40">Direct Line</h3>
                <a href="tel:+918921507695" className="text-xl font-bold tracking-tight hover:opacity-60 transition-opacity">
                  +91 89215 07695
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 text-black/40">Email Protocol</h3>
                <a href="mailto:info@tentaclespvtltd.com" className="text-xl font-bold tracking-tight hover:opacity-60 transition-opacity break-all">
                  info@tentaclespvtltd.com
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5 text-black/40">Registered Headquarters</h3>
                <address className="text-base font-medium text-black/80 leading-relaxed not-italic">
                  <strong className="text-black block mb-1">Tentacles Private Limited</strong>
                  Room No. 204-B, TBI-GECW, 1st Floor<br />
                  Amenity Block, GEC Wayanad<br />
                  Thalappuzha, Mananthavady, Kerala – 670644<br />
                  India
                </address>
              </div>

              <div className="bg-black/5 p-5 border border-black/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 text-black block">Incubation Note</span>
                <p className="text-black/60 font-medium leading-relaxed text-xs">
                  Tentacles Private Limited is incubated at the Technology Business Incubator (TBI) facility within the government engineering ecosystem in North Kerala, GEC Wayanad.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7 md:pl-10 border-t border-black/10 md:border-t-0 md:border-l pt-12 md:pt-0">
            <h2 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h2>
            
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-lg font-bold tracking-tight text-black focus:outline-none focus:border-black transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-lg font-bold tracking-tight text-black/40 peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-black transition-all cursor-text peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-[0.15em] peer-not-placeholder-shown:text-black">
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-lg font-bold tracking-tight text-black focus:outline-none focus:border-black transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-lg font-bold tracking-tight text-black/40 peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-black transition-all cursor-text peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-[0.15em] peer-not-placeholder-shown:text-black">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-lg font-bold tracking-tight text-black focus:outline-none focus:border-black transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-lg font-bold tracking-tight text-black/40 peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-black transition-all cursor-text peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-[0.15em] peer-not-placeholder-shown:text-black">
                    Phone Number (Optional)
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border-b border-black/20 py-2.5 text-lg font-bold tracking-tight text-black focus:outline-none focus:border-black transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="absolute left-0 top-3 text-lg font-bold tracking-tight text-black/40 peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-black transition-all cursor-text peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-[0.15em] peer-not-placeholder-shown:text-black">
                    Subject
                  </label>
                </div>
              </div>

              <div className="relative group mt-4">
                <textarea 
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-black/20 py-2.5 text-lg font-bold tracking-tight text-black focus:outline-none focus:border-black transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-lg font-bold tracking-tight text-black/40 peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-black transition-all cursor-text peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-[0.15em] peer-not-placeholder-shown:text-black">
                  Message (Optional)
                </label>
              </div>

              <div className="pt-4 flex flex-col items-start gap-4">
                <button 
                  type="submit" 
                  disabled={result === "Sending..."}
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold uppercase tracking-[0.15em] text-[10px] rounded-full hover:bg-black/80 hover:scale-105 transition-all w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {result === "Sending..." ? "Sending..." : "Submit Request"} <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </button>
                
                {result && result !== "Sending..." && (
                  <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${result.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}
