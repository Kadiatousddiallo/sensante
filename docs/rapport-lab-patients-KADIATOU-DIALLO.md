# Rapport Individuel — Lab Patients : CRUD avec Prisma

**Ingénierie des Processus de Développement Logiciel 1**
**Licence 3 GLSI — 2025–2026**
**École Supérieure Polytechnique — UCAD**

---

| | |
|---|---|
| **Nom** | DIALLO |
| **Prénom** | Kadiatou S. |
| **Rôle** | Le Gardien |
| **Lab** | Lab Patients — CRUD avec Prisma |
| **Tag** | v0.2 |
| **Date** | 28 avril 2026 |
| **Responsable** | Dr. El Hadji Bassirou TOURÉ |

---

## 1. Ce que j'ai fait

En tant que **Gardien**, j'ai été le responsable principal de ce lab. Mon rôle était d'implémenter le **CRUD Patients** — la fondation de l'application SénSanté. Sans patients, pas de consultations, pas de diagnostic IA.

### Fichiers créés et modifiés

| Fichier | Action | Description |
|---------|--------|-------------|
| `prisma/schema.prisma` | Créé | Définition du modèle `Patient` avec tous les champs (nom, prénom, dateNaissance, sexe, téléphone, adresse, région, timestamps) |
| `prisma.config.ts` | Créé | Configuration Prisma 7 avec la datasource URL vers PostgreSQL |
| `.env` | Créé | Variables d'environnement (DATABASE_URL pour PostgreSQL) |
| `src/lib/prisma.ts` | Créé | Singleton PrismaClient avec le driver adapter `@prisma/adapter-pg` pour éviter la saturation des connexions lors du Hot Reload |
| `src/app/api/patients/route.ts` | Créé | API Routes GET (lister les patients) et POST (créer un patient) avec gestion d'erreurs try/catch |
| `src/components/PatientForm.tsx` | Créé | Formulaire React interactif pour enregistrer un nouveau patient, avec les 14 régions du Sénégal |
| `src/app/patients/page.tsx` | Modifié | Remplacement des données en dur par des données dynamiques depuis PostgreSQL via l'API |

### Packages installés

- `prisma` (devDependency) — ORM pour la gestion du schéma et les migrations
- `@prisma/client` — Client Prisma pour interroger la base de données en JavaScript
- `@prisma/adapter-pg` + `pg` + `@types/pg` — Driver adapter PostgreSQL (requis par Prisma 7)
- `dotenv` — Chargement des variables d'environnement

### Fonctionnalités implémentées

1. **API Route GET** `/api/patients` — Retourne la liste de tous les patients triés par date de création décroissante
2. **API Route POST** `/api/patients` — Crée un nouveau patient dans la base de données PostgreSQL
3. **Formulaire de création** — Champs : Nom, Prénom, Date de naissance, Sexe, Téléphone (optionnel), Région (14 régions du Sénégal), Adresse (optionnel)
4. **Liste dynamique** — Affichage des patients sous forme de cartes avec calcul automatique de l'âge
5. **Rafraîchissement automatique** — Après la création d'un patient, la liste se met à jour instantanément via le callback `onSuccess`

---

## 2. Les difficultés rencontrées

### 2.1 Docker Desktop ne démarre pas

La première difficulté majeure a été que **Docker Desktop refusait de démarrer** sur ma machine. Le `docker-compose.yml` configurait un conteneur PostgreSQL, mais impossible de le lancer.

### 2.2 Prisma 7 — Changements majeurs par rapport aux versions précédentes

La version de Prisma installée (v7.8.0) est très différente des tutoriels habituels :

- **Plus de `url` dans `schema.prisma`** : Prisma 7 exige que l'URL de connexion soit définie dans `prisma.config.ts` et non plus dans le bloc `datasource` du schéma.
- **Driver adapter obligatoire** : `new PrismaClient()` sans arguments ne fonctionne plus. Il faut passer un `adapter` (comme `@prisma/adapter-pg`) dans le constructeur.
- **`prisma migrate dev` échoue** avec le format `prisma+postgres://` — mais `prisma db push` fonctionne.

### 2.3 Événement React null après `await`

Après la soumission du formulaire, l'appel `e.currentTarget.reset()` provoquait une erreur `TypeError: Cannot read properties of null`. Cela est dû au fait que React recycle les événements synthétiques après qu'un handler ait cédé le contrôle (après un `await`).

---

## 3. Comment je les ai résolues

### 3.1 Solution Docker → Prisma Dev Server

Au lieu de Docker, j'ai utilisé la commande **`npx prisma dev`** qui lance un serveur PostgreSQL local intégré, sans avoir besoin de Docker. C'est une fonctionnalité de Prisma 7.

```bash
npx prisma dev
# → Your local Prisma Postgres server default is now running 👍
# → DATABASE_URL="postgres://postgres:postgres@localhost:51214/..."
```

Puis j'ai synchronisé le schéma avec `npx prisma db push` au lieu de `prisma migrate dev`.

### 3.2 Solution Prisma 7 — Adapter Pattern

J'ai installé le driver adapter PostgreSQL et configuré le PrismaClient avec :

```typescript
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
```

### 3.3 Solution événement React

J'ai sauvegardé la référence au formulaire **avant** l'appel asynchrone :

```typescript
const form = e.currentTarget;  // ← sauvegarder AVANT le await
// ... await fetch(...)
form.reset();  // ← utiliser la référence sauvegardée
```

---

## 4. Ce que j'ai appris

### 4.1 Le flux des données dans une application web moderne

```
Navigateur → fetch("/api/patients") → API Route → Prisma → PostgreSQL
                                            ↓
Navigateur ← JSON ← Response.json() ← résultat SQL
```

J'ai compris concrètement comment les données circulent du navigateur jusqu'à la base de données et reviennent sous forme de JSON.

### 4.2 CRUD et API REST

J'ai appris les **4 opérations fondamentales** (Create, Read, Update, Delete) et leur correspondance avec les méthodes HTTP :

| Opération | HTTP | Prisma | SQL généré |
|-----------|------|--------|------------|
| Create | POST | `prisma.patient.create()` | INSERT INTO |
| Read | GET | `prisma.patient.findMany()` | SELECT * |
| Update | PUT | `prisma.patient.update()` | UPDATE SET |
| Delete | DELETE | `prisma.patient.delete()` | DELETE FROM |

### 4.3 Prisma ORM

- Prisma traduit automatiquement les appels JavaScript en requêtes SQL
- Le schéma Prisma définit la structure de la base de données
- `prisma db push` synchronise le schéma avec la base
- `prisma generate` génère le client typé

### 4.4 Hooks React

- **`useState`** : créer des variables réactives (patients, loading)
- **`useEffect`** : charger les données au montage du composant (équivalent de `componentDidMount`)
- **`FormData`** : extraire les valeurs du formulaire côté client

### 4.5 Gestion des erreurs

- Les blocs `try/catch` dans les API Routes protègent contre les erreurs de base de données
- Les événements React synthétiques ne sont pas fiables après un `await` — il faut sauvegarder les références

---

## Preuve de fonctionnement

Capture d'écran de la page Patients avec 3 patients enregistrés depuis le formulaire :

![Capture d'écran — Page Patients avec 3 patients](capture-patients.png)

**Patients créés :**
1. **Aminata Sow** — Femme, Dakar, née le 15/03/1992
2. **Ibrahima Ba** — Homme, Thiès, né le 22/07/1981
3. **Awa Diallo** — Femme, Saint-Louis, née le 05/11/1998

---

*Rapport rédigé par Kadiatou S. Diallo — Le Gardien*
*SénSanté — Tag v0.2 ✓*
