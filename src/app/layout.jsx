import './globals.css'
import { DM_Serif_Display, Karla } from 'next/font/google'

const dm_serif_display = DM_Serif_Display({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400']
})

const karla = Karla({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Interelectricas IMAC',
  description: 'This is a website of Interelectricas IMAC'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${dm_serif_display.className} ${karla.className}`}
    >
      <body className="body">{children}</body>
    </html>
  )
}
