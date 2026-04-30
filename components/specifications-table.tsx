import { Gauge } from 'lucide-react'

interface SpecificationsTableProps {
  specifications: Record<string, string>
}

export function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(specifications).map(([key, value], idx) => (
          <div
            key={key}
            className="group bg-primary border border-white/10 p-6 rounded-2xl flex items-center justify-between transition-all hover:bg-black hover:scale-[1.02] shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <Gauge className="text-secondary size-5 group-hover:text-secondary-foreground transition-colors" />
              </div>
              <div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                  Parameter 0{idx + 1}
                </div>
                <div className="font-black text-white uppercase tracking-[0.1em] text-xs">
                  {key}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                Value
              </div>
              <div className="text-secondary font-bold tracking-tight text-sm">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
