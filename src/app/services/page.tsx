import Link from 'next/link'
import { ArrowRight, Globe, Layout, Smartphone, Bot, CheckCircle2, Cloud, Compass } from 'lucide-react'
import { FinalCTA } from '@/components/Sections'

export default function ServicesPage() {
  const services = [
    {
      id: 'web',
      title: 'Branding & Web Platforms',
      subtitle: 'Your Digital Storefront',
      description: 'We design and engineer high-converting websites and e-commerce platforms that perfectly encapsulate your brand identity. Fast, accessible, and built for growth.',
      features: ['Strategic UI/UX Design', 'Corporate Websites & Portals', 'High-Performance E-commerce', 'SEO & Conversion Optimization'],
      icon: <Globe className="w-10 h-10 md:w-14 md:h-14" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Browser Window */}
          <div className="w-[85%] h-[70%] bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_-12px_rgba(16,185,129,0.2)] border border-white/60 overflow-hidden flex flex-col transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-700">
            {/* Browser Header */}
            <div className="h-8 bg-gray-50/80 border-b border-gray-100/50 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>
            {/* Browser Content - Abstract Layout */}
            <div className="flex-1 p-5 flex gap-4">
              <div className="w-1/3 h-full bg-emerald-500/10 rounded-xl"></div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-3/4 h-8 bg-emerald-500/10 rounded-lg"></div>
                <div className="w-full h-4 bg-gray-100 rounded-md mt-2"></div>
                <div className="w-5/6 h-4 bg-gray-100 rounded-md"></div>
                <div className="w-full flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mt-2 border border-gray-100/50"></div>
              </div>
            </div>
          </div>
          {/* Floating Element 1 */}
          <div className="absolute top-[15%] -right-2 w-28 h-36 bg-white/60 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 transform rotate-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700 delay-100 p-4 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20"></div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full mt-auto"></div>
            <div className="w-2/3 h-2.5 bg-gray-200 rounded-full"></div>
          </div>
          {/* Floating Element 2 */}
          <div className="absolute bottom-[10%] -left-4 w-44 h-24 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 transform -rotate-3 group-hover:-translate-x-4 group-hover:translate-y-2 transition-all duration-700 delay-200 p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500"></div>
            <div className="flex-1 flex flex-col gap-2.5">
              <div className="w-full h-2.5 bg-gray-200 rounded-full"></div>
              <div className="w-4/5 h-2.5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      path: '/engineering/web',
      accent: 'emerald'
    },
    {
      id: 'software',
      title: 'Customized Software',
      subtitle: 'Built For Your Exact Needs',
      description: 'Off-the-shelf software rarely fits perfectly. We build bespoke enterprise applications, internal tools, and dashboards that streamline your unique operational workflows and scale with your business.',
      features: ['Complex Enterprise Portals', 'Streamlined Internal Tools', 'Custom SaaS Development', 'Secure API Integrations'],
      icon: <Layout className="w-10 h-10 md:w-14 md:h-14" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Dashboard Panel */}
          <div className="w-[90%] h-[75%] bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)] border border-white/60 overflow-hidden flex transform group-hover:scale-[1.02] transition-all duration-700">
            {/* Sidebar */}
            <div className="w-1/4 h-full bg-gray-50/80 border-r border-gray-100/50 p-4 flex flex-col gap-3">
              <div className="w-full h-6 bg-blue-500/10 rounded-md mb-4"></div>
              <div className="w-full h-4 bg-gray-200 rounded-md"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded-md"></div>
              <div className="w-full h-4 bg-gray-200 rounded-md"></div>
            </div>
            {/* Main Area */}
            <div className="flex-1 p-5 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 h-20 bg-blue-500/5 rounded-xl border border-blue-500/10 p-3 flex flex-col justify-end">
                  <div className="w-1/2 h-2 bg-blue-400/40 rounded-full mb-2"></div>
                  <div className="w-3/4 h-4 bg-blue-500/80 rounded-full"></div>
                </div>
                <div className="flex-1 h-20 bg-indigo-500/5 rounded-xl border border-indigo-500/10 p-3 flex flex-col justify-end">
                  <div className="w-1/2 h-2 bg-indigo-400/40 rounded-full mb-2"></div>
                  <div className="w-2/3 h-4 bg-indigo-500/80 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100/50 relative overflow-hidden flex items-end p-4 gap-2">
                {/* Bar chart mockup */}
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-400/10 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
          {/* Floating Data Card */}
          <div className="absolute top-[20%] -left-6 w-32 h-28 bg-white/70 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 transform -rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-2 transition-all duration-700 delay-100 p-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 mb-3 flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
            <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      ),
      path: '/engineering/enterprise',
      accent: 'blue'
    },
    {
      id: 'ai',
      title: 'AI Agent Automation',
      subtitle: 'Intelligence At Scale',
      description: 'Leverage cutting-edge artificial intelligence to automate complex tasks, enhance customer support, and extract actionable insights from your data with unprecedented precision and speed.',
      features: ['Autonomous Workflow Agents', 'Custom LLM Integrations', 'Intelligent Customer Support', 'Predictive Data Analytics'],
      icon: <Bot className="w-10 h-10 md:w-14 md:h-14" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Network Nodes Mockup */}
          <div className="w-full h-full relative flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 group-hover:scale-105 transition-transform duration-1000" viewBox="0 0 200 200">
              <path d="M100,100 L40,60 M100,100 L160,50 M100,100 L150,150 M100,100 L50,140 M40,60 L160,50" stroke="url(#purple-grad)" strokeWidth="1" fill="none" className="animate-pulse" />
              <defs>
                <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Brain Node */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
              <Bot className="w-10 h-10 text-white" />
              <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-50 duration-1000"></div>
            </div>

            {/* Satellite Nodes */}
            <div className="absolute top-[20%] left-[20%] w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-purple-500/20 transform group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700 p-2.5 flex flex-col gap-1.5 justify-center">
              <div className="w-full h-1.5 bg-purple-500/40 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-purple-500/20 rounded-full"></div>
            </div>
            
            <div className="absolute top-[15%] right-[25%] w-10 h-10 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-fuchsia-500/20 transform group-hover:translate-x-6 group-hover:-translate-y-2 transition-all duration-700 flex items-center justify-center">
              <div className="w-4 h-4 bg-fuchsia-500/40 rounded-full animate-pulse"></div>
            </div>

            <div className="absolute bottom-[20%] right-[20%] w-32 h-16 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-purple-500/20 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700 p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400"></div>
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                <div className="w-4/5 h-1.5 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      path: '/engineering/ai',
      accent: 'purple'
    },
    {
      id: 'mobile',
      title: 'Mobile Applications',
      subtitle: 'Your Brand In Their Pocket',
      description: 'Native and cross-platform mobile experiences that users love. We build iOS and Android applications focused on fluid performance, intuitive interfaces, and rock-solid reliability.',
      features: ['Native iOS & Android', 'React Native & Flutter', 'App Store Optimization', 'Mobile Backend Services'],
      icon: <Smartphone className="w-10 h-10 md:w-14 md:h-14" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phone Mockup */}
          <div className="w-[45%] h-[85%] bg-gray-900 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(249,115,22,0.3)] border-4 border-gray-800 p-2 transform group-hover:-translate-y-4 transition-all duration-700 relative overflow-hidden flex flex-col z-10">
            {/* Phone Screen */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden flex flex-col relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-900 rounded-b-xl z-20"></div>
              {/* Screen Content */}
              <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 p-4 flex items-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"></div>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-orange-50 rounded-xl border border-orange-100"></div>
                  <div className="aspect-square bg-orange-50 rounded-xl border border-orange-100"></div>
                  <div className="aspect-square bg-orange-50 rounded-xl border border-orange-100"></div>
                  <div className="aspect-square bg-orange-50 rounded-xl border border-orange-100"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI Card */}
          <div className="absolute top-[30%] -right-4 w-32 h-20 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 transform rotate-6 group-hover:translate-x-6 group-hover:-translate-y-2 transition-all duration-700 delay-100 z-20 p-3 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-500/20"></div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full mt-2"></div>
          </div>
        </div>
      ),
      path: '/engineering/mobile',
      accent: 'orange'
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Infrastructure',
      subtitle: 'Scalable & Reliable Infrastructure',
      description: 'Deploy and manage modern cloud architectures with automated CI/CD pipelines, Kubernetes containerization, and site reliability monitoring built for 99.99% uptime.',
      features: ['AWS / GCP / Azure Management', 'Kubernetes & Docker Scaling', 'CI/CD Pipeline Automation', 'Infrastructure as Code (IaC)'],
      icon: <Cloud className="w-10 h-10 md:w-14 md:h-14" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Cloud Servers Rack */}
          <div className="w-[85%] h-[70%] bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_-12px_rgba(14,165,233,0.2)] border border-white/60 overflow-hidden flex flex-col p-5 gap-4 transform group-hover:scale-[1.02] transition-all duration-700">
            {/* Server 1 */}
            <div className="h-10 bg-sky-500/5 border border-sky-500/10 rounded-xl flex items-center px-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></div>
                <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="w-10 h-2 bg-sky-500/30 rounded-full"></div>
            </div>
            {/* Server 2 */}
            <div className="h-10 bg-sky-500/5 border border-sky-500/10 rounded-xl flex items-center px-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse delay-300"></div>
                <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="w-8 h-2 bg-sky-500/30 rounded-full"></div>
            </div>
            {/* Server 3 */}
            <div className="h-10 bg-sky-500/5 border border-sky-500/10 rounded-xl flex items-center px-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="w-12 h-2 bg-emerald-500/30 rounded-full"></div>
            </div>
          </div>
          {/* Floating CI/CD Pipeline Status */}
          <div className="absolute -bottom-2 -right-4 w-48 h-24 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 transform rotate-3 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-700 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-gray-400">Deploy Pipeline</span>
              <span className="text-[10px] font-mono text-sky-500 font-bold bg-sky-50 px-1.5 py-0.5 rounded">Success</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] text-sky-500 font-bold">1</div>
              <div className="flex-1 h-1 bg-sky-500 rounded-full"></div>
              <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] text-sky-500 font-bold">2</div>
              <div className="flex-1 h-1 bg-sky-500 rounded-full"></div>
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-600 font-bold">✓</div>
            </div>
          </div>
        </div>
      ),
      path: '/contact',
      accent: 'sky'
    }
  ]

  const getAccentStyles = (accent: string) => {
    switch(accent) {
      case 'emerald': return { text: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20 hover:border-emerald-500/40', shadow: 'hover:shadow-emerald-500/10' }
      case 'blue': return { text: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20 hover:border-blue-500/40', shadow: 'hover:shadow-blue-500/10' }
      case 'purple': return { text: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20 hover:border-purple-500/40', shadow: 'hover:shadow-purple-500/10' }
      case 'orange': return { text: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20 hover:border-orange-500/40', shadow: 'hover:shadow-orange-500/10' }
      case 'sky': return { text: 'text-sky-500', bg: 'bg-sky-500/10', border: 'border-sky-500/20 hover:border-sky-500/40', shadow: 'hover:shadow-sky-500/10' }
      case 'violet': return { text: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-500/20 hover:border-violet-500/40', shadow: 'hover:shadow-violet-500/10' }
      default: return { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20 hover:border-primary/40', shadow: 'hover:shadow-primary/10' }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background overflow-hidden border-b border-border-subtle">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 bg-black/5 text-black font-bold text-xs uppercase tracking-widest mb-8 rounded-full">
            Our Services
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 font-heading text-text-main leading-[0.95] max-w-4xl">
            We build digital<br />
            <span className="text-black/40">solutions that matter.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-medium">
            From establishing your digital identity to automating your most complex workflows, we engineer systems built for scale and success.
          </p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12 md:space-y-24">
          {services.map((service, index) => {
            const styles = getAccentStyles(service.accent);
            return (
              <div 
                key={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-24 items-center`}
              >
                {/* Mobile Header */}
                <div className="w-full lg:hidden">
                  <div className={`inline-flex items-center px-3 py-1 ${styles.bg} ${styles.text} font-bold text-[10px] uppercase tracking-widest mb-4 rounded-full w-fit`}>
                    {service.subtitle}
                  </div>
                  <Link href={service.path} className="hover:opacity-80 transition-opacity block">
                    <h2 className="text-4xl font-bold tracking-tight font-heading">
                      {service.title}
                    </h2>
                  </Link>
                </div>

                {/* Visual Block */}
                <Link href={service.path} className="w-full lg:w-1/2 block">
                  <div className={`relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-white border ${styles.border} shadow-2xl ${styles.shadow} transition-all duration-500 overflow-hidden group flex items-center justify-center p-6 md:p-12 cursor-pointer`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${service.accent}-500/5 opacity-50`}></div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-64 h-64 ${styles.bg} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-700 group-hover:scale-150`}></div>
                    <div className={`absolute bottom-0 left-0 w-64 h-64 ${styles.bg} rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 transition-transform duration-700 group-hover:scale-150`}></div>
                    
                    {/* Render visual if exists, otherwise fallback to icon */}
                    <div className="relative z-10 w-full h-full">
                      {service.visual ? service.visual : (
                        <div className={`w-full h-full flex items-center justify-center ${styles.text} transition-transform duration-500 group-hover:scale-110`}>
                          {service.icon}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  {/* Desktop Header */}
                  <div className="hidden lg:block">
                    <div className={`inline-flex items-center px-3 py-1 ${styles.bg} ${styles.text} font-bold text-[10px] uppercase tracking-widest mb-6 rounded-full w-fit`}>
                      {service.subtitle}
                    </div>
                    <Link href={service.path} className="hover:opacity-85 transition-opacity block mb-6">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
                        {service.title}
                      </h2>
                    </Link>
                  </div>
                  
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-10 font-medium">
                    {service.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-black/80 font-medium">
                        <CheckCircle2 className={`w-5 h-5 ${styles.text} shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={service.path}
                    className="inline-flex items-center text-lg font-bold group w-fit"
                  >
                    <span className="border-b-2 border-black/20 group-hover:border-black transition-colors pb-1">
                      Explore {service.title}
                    </span>
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  )
}
