composant/gardien
interface PatientCardProps {
  nom: string;
  region: string;
  age: number;
  sexe: "M" | "F";
}

export default function PatientCard({
  nom, region, age, sexe
}: PatientCardProps) {
  const badgeColor = sexe === "F"
    ? "bg-pink-100 text-pink-700"
    : "bg-blue-100 text-blue-700";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
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

export default function PatientCard() {
composant/medecin
  const nom = "Mame";
  const fonction = "Médecin";
  const groupe = "Groupe 6";

  const nom = "Aminata Sow";
  const region = "Dakar";
  const age = 34;
main

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
      <h3 className="text-lg font-bold text-gray-800">
        {nom}
      </h3>
      <p className="text-gray-600 mt-1">
composant/medecin
        Fonction : {fonction}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        {groupe}
      </p>
    </div>
  );
}

        Région : {region}
      </p>
      <p className="text-gray-500 text-sm mt-1">
 main
      </p>
    </div>
  );
}
 main
