
import { Link } from "react-router";

interface props {
  label: string;
  url: string
}

export function Anchor({ label, url}: props) {
  return (
    <li >
      <Link
        className=" text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        to={url}
      >
        {label}
      </Link>
    </li>
  )
}
