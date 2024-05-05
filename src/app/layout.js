import { Figtree, Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'], weight: ['600', '800'], variable: '--figtree' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className='font-figtree' >{children}</body>
    </html>
  )
}