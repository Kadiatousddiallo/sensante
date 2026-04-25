interface ConsultationCardProps {
  patient: string;
  date: string;
  symptomes: string;
  statut: "en_attente" | "termine";
}

export default function ConsultationCard({
  patient, date, symptomes, statut
}: ConsultationCardProps) {
  const statutColor = statut === "termine"
    ? "bg-green-50 text-green-700 border-green-200"
    : "bg-orange-50 text-orange-700 border-orange-200";

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400" />
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-slate-800">
          {patient}
        </h3>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statutColor}`}>
          {statut === "termine" ? "Terminé" : "En attente"}
        </span>
      </div>
      <p className="text-slate-500 text-sm mt-1">{date}</p>
      <p className="text-slate-600 mt-3 bg-slate-50 p-3 rounded-lg text-sm border border-slate-100">{symptomes}</p>
    </div>
  );
}