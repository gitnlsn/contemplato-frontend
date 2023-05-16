import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl.clone();
  if (url.pathname === "/") {
    url.pathname = "/hello-nextjs";
    return NextResponse.redirect(url);
  }
};
