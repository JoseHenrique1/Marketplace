import { Anchor } from '@/components/atoms/link'
import { useAuthStore } from '@/stores/auth-store';

const links = [
  {
    label: "Discover",
    url: "/discover",
    isAuthenticated: true
  },
  {
    label: "Inventory",
    url: "/inventory",
    isAuthenticated: true
  },
  {
    label: "Interest",
    url: "/interest",
    isAuthenticated: true
  },
  {
    label: "About",
    url: "/about",
    isAuthenticated: false
  },
]

interface props {
  show: boolean
}

export function Navbar({ show }: props) {
  const { isAuthenticated } = useAuthStore()

  const filteredLinks = isAuthenticated? links : links.filter(link => link.isAuthenticated === isAuthenticated);
 
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
        {filteredLinks.map((link)=>(<Anchor key={link.url} {...link} />))}
      </ul>
    </nav>
  )
}
