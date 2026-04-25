interface PatientCardProps {
  nom: string;
  region: string;
  age: number;
  sexe: "M" | "F";
}
export default function PatientCard({
  nom,
  region,
  age,
  sexe,
}: PatientCardProps) {
  const badgeColor =
    sexe === "F"
      ? "bg-pink-50 text-pink-700 border-pink-200"
      : "bg-blue-50 text-blue-700 border-blue-200";
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800">{nom}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badgeColor}`}>
          {sexe === "F" ? "Femme" : "Homme"}
        </span>
      </div>
      <p className="text-slate-500 mt-1">{region} — {age} ans</p>
    </div>
  );
}
