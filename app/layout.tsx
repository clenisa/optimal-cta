import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Optimal — The OS for AI-enabled teams',
  description: 'One platform. Many expert tools. Faster deals. Smarter operations. Optimal bundles specialist apps and AI into a single, secure web OS. Features include tool aggregate (Optimal OS), Dendetective property deal engine, OpenBanking budgeting, Experian integration, e-commerce price analytics, and Optimal AI with frontier LLMs.',
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
