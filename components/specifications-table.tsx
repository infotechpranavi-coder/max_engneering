interface SpecificationsTableProps {
  specifications: Record<string, string>
}

export function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  return (
    <div className="overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F8F9FA]">
          <tr>
            <th className="px-6 py-4 text-[10px] font-black text-primary/40 uppercase tracking-widest border-b border-border/40">Parameter</th>
            <th className="px-6 py-4 text-[10px] font-black text-primary/40 uppercase tracking-widest border-b border-border/40">Calibration Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specifications).map(([key, value], idx) => (
            <tr
              key={key}
              className="group hover:bg-[#FDFDFD] transition-colors"
            >
              <td className="px-6 py-4 font-black text-primary uppercase tracking-[0.1em] text-xs w-1/3 border-b border-border/20 whitespace-nowrap">
                <span className="opacity-40 mr-3">0{idx + 1} //</span>
                {key}
              </td>
              <td className="px-6 py-4 text-primary font-bold tracking-tight border-b border-border/20">
                 {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
