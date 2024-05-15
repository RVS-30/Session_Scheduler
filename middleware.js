import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';
    const token = request.cookies.get("token")?.value || "";

    if (!isPublicPath && !token) {
        
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    // If the path is public and there's no token, allow access
    return NextResponse.next();
}

 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard'],
}