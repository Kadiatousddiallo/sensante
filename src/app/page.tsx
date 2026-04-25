import PatientCard from "@/components/PatientCard";
import ConsultationCard from "@/components/ConsultationCard";
import AlerteIA from "@/components/AlerteIA";
import StatCard from "@/components/StatCard";
import LoginButton from "@/components/LoginButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500 py-4">
      
      {/* EN-TÊTE TABLEAU DE BORD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tableau de bord
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Bienvenue sur l'espace d'administration et de gestion communautaire
          </p>
        </div>
        <LoginButton />
      </div>

      {/* STATISTIQUES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <StatCard titre="Patients" valeur={127} unite="Inscrits globaux" couleur="border-teal-500" />
        <StatCard titre="Consultations" valeur={43} unite="Réalisées ce mois-ci" couleur="border-orange-500" />
        <StatCard titre="Alertes IA" valeur={8} unite="Dossiers à haut risque" couleur="border-rose-500" />
      </div>

      {/* COLONNES PRINCIPALES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* COLONNE DE GAUCHE : PATIENTS */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-6 bg-teal-500 rounded-full inline-block"></span>
              Derniers patients enregistrés
            </h2>
            <Link href="/patients" className="text-sm font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 transition-colors">
              Voir tout <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            <PatientCard nom="Aminata Sow" region="Dakar — Parcelles" age={34} sexe="F" />
            <PatientCard nom="Ibrahima Ba" region="Thiès — Mbour" age={45} sexe="M" />
            <PatientCard nom="Awa Diallo" region="Saint-Louis — Ndar" age={28} sexe="F" />
            <PatientCard nom="Cheikh Fall" region="Ziguinchor — Bignona" age={52} sexe="M" />
          </div>
        </div>

        {/* COLONNE DE DROITE : ACTIVITÉ */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-400 rounded-full inline-block"></span>
              Fil d'activité
            </h2>
          </div>
          
          <div className="space-y-6 flex-1">
            <ConsultationCard 
              patient="Aminata Sow" 
              date="Aujourd'hui, 09:30" 
              symptomes="Fièvre élevée (39°C), courbatures, fatigue générale" 
              statut="termine" 
            />
            <AlerteIA 
              diagnostic="Suspicion de paludisme sévère. Tests de diagnostic rapide (TDR) recommandés en urgence." 
              confiance={89} 
              niveau="urgent" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
