 composant/medecin
import PatientCard from "@/components/PatientCard";

import StatCard from "@/components/StatCard";
 main

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
 composant/medecin
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        SénSanté
      </h1>
      <p className="text-gray-600 mb-8">
        Assistant de santé communautaire avec IA
      </p>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Membres
      </h2>
      <PatientCard />

      
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        SénSanté
      </h1>

      <p className="text-gray-600 mb-8">
        Assistant de santé communautaire avec IA
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Tableau de bord
      </h2>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        <StatCard 
          titre="Patients" 
          valeur={127} 
          unite="enregistrés" 
          couleur="border-teal-500" 
        />

        <StatCard 
          titre="Consultations" 
          valeur={43} 
          unite="ce mois" 
          couleur="border-orange-500" 
        />

        <StatCard 
          titre="Alertes IA" 
          valeur={8} 
          unite="urgentes" 
          couleur="border-red-500" 
        />

      </div>

      <p className="text-xs text-gray-400 italic">
        Ceci n’est pas un outil médical. Consultez un professionnel de santé.
      </p>

 main
    </main>
  );
}