
import { getSession, updateSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const rotateToken = await updateSession(request);

  if (!rotateToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const session = await getSession();

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.redirect(new URL('/forum', request.url));
}

export const config = {
  matcher: ['/login', '/logout'],
};

