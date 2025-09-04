import { Anchor } from '@/components/atoms/link'

interface props {
  show: boolean
}

export function Navbar({show}: props) {
  const newClassName = (
    show ? " h-auto translate-y-0 " : " h-0 translate-y-[-1000px] "
  ).concat(" transition-all duration-1000 order-3 md:order-2 w-full md:block md:w-auto ");
  
  const newClassName1 = (show
    ? "max-h-96 translate-y-0"
    : "max-h-0 translate-y-[-1000px]"
  ).concat(
    " overflow-hidden transition-all duration-1000 order-3 md:order-2 w-full md:translate-y-0 md:max-h-96 md:w-auto"
  );
  
  const alternate = show ? "translate-x-0" : "";
  return (
    <nav aria-label="Global" className={newClassName1}>
      <ul className="flex transition-all duration-1000  flex-col gap-2 pt-0 text-sm md:gap-4 md:text-base  md:flex-row md:items-center md:justify-center">
        <Anchor label="Discover" url="/discover" />
        <Anchor label="Inventory" url="/inventory" />
        <Anchor label="Interest" url="/interest" />
        <Anchor label="About" url="/about" />
      </ul>
    </nav>
  )
}
