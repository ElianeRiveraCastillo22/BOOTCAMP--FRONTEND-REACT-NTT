import { ReactNode } from 'react'
import './App.css'
import { Footer } from './pages/components/Footer/Footer'
import { Navbar } from './pages/components/Navbar/Navbar'

interface Props {
  children: ReactNode
}

export function App({children}: Props) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

