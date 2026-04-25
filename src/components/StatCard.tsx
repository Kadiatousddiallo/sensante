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
      <p className="text-sm font-medium text-slate-500">{titre}</p>

      <p className="text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
        {valeur}
      </p>

      <p className="text-sm text-slate-400 mt-1 font-medium">{unite}</p>
    </div>
  );
}
