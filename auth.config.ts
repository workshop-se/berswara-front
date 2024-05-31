import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnForum = nextUrl.pathname.startsWith('/forum');
      if (isOnForum) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/forum', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
