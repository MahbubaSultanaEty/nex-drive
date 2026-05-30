import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

 const pathname = request.nextUrl.pathname;

  const protectedRoutes = [
    "/my-bookings",
    "/add-car",
    "/cars/:path*",
    "/my-added-cars",
    "/profile"
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
    return NextResponse.next();
}
 

 
export const config = {
  matcher: ['/my-bookings', '/my-added-cars', '/add-car', '/cars/:path*', '/profile'],
}