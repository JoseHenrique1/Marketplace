import { api } from "@/utils/api";


export default function Signup() {
	const handleSubmit = async (formData: FormData) => {
		"use server";
		const name = formData.get("nameUser");
		const password = formData.get("password");
		const email = formData.get("email");
		const whatsapp = formData.get("whatsapp");
		const city = formData.get("city");
		const state = formData.get("state");

		const data = {
			name,
			email,
			password,
			whatsapp,
			city,
			state,
		};

		const req = await api("/auth/signup", {
			method: "POST",
			body: JSON.stringify(data),
		});

		console.log("res - "+req.status+req);

		if (req.status === 201) {
			const res = await req.json();
			console.log("res 201 - ok\n"+JSON.stringify(res, null, 2));
		}
	};
	return (
		<div>
			<form action={handleSubmit} className="flex flex-col gap-4">
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
