interface AlerteIAProps {
  diagnostic: string;
  confiance: number;
  niveau: "faible" | "moyen" | "urgent";
}

export default function AlerteIA({
  diagnostic, confiance, niveau
}: AlerteIAProps) {
  const couleurs = {
    faible: "border-emerald-500 bg-emerald-50 text-emerald-800",
    moyen: "border-amber-500 bg-amber-50 text-amber-800",
    urgent: "border-rose-500 bg-rose-50 text-rose-800",
  };

  return (
    <div className={`rounded-2xl p-6 border border-l-[6px] shadow-sm hover:shadow-md transition-all duration-300 ${couleurs[niveau]}`}>
      <h3 className="font-extrabold flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
        Résultat IA
      </h3>
      <p className="mt-3 font-medium opacity-90">{diagnostic}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm font-bold opacity-80 bg-white/40 px-3 py-1 rounded-md">
          Confiance : {confiance}%
        </p>
      </div>
      <p className="text-xs opacity-60 italic mt-3 font-medium">
        Ceci n'est pas un diagnostic médical consigné.
        Consultez un professionnel de santé.
      </p>
    </div>
  );
}
