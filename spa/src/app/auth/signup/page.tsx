"use client";
import { api } from "@/utils/api";
import Cookies from "js-cookie";
interface responseJson {
	token: string;
	user: {
		name: string;
		email: string;
	};
}
export default function Signup() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const name = event.currentTarget.nameUser.value;
		const password = event.currentTarget.password.value;
		const email = event.currentTarget.email.value;
		const whatsapp = event.currentTarget.whatsapp.value;
		const city = event.currentTarget.city.value;
		const state = event.currentTarget.state.value;

		const data = { 
			name,
			email, 
			password,
			whatsapp,
			city,
			state }
			console.log(data);
			

		const req = await fetch("http://localhost:4545/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		console.log(JSON.stringify(req, null, 2));

		if (req.status === 200) {
			const res: responseJson = await req.json();
			Cookies.set("token", res.token);
			Cookies.set("user", JSON.stringify(res.user));
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input type="text" placeholder="Name" name="nameUser" />
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<input type="text" placeholder="whatsapp" name="whatsapp" />
				<input type="text" placeholder="city" name="city" />
				<input type="text" placeholder="state" name="state" />
				<button type="submit">enviar</button>
			</form>
		</div>
	);
}

/*
name: ZodString;
    email: ZodString;
    password: ZodString;
    image: ZodOptional<ZodString>;
    whatsapp: ZodString;
    city: ZodString;
    state: ZodString;
*/
