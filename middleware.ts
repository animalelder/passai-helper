import { NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request, {
    // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
  });

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Disabling the dashboard middleware during development
  matcher: ["/admin"], // Specify the routes the middleware applies to
};
