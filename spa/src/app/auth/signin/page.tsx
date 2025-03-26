"use client";
import Cookies from "js-cookie";
interface responseJson {
  token: string;
  user: {
    name: string;
    email: string;
  }
}
export default function Signin() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;

		const base_url_api = process.env.NEXT_PUBLIC_URL_API;
		const url = `${base_url_api}/auth/signin`;
		console.log(url);

		const req = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

    if (req.status === 200) {
      const res : responseJson = await req.json();
      Cookies.set("token", res.token);
      Cookies.set("user", JSON.stringify(res.user));

      
    }

	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<button type="submit">enviar</button>
			</form>
		</div>
	);
}
