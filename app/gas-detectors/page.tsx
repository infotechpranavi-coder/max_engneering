import { CategoryPageContent } from '@/components/category-page-content'

export const metadata = {
  title: 'Gas Detectors | MAX ENGINEERING',
  description: 'Fixed and handheld gas detection systems for industrial safety, monitoring toxic and combustible gases in hazardous environments.',
}

export default function GasDetectorsPage() {
  const categoryDescription = "Our Gas Detection solutions include: 1) Fixed Type Gas Detectors (Dräger Polytron & Honeywell Sensepoint XCD) for continuous 24/7 facility monitoring, and 2) Handheld / Portable Gas Detectors (Honeywell BW Solo & Dräger Pac Series) for personal safety."

  return (
    <CategoryPageContent 
      category="Gas Detectors" 
      description={categoryDescription}
    />
  )
}
