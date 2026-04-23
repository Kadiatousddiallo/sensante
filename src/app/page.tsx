import styles from "./page.module.css";
import PatientCard from "@/components/PatientCard";
import StatCard from "@/components/StatCard";
import AlerteIA from "@/components/AlerteIA";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HEADER (Bouclier + Architecte) */}
      <header className={`${styles.header} flex justify-between items-center bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-sm mb-12`}>
        <div>
          <h1 className={`text-4xl font-bold text-teal-800 ${styles.title}`}>
            SénSanté
          </h1>
          <p className={`text-sm text-gray-600 ${styles.subtitle}`}>
            Assistant de santé communautaire avec IA
          </p>
        </div>
        <LoginButton />
      </header>

      {/* STATS SECTION (Medecin) */}
      <section className={`${styles.section} mb-12`}>
        <h2 className="text-xl font-semibold text-teal-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
          Tableau de bord
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard titre="Patients" valeur={127} unite="total enregistrés" couleur="border-teal-500" />
          <StatCard titre="Consultations" valeur={43} unite="ce mois-ci" couleur="border-blue-500" />
          <StatCard titre="Alertes IA" valeur={12} unite="urgences détectées" couleur="border-orange-500" />
        </div>
      </section>

      {/* AI ALERTS SECTION (Oracle) */}
      <section className={`${styles.section} mb-12`}>
        <h2 className="text-xl font-semibold text-teal-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
          Alertes Intelligence Artificielle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AlerteIA diagnostic="Suspicion de paludisme" confiance={85} niveau="urgent" />
          <AlerteIA diagnostic="Contrôle de routine prénatal" confiance={92} niveau="faible" />
        </div>
      </section>

      {/* PATIENTS SECTION (Gardien) */}
      <section className={`${styles.section} mb-16`}>
        <h2 className="text-xl font-semibold text-teal-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
          Suivi des Patients
        </h2>
        <div className={`${styles.grid} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          <div className={styles.cardWrap}>
            <PatientCard nom="Boubacar Bathily" region="Dakar" age={21} sexe="M" />
          </div>
          <div className={styles.cardWrap}>
            <PatientCard nom="Fatou Sow" region="Saint-Louis" age={27} sexe="F" />
          </div>
          <div className={styles.cardWrap}>
            <PatientCard nom="Mamadou Ndiaye" region="Thiès" age={41} sexe="M" />
          </div>
          <div className={styles.cardWrap}>
            <PatientCard nom="Amina Diallo" region="Ziguinchor" age={34} sexe="F" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto pt-8 border-t border-teal-100 text-center">
        <p className={`text-sm text-gray-400 italic ${styles.disclaimer}`}>
          Ceci n'est pas un outil médical. Consultez systématiquement un professionnel de santé certifié.
        </p>
        <p className="mt-2 text-xs text-teal-600/50 font-medium">
          SénSanté Unified Platform v1.0
        </p>
      </footer>
    </main>
  );
}