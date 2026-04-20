import styles from "./page.module.css";
import PatientCard from "../components/PatientCard";

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
      <section className={styles.section}>
        <h2 className="text-xl font-semibold text-slate-900">Patients</h2>
        <div
          className={`${styles.grid} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`}
        >
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
      <p className={`text-sm text-gray-400 italic text-center ${styles.disclaimer}`}>
        Ceci n'est pas un outil médical. Consultez un professionnel de santé.
      </p>
    </main>
  );
}