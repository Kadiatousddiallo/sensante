<<<<<<< HEAD
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
      ? "bg-pink-100 text-pink-700"
      : "bg-blue-100 text-blue-700";
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500 transition-transform hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">
          {nom}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full ${badgeColor}`}>
          {sexe === "F" ? "Femme" : "Homme"}
        </span>
      </div>
      <p className="text-gray-600 mt-1">
        {region} — {age} ans
      </p>
=======
export default function PatientCard() {
  // CORRECTION : Les textes doivent être entre guillemets ""
  const nom = "Kadiatou Sadio Diallo";
  const fonction = "Architecte";
  const projet = "SénSanté"; // Ajout des guillemets ici
  const groupe = "Groupe 6"; // Ajout de ton numéro de groupe

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
      <h3 className="text-lg font-bold text-gray-800">{nom}</h3>
      <p className="text-teal-600 font-medium">{fonction}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-gray-600 text-sm">Projet : {projet}</p>
        <p className="text-gray-500 text-xs mt-1 font-semibold italic">
          {groupe}
        </p>
      </div>
>>>>>>> origin/composant/architecte
    </div>
  );
}