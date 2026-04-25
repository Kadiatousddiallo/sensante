import PatientCard from "@/components/PatientCard";
import ConsultationCard from "@/components/ConsultationCard";
import AlerteIA from "@/components/AlerteIA";
import StatCard from "@/components/StatCard";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Aperçu Général
        </h2>
        <LoginButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <StatCard titre="Patients" valeur={127} unite="enregistrés" couleur="border-teal-500" />
        <StatCard titre="Consultations" valeur={43} unite="ce mois" couleur="border-orange-500" />
        <StatCard titre="Alertes IA" valeur={8} unite="urgentes" couleur="border-red-500" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-teal-500 rounded-full inline-block"></span>
            Derniers patients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <PatientCard nom="Aminata Sow" region="Dakar" age={34} sexe="F" />
            <PatientCard nom="Ibrahima Ba" region="Thiès" age={45} sexe="M" />
            <PatientCard nom="Awa Diallo" region="Saint-Louis" age={28} sexe="F" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-orange-400 rounded-full inline-block"></span>
            Activité Récente
          </h2>
          <div className="space-y-6">
            <ConsultationCard patient="Aminata Sow" date="18 mars 2025" symptomes="Fièvre, toux, fatigue" statut="termine" />
            <AlerteIA diagnostic="Suspicion de paludisme. Orientation recommandée." confiance={78} niveau="urgent" />
          </div>
        </div>
      </div>
    </div>
  );
}
