import Link from "next/link";

export default function Header() {
	return (
		<div className="p-8 flex justify-between">
			<Link  href="/">MarketPlace</Link>
			<div className="inline-flex flex-col gap-4 sm:flex-row">
        <Link href="/discover">Discover</Link>
        <Link href="/inventory">Inventory</Link>
				<Link href="/interest">Interest</Link>
        <Link href="/auth/signin">Signin</Link>
			</div>
		</div>
	);
}
