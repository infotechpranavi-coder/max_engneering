import { CategoryPageContent } from '@/components/category-page-content'
import Image from 'next/image'

export const metadata = {
  title: 'Digital Indicators & Controllers | MAX ENGINEERING',
  description: 'Precision industrial digital indicators, process controllers, and monitoring systems.',
}

export default function DigitalIndicatorsControllersPage() {
  return (
    <CategoryPageContent category="Digital Indicators & Controllers">
      {/* Visual Showcase Section */}
      <section className="pb-32 pt-0 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Single Column Visual Stack (Zero Gap - Seamless) */}
          <div className="w-full">
             <img src="/digi_2.jpg" alt="" className="w-full h-auto block m-0 p-0" />
             <img src="/digi_3.jpg" alt="" className="w-full h-auto block m-0 p-0" />
             <img src="/digi_4.jpg" alt="" className="w-full h-auto block m-0 p-0" />
          </div>
        </div>
      </section>
    </CategoryPageContent>
  )
}
