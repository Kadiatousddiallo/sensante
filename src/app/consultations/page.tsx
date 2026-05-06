"use client";
import { useState, useEffect } from "react";
import DiagnosticIA from "@/components/DiagnosticIA";

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  sexe: string;
  region: string;
  telephone: string | null;
  adresse: string | null;
}

interface Consultation {
  id: number;
  patientId: number;
  symptomes: string[];
  notes: string | null;
  diagnosticIa: string | null;
  confiance: number | null;
  statut: string;
  createdAt: string;
  patient: Patient;
}

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  async function charger() {
    const res = await fetch("/api/consultations");
    if (res.ok) {
      const data = await res.json();
      setConsultations(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    charger();
  }, []);

  if (loading) return <p className="p-8">Chargement...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Consultations</h1>
      {consultations.length === 0 ? (
        <p className="text-gray-500">Aucune consultation pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {consultations.map((c) => (
            <div key={c.id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {c.patient.prenom} {c.patient.nom}
                  </p>
                  <p className="text-sm text-gray-500">
                    {c.patient.region} — {new Date(c.createdAt).toLocaleDateString("fr-FR")}
                  </p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                  c.statut === "termine" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {c.statut}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-600 font-medium">Symptômes :</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {c.symptomes.map((s, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {c.notes && (
                <p className="text-sm text-gray-500 mt-2 italic">Notes : {c.notes}</p>
              )}
              <DiagnosticIA
                consultationId={c.id}
                diagnosticExistant={c.diagnosticIa}
                confianceExistante={c.confiance}
                onDiagnostic={charger}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
