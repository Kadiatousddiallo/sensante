"use client";

import { useEffect, useState } from "react";
import PatientCard from "@/components/PatientCard";
import PatientForm from "@/components/PatientForm";

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  sexe: string;
  telephone: string | null;
  adresse: string | null;
  region: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  async function chargerPatients() {
    const res = await fetch("/api/patients");
    const data = await res.json();
    setPatients(data);
    setLoading(false);
  }

  useEffect(() => {
    chargerPatients();
  }, []);

  function calculerAge(dateNaissance: string): number {
    const naissance = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - naissance.getFullYear();
    const m = today.getMonth() - naissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < naissance.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500 slide-in-from-bottom-4">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8 tracking-tight">
        Patients
      </h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
lab2-complete
=======
>>>>>>> 96c04394d13cc47348744b1b0b4e1cafd8e66ffd

      <PatientForm onSuccess={chargerPatients} />

      <h2 className="text-xl font-semibold text-slate-700 mt-8 mb-4">
        Liste des patients ({patients.length})
      </h2>

      {loading ? (
        <p className="text-slate-500">Chargement...</p>
      ) : patients.length === 0 ? (
        <p className="text-slate-500">
          Aucun patient enregistré.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((p) => (
            <PatientCard
              key={p.id}
              nom={`${p.prenom} ${p.nom}`}
              region={p.region}
              age={calculerAge(p.dateNaissance)}
              sexe={p.sexe as "M" | "F"}
            />
          ))}
        </div>
      )}
<<<<<<< HEAD

>>>>>>> f1efccfc60eac4de1faf9ff78cb52e68378597ab
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((p, i) => (
          <PatientCard key={i} {...p} />
        ))}
      </div>
main
=======
>>>>>>> 96c04394d13cc47348744b1b0b4e1cafd8e66ffd
    </div>
  );
}

