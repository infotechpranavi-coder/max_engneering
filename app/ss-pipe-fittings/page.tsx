import { CategoryPageContent } from '@/components/category-page-content'

export const metadata = {
  title: 'SS Pipe & Fittings | MAX ENGINEERING',
  description: 'High-integrity stainless steel piping and forged fittings for industrial pressure lines.',
}

export default function SSPipeFittingsPage() {
  return (
    <CategoryPageContent category="SS Pipe & Fittings">
      {/* Technical Catalog Visual Showcase */}
      <section className="pb-32 pt-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
             <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block underline underline-offset-8 decoration-2 decoration-secondary/30">Reference Library</span>
             <h2 className="text-4xl font-black text-primary tracking-tighter uppercase italic">INSTRUMENTATION TUBE FITTINGS</h2>
          </div>
          
          <div className="max-w-4xl mx-auto border border-border/20 rounded-[3rem] overflow-hidden bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_5.jpg" alt="Engineering Setup 1" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_6.jpg" alt="Engineering Setup 2" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_7.jpg" alt="Engineering Setup 3" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_8.jpg" alt="Engineering Setup 4" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_9.jpg" alt="Engineering Setup 5" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_10.jpg" alt="Engineering Setup 6" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="border-b border-border/20 p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_11.jpg" alt="Engineering Setup 7" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
             <div className="p-10 flex flex-col items-center group hover:bg-[#F8F9FA] transition-colors">
                <img src="/pipe_12.jpg" alt="Engineering Setup 8" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
             </div>
          </div>
        </div>
      </section>
    </CategoryPageContent>
  )
}
