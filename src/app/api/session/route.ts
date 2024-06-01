import { NextResponse } from 'next/server';
import { updateSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await updateSession();
    if (session) {
      return NextResponse.json(session, { status: 200 });
    } else {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

