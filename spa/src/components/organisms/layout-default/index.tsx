import { Header } from '../header'

interface props {
  children: React.ReactNode
}

export default function LayoutDefault({ children }: props) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header />
      {children}
      <footer>
        Marketplace
      </footer>
    </div>
  )
}
