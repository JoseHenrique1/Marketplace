import { api } from "@/utils/api";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface responseJson {
	token: string;
	user: {
		name: string;
		email: string;
	};
}

export default async function Signin() {
	const handleSubmit = async (formData: FormData) => {
		"use server";
		const email = formData.get("email");
		const password = formData.get("password");

		const req = await api("/auth/signin", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		console.log(JSON.stringify(req, null, 2));

		if (req.status === 200) {
			const res: responseJson = await req.json();
			const cookieStore = await cookies();
			cookieStore.set("token", res.token);
			cookieStore.set("user", JSON.stringify(res.user));
			console.log(res);
			redirect("/");
		}
	};
	return (
		<div>
			<form action={handleSubmit}>
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<button type="submit">enviar</button>
			</form>
			<Link href="/auth/signup">Criar Conta</Link>
		</div>
	);
}
