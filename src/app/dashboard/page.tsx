import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500 slide-in-from-bottom-4">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8 tracking-tight">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          titre="Alertes"
          valeur={8}
          unite="urgentes"
          couleur="border-red-500"
        />
      </div>
    </div>
  );
}