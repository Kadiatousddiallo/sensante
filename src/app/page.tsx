import styles from "./page.module.css";
import PatientCard from "@/components/PatientCard";
import StatCard from "@/components/StatCard";
import AlerteIA from "@/components/AlerteIA";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-teal-800 leading-none">SénSanté</h1>
              <p className="text-xs text-gray-500 mt-0.5">Assistant de santé communautaire avec IA</p>
            </div>
          </div>
          <LoginButton />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        {/* HERO */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 text-white shadow-lg">
          <p className="text-xs uppercase tracking-widest text-teal-200 mb-2">Plateforme unifiée</p>
          <h2 className="text-3xl font-bold mb-2">Bienvenue sur SénSanté</h2>
          <p className="text-teal-100 max-w-xl">
            Suivez vos patients, consultez les alertes IA et gérez les consultations depuis un seul tableau de bord.
          </p>
        </section>

        {/* STATS */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-teal-900">Tableau de bord</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StatCard titre="Patients" valeur={127} unite="total enregistrés" couleur="border-teal-500" />
            <StatCard titre="Consultations" valeur={43} unite="ce mois-ci" couleur="border-blue-500" />
            <StatCard titre="Alertes IA" valeur={12} unite="urgences détectées" couleur="border-orange-500" />
          </div>
        </section>

        {/* ALERTES IA */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-orange-400 rounded-full"></span>
              <h2 className="text-lg font-semibold text-teal-900">Alertes Intelligence Artificielle</h2>
            </div>
            <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
              12 actives
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AlerteIA diagnostic="Suspicion de paludisme" confiance={85} niveau="urgent" />
            <AlerteIA diagnostic="Contrôle de routine prénatal" confiance={92} niveau="faible" />
          </div>
        </section>

        {/* PATIENTS */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
              <h2 className="text-lg font-semibold text-teal-900">Suivi des Patients</h2>
            </div>
            <span className="text-xs bg-teal-50 text-teal-600 px-3 py-1 rounded-full font-medium">
              127 enregistrés
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PatientCard nom="Boubacar Bathily" region="Dakar" age={21} sexe="M" />
            <PatientCard nom="Fatou Sow" region="Saint-Louis" age={27} sexe="F" />
            <PatientCard nom="Mamadou Ndiaye" region="Thiès" age={41} sexe="M" />
            <PatientCard nom="Amina Diallo" region="Ziguinchor" age={34} sexe="F" />
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400 italic">
            Ceci n'est pas un outil médical. Consultez systématiquement un professionnel de santé certifié.
          </p>
          <p className="text-xs text-teal-600/60 font-medium">SénSanté Unified Platform v1.0</p>
        </div>
      </footer>

    </main>
  );
}
