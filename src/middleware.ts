import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdminRoute = req.nextUrl.pathname.startsWith("/dashboard");

    // Si route dashboard et pas ADMIN → redirection
    if (isAdminRoute && token?.role !== "ADMIN") {
      return NextResponse.redirect(
        new URL("/unauthorized", req.url)
      );
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // doit être connecté
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/api/stats/:path*"],
};
