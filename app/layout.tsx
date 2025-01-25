import { inter } from '../ui/shared/font'
import '@/ui/shared/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

// antialiased class -> smooths out the font (not necessary), but it adds a nice touch.
