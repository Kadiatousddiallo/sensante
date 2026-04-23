import styles from "./page.module.css";
import PatientCard from "@/components/PatientCard";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-700 mb-4">
          SénSanté
        </h1>
        <p className="text-xl text-gray-600">
          Assistant de santé communautaire avec IA
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Patients
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PatientCard nom="Boubacar Bathily" region="Dakar" age={21} sexe="M" />
          <PatientCard nom="Mamadou Ndiaye" region="Thiès" age={41} sexe="M" />
          <PatientCard nom="Fatou Sow" region="Saint-Louis" age={27} sexe="F" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Tableau de bord
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </section>

      <p className="text-xs text-gray-400 italic text-center">
        Ceci n’est pas un outil médical. Consultez un professionnel de santé.
      </p>

    </main>
  );
}