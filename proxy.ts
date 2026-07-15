import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/@vite/client') {
    const url = request.nextUrl.clone();
    url.pathname = '/vite-client-stub.js';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/@vite/client'],
};

