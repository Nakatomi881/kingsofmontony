import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProviders'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kings of Monotony',
  description: 'Software testing experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>

        <div className="container">
          
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        
        </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}