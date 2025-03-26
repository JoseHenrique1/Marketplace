import Cookies from "js-cookie";

const BASE_URL_API = process.env.NEXT_PUBLIC_URL_API ?? "";

export const api = (input: string | URL, init?: RequestInit): Promise<Response> => {
  const token = Cookies.get("token");
  const url = new URL(input, BASE_URL_API);

	return fetch(url, {
		...init,
		headers: {
      ...init?.headers,
			"Content-Type": "application/json",
      "Authorization": token? `Bearer ${token}`: "",
		}
	});
};