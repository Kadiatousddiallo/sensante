interface StatCardProps {
  titre: string;
  valeur: number;
  unite: string;
  couleur: string;
}

export default function StatCard({
  titre,
  valeur,
  unite,
  couleur
}: StatCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-[3px] ${couleur}`}>
      <p className="text-sm font-semibold text-slate-600">{titre}</p>

      <p className="text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
        {valeur}
      </p>

      <p className="text-sm text-slate-500 mt-1 font-medium">{unite}</p>
    </div>
  );
}
