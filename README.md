echo '# SénSanté' > README.md
echo '' >> README.md
echo 'Assistant de santé communautaire avec IA.' >> README.md
echo '' >> README.md
echo '## Stack technique ' >> README.md
echo '- Next.js 14 (App Router)' >> README.md
echo '- Tailwind CSS' >> README.md
echo '- Prisma + PostgreSQL ' >> README.md
echo '- Groq API (Llama 3)' >> README.md
echo '- NextAuth.js' >> README.md
echo '- Docker Compose ' >> README.md
echo '' >> README.md
echo '## Installation ' >> README.md
echo '```bash' >> README.md
echo 'npm install ' >> README.md
echo 'cp .env.example .env # puis remplir les valeurs ' >> README.md
echo 'npx prisma db push' >> README.md
echo 'npm run dev' >> README.md
echo '```' >> README.md
echo '' >> README.md
echo '## Équipe ' >> README.md
echo 'Licence 3 GLSI - ESP/UCAD - 2025-2026' >> README.md
## Authentification — v0.3

Copier `.env.example` vers `.env` :
```bash
cp .env.example .env
```
Générer un secret :
```bash
openssl rand -base64 32
```
Coller le résultat dans `NEXTAUTH_SECRET`. Ne jamais committer `.env`.
