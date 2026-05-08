export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Accès refusé
      </h1>
      <p className="text-gray-600">
        Vous devez être administrateur pour accéder au dashboard.
      </p>
      <a href="/" className="mt-6 text-teal-600 underline">
        Retour à l'accueil
      </a>
    </div>
  );
}
