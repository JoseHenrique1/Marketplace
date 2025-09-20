import { Footer } from '@/components/molecules/footer'
import { Header } from '../header'

interface props {
  children: React.ReactNode
}

export function LayoutDefault({ children }: props) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='w-full'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
