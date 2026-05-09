import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const totalPatients = await prisma.patient.count();
  const totalConsultations = await prisma.consultation.count();

  const consultationsTerminees = await prisma.consultation.count({
    where: { statut: "termine" },
  });

  const alertesUrgentes = await prisma.consultation.count({
    where: {
      statut: "termine",
      confiance: { gte: 60 },
      diagnosticIa: { not: null },
    },
  });

  const parRegion = await prisma.patient.groupBy({
    by: ["region"],
    _count: { id: true },
  });

  return NextResponse.json({
    kpi: {
      totalPatients,
      totalConsultations,
      consultationsTerminees,
      alertesUrgentes,
    },
    parRegion,
  });
}