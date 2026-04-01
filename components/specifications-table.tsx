interface SpecificationsTableProps {
  specifications: {
    range: string
    accuracy: string
    material: string
    connection: string
  }
}

export function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {Object.entries(specifications).map(([key, value], idx) => (
            <tr
              key={key}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-muted/50'}
            >
              <td className="px-6 py-4 font-semibold text-foreground capitalize w-1/3">
                {key}
              </td>
              <td className="px-6 py-4 text-foreground">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
