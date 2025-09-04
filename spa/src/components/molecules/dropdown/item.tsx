import { Link } from "react-router";

interface props {
  label: string;
  url: string;
}

export function Item({label, url}: props) {
  return (
    <Link
      to={url}
      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
      role="menuitem"
    >
      {label}
    </Link>
  )
}
