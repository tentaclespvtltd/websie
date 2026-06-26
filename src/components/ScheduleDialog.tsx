"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock, User, Mail, Phone, CheckCircle2, Loader2, ArrowRight, ArrowLeft } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const timeSlots = [
  // 9 am to 12:30
  "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  // 1:30 to 4:30
  "01:30 PM", "02:00 PM",
  "02:30 PM", "03:00 PM",
  "03:30 PM", "04:00 PM",
  "04:30 PM",
  // 7:30 to 9:30
  "07:30 PM", "08:00 PM",
  "08:30 PM", "09:00 PM",
  "09:30 PM",
]

export function ScheduleDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [activePeriod, setActivePeriod] = useState<"morning" | "afternoon" | "evening">("morning")

  const resetForm = () => {
    setStep(1)
    setDate(undefined)
    setTime("")
    setName("")
    setEmail("")
    setPhone("")
    setStatus("idle")
    setActivePeriod("morning")
  }

  const onSubmit = async () => {
    setStatus("loading")

    const formData = new FormData()
    formData.append("access_key", "97663c4b-5adc-4713-9683-4258338b50dc")
    formData.append("subject", "New Consultation Scheduled")
    formData.append("name", name)
    formData.append("email", email)
    if (phone) formData.append("phone", phone)
    if (date) formData.append("preferred_date", format(date, "PPP"))
    if (time) formData.append("preferred_time", time)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus("success")
        setTimeout(() => {
          setOpen(false)
          setTimeout(resetForm, 300)
        }, 2000)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const filteredSlots = timeSlots.filter(slot => {
    if (activePeriod === "morning") {
      const hour = parseInt(slot.split(":")[0])
      const isPM = slot.includes("PM")
      if (isPM && hour === 12) return true
      return !isPM
    }
    if (activePeriod === "afternoon") {
      const hour = parseInt(slot.split(":")[0])
      const isPM = slot.includes("PM")
      return isPM && hour >= 1 && hour <= 4
    }
    // evening
    const hour = parseInt(slot.split(":")[0])
    const isPM = slot.includes("PM")
    return isPM && hour >= 7 && hour <= 9
  })

  const canProceedToStep2 = name.trim() !== "" && email.trim() !== ""
  const canSubmit = date !== undefined && time !== ""

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setTimeout(resetForm, 300) }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(
        "bg-white border border-border-subtle p-0 overflow-hidden gap-0 rounded-xl shadow-2xl transition-all duration-300 ease-in-out",
        status === "success" ? "sm:max-w-[460px]" : step === 1 ? "sm:max-w-[460px]" : "sm:max-w-[680px]"
      )}>

        {/* Success State */}
        {status === "success" ? (
          <div className="px-8 py-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-heading font-bold text-text-main mb-2">Meeting Scheduled!</h3>
            <p className="text-sm text-muted-foreground max-w-[300px]">
              We'll send a confirmation to <strong className="text-text-main">{email}</strong> with the meeting details.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-7 pt-7 pb-5">
              <DialogHeader>
                <DialogTitle className="text-xl font-heading font-bold tracking-tight text-text-main">
                  Schedule a Consultation
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {step === 1
                    ? "Enter your details so we can confirm your meeting."
                    : "Choose your preferred date and time slot."}
                </DialogDescription>
              </DialogHeader>

              {/* Sleek Progress Line Indicator */}
              <div className="space-y-2 mt-5">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  <span className={cn(step === 1 ? "text-text-main" : "")}>1. Details</span>
                  <span className={cn(step === 2 ? "text-text-main" : "")}>2. Schedule</span>
                </div>
                <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-text-main h-full transition-all duration-350 ease-in-out"
                    style={{ width: step === 1 ? "50%" : "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle" />

            {/* Content Switcher with framer-motion */}
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="px-7 py-6 space-y-5"
                >
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/50">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-border-subtle bg-white text-sm text-text-main placeholder:text-muted-foreground/45 focus:outline-none focus:border-text-main focus:ring-2 focus:ring-text-main/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/50">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-border-subtle bg-white text-sm text-text-main placeholder:text-muted-foreground/45 focus:outline-none focus:border-text-main focus:ring-2 focus:ring-text-main/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center">
                      Phone Number
                      <span className="text-[10px] text-muted-foreground/40 normal-case tracking-normal font-normal ml-1">(optional)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/50">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-border-subtle bg-white text-sm text-text-main placeholder:text-muted-foreground/45 focus:outline-none focus:border-text-main focus:ring-2 focus:ring-text-main/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!canProceedToStep2}
                    onClick={() => setStep(2)}
                    className="w-full h-11 mt-1 inline-flex items-center justify-center font-mono text-xs font-bold text-white bg-text-main border border-text-main rounded-lg hover:bg-transparent hover:text-text-main transition-all duration-200 uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="px-7 py-6 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    
                    {/* Left Column: Calendar */}
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5" /> Select Date
                      </label>
                      <div className="border border-border-subtle rounded-lg p-3 bg-muted/10 flex justify-center">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date(new Date().setHours(0,0,0,0)) || d.getDay() === 0}
                        />
                      </div>
                    </div>

                    {/* Right Column: Time Slots */}
                    <div className="space-y-4">
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Select Time
                        </label>

                        {/* Segmented Period Tabs */}
                        <div className="flex border border-border-subtle rounded-md overflow-hidden bg-muted/20 p-1 gap-1">
                          {(["morning", "afternoon", "evening"] as const).map((period) => (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setActivePeriod(period)}
                              className={cn(
                                "flex-1 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded transition-all duration-150 text-center capitalize cursor-pointer",
                                activePeriod === period
                                  ? "bg-text-main text-white"
                                  : "text-muted-foreground hover:text-text-main"
                              )}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Filtered Slots Grid */}
                      <div className="grid grid-cols-2 gap-2 max-h-[190px] overflow-y-auto pr-1">
                        {filteredSlots.length > 0 ? (
                          filteredSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTime(slot)}
                              className={cn(
                                "px-2 py-2 text-[11px] font-mono font-semibold rounded-md border transition-all duration-150 text-center cursor-pointer",
                                time === slot
                                  ? "bg-text-main text-white border-text-main"
                                  : "bg-white text-muted-foreground border-border-subtle hover:border-text-main/30 hover:text-text-main"
                              )}
                            >
                              {slot}
                            </button>
                          ))
                        ) : (
                          <div className="col-span-2 text-center py-8 text-xs text-muted-foreground">
                            No slots available for this period.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  {date && time && (
                    <div className="p-3.5 bg-muted/30 border border-border-subtle rounded-lg flex items-center justify-between text-xs transition-all animate-in fade-in duration-200">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Confirmed slot details:</span>
                      </div>
                      <span className="font-mono font-bold text-text-main">
                        {format(date, "EEEE, MMMM d")} @ {time}
                      </span>
                    </div>
                  )}

                  {/* Actions Block */}
                  <div className="flex gap-3 pt-4 border-t border-border-subtle">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="h-11 px-5 inline-flex items-center justify-center font-mono text-xs font-bold text-text-main bg-transparent border border-border-subtle rounded-lg hover:bg-muted transition-all duration-200 uppercase tracking-wider cursor-pointer"
                    >
                      <ArrowLeft className="mr-1.5 w-3.5 h-3.5" />
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!canSubmit || status === "loading"}
                      onClick={onSubmit}
                      className="flex-1 h-11 inline-flex items-center justify-center font-mono text-xs font-bold text-white bg-text-main border border-text-main rounded-lg hover:bg-transparent hover:text-text-main transition-all duration-200 uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "loading" ? (
                        <><Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> Scheduling...</>
                      ) : (
                        "Confirm Meeting"
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-center text-red-600 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
