import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("token");
	const user = request.cookies.get("user");

	const isAuthenticated = token && user;

	if (
		!isAuthenticated &&
		(request.nextUrl.pathname.startsWith("/inventory") || request.nextUrl.pathname.startsWith("/interest"))
	) {
		console.log("Não autenticado");
		return NextResponse.redirect(new URL("/auth/signin", request.url));
	}

  if (
		isAuthenticated &&
		(request.nextUrl.pathname.startsWith("/auth/signin") || request.nextUrl.pathname.startsWith("/auth/signup"))
	) {
		return NextResponse.redirect(new URL("/", request.url));
	}


	return NextResponse.next();
}
