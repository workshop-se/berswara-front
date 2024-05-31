import { getSession, updateSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // const session = await getSession();
  // 
  // const { pathname } = request.nextUrl;
  // 
  // if (pathname === '/login' && session) {
  //   return NextResponse.redirect(new URL('/forum', request.url));
  // }
  //
  // if (pathname.startsWith('/forum') && !session) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  //
  return await updateSession(request);
}
