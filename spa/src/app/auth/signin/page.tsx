"use client";
import { api } from "@/utils/api";
import Cookies from "js-cookie";
import Link from "next/link";
interface responseJson {
	token: string;
	user: {
		name: string;
		email: string;
	};
}
export default function Signin() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;

		const req = await api("/auth/signin", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		console.log(JSON.stringify(req, null, 2));

		if (req.status === 200) {
			const res: responseJson = await req.json();
			Cookies.set("token", res.token);
			Cookies.set("user", JSON.stringify(res.user));
			console.log(res);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<button type="submit">enviar</button>
			</form>
			<Link href="/auth/signup">Criar Conta</Link>
		</div>
	);
}
