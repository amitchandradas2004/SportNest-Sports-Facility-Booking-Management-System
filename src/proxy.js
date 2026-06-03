import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import next from "next";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // if (session) {
  //   next();
  // }
}

export const config = {
  matcher: [
    "/myBookings",
    "/addFacility",
    "/allFacilities/:path",
    "/manageFacilities",
  ],
};
