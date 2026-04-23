import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingContact } from '@/components/floating-contact'
import './globals.css'

const _geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'MAX ENGINEERING - Industrial Pressure & Temperature Gauges',
  description: 'Premium industrial gauges and measurement instruments for precision monitoring',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_geistMono.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <FloatingContact />
      </body>
    </html>
  )
}
