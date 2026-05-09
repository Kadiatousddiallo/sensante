# Format des données envoyées à l'IA — v0.5

## Champ symptomes

["Fièvre", "Toux", "Fatigue"]

## Prompt envoyé à Groq (Llama 3)

Le patient présente les symptômes suivants : Fièvre, Toux, Fatigue.
Propose un pré-diagnostic et un niveau de confiance (0–100).

## Champs concernés dans Consultation

| Champ | Type | Description |
|---|---|---|
| symptomes | JSON | Symptômes cochés par l'agent |
| diagnosticIa | String | Résultat Groq (null avant v0.5) |
| confiance | Int | Score de confiance % (null avant v0.5) |
| statut | String | en_attente → termine après IA |
