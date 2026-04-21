 import styles from "./page.module.css";
import PatientCard from "../components/PatientCard";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className="text-center">
          <h1 className={`text-5xl font-bold text-teal-700 mb-4 ${styles.title}`}>
            SénSanté
          </h1>
          <p className={`text-xl text-gray-600 mb-8 ${styles.subtitle}`}>
            Assistant de santé communautaire avec IA
          </p>
        </div>
      </header>

      {/* STAT CARDS */}
      <section className={styles.section}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Tableau de bord
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
            titre="Alertes IA" 
            valeur={8} 
            unite="urgentes" 
            couleur="border-red-500" 
          />
        </div>
      </section>

      {/* PATIENT LIST */}
      <section className={styles.section}>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Patients Recents</h2>
        <div className={`${styles.grid} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
          <div className={styles.cardWrap}>
            <PatientCard nom="Boubacar Bathily" region="Dakar" age={21} sexe="M" />
          </div>
          <div className={styles.cardWrap}>
            <PatientCard nom="Mamadou Ndiaye" region="Thiès" age={41} sexe="M" />
          </div>
          <div className={styles.cardWrap}>
            <PatientCard nom="Fatou Sow" region="Saint-Louis" age={27} sexe="F" />
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className={`text-sm text-gray-400 italic ${styles.disclaimer}`}>
          Ceci n'est pas un outil médical. Consultez un professionnel de santé.
        </p>
      </footer>
    </main>
  );
}