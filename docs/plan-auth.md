# Plan d'authentification — Lab Auth (Le Bouclier)

## Objectif
Sécuriser l'application SénSanté avec NextAuth.js :
inscription, connexion, sessions et rôles.

## Étapes prévues

1. Installer NextAuth.js
   - `npm install next-auth`

2. Configurer NextAuth
   - Créer `src/app/api/auth/[...nextauth]/route.ts`
   - Configurer le provider Credentials (email + mot de passe)

3. Connecter à la base de données
   - Ajouter le modèle `User` dans `schema.prisma`
   - Hasher les mots de passe avec `bcrypt`

4. Protéger les routes
   - Utiliser `getServerSession()` pour bloquer les pages non autorisées
   - Rediriger vers `/login` si non connecté

5. Gérer les rôles
   - Rôles prévus : `AGENT`, `MEDECIN`, `ADMIN`
   - Restreindre l'accès selon le rôle

## Ressources
- https://next-auth.js.org/getting-started/introduction
- https://next-auth.js.org/providers/credentials