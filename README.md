# IoT - Progressive Web App

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ThibautG/pwa-react-brief.git
cd front
```

### 2. Installer les dépendances

Avoir Node.js (>=18) et npm installés, puis exécuter :

```bash
npm install
```

## Lancement du projet

### Mode développement

```bash
npm run dev
```

Le projet sera accessible à l’adresse :  
http://localhost:5173

## Build et déploiement

### Générer la version de production

```bash
npm run build
```

Le dossier `/dist` sera créé, prêt à être déployé sur un serveur.

### Prévisualiser la build localement

```bash
npm run preview
```

## Structure du projet

```
front/
├── src/                 # Code source principal (React)
├── public/              # Ressources publiques (icônes, manifest, etc.)
├── dev-dist/            # Fichiers de service worker (développement)
├── docs/                # Documentation JSDoc du projet
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances et scripts NPM
```

## Documentation

Une documentation technique (générée via JSDoc) est disponible à l’adresse suivante :  
http://localhost:63342/front/docs/index.html

## Déploiement
Une version déployée du projet est disponible à l'adresse suivante : https://pwa.thibaut.gaudinat.dev-campus.fr/