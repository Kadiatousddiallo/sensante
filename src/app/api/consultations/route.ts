import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const consultations = await prisma.consultation.findMany({
    include: { patient: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(consultations);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const { patientId, symptomes, notes } = body;

  const consultation = await prisma.consultation.create({
    data: { patientId, symptomes, notes },
    include: { patient: true },
  });

  return NextResponse.json(consultation);
}
