# Plan — Formulaire de Consultation

## Objectif
Permettre au médecin d'enregistrer une consultation liée à un patient.

## Champs du formulaire de consultation

| Champ | Type | Obligatoire | Description |
|---|---|---|---|
| patientId | number | ✅ | Référence au patient concerné |
| dateConsultation | date | ✅ | Date de la consultation |
| motif | string | ✅ | Raison de la visite (ex: fièvre, douleur...) |
| symptomes | text (long) | ✅ | Description détaillée des symptômes |
| diagnostic | text | ✅ | Diagnostic posé par le médecin |
| traitement | text | ✅ | Traitement prescrit |
| notes | text | ❌ | Observations supplémentaires |
| prochainRdv | date | ❌ | Date du prochain rendez-vous |

## Format pour les symptômes
- Champ textarea (texte libre) pour permettre une description complète
- Exemple : "Fièvre à 39°C depuis 2 jours, maux de tête, fatigue"

## Modèle Prisma envisagé

```prisma
model Consultation {
  id               Int      @id @default(autoincrement())
  patientId        Int
  dateConsultation DateTime
  motif            String
  symptomes        String
  diagnostic       String
  traitement       String
  notes            String?
  prochainRdv      DateTime?
  createdAt        DateTime @default(now())
  patient          Patient  @relation(fields: [patientId], references: [id])
}
```

## Lien avec le formulaire React
- Le formulaire sera un composant `ConsultationForm.tsx`
- Il appellera `POST /api/consultations`
- Il sera accessible depuis la fiche d'un patient

## Questions ouvertes
- Faut-il une liste déroulante pour les motifs fréquents ?
- Doit-on gérer plusieurs consultations par patient ?