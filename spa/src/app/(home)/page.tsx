import Link from "next/link";

export default function Home() {
  return (
   <div className="p-8">
    <Link href="/auth/signin">Signin</Link>
   </div>
  );
}
