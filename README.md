# CodeQuest Academy

Application web statique et mobile-first pour apprendre la programmation en pratiquant directement dans le navigateur.

**[Ouvrir CodeQuest Academy](https://kalarma.github.io/CodeQuest-Academy/)**

## Contenu de la V2

- 30 leçons HTML et 30 leçons PHP, du niveau débutant aux premiers concepts avancés.
- Éditeur CodeMirror avec coloration syntaxique, numéros de ligne, indentation et suggestions avec `Tab`.
- Aperçu HTML en direct et validation automatique des objectifs.
- Livre des leçons détaillé, déverrouillage progressif et sélection manuelle des cours accessibles.
- Profils locaux indépendants avec brouillons, XP, niveaux, série quotidienne et succès.
- Export/import d'une sauvegarde JSON pour déplacer les profils entre téléphone et ordinateur.
- Mode **Sprint Révision** : jusqu'à cinq défis choisis uniquement parmi les leçons déjà réussies, avec trois vies, score et récompenses en XP.
- Interface responsive pensée pour un téléphone et son clavier virtuel.

## Sauvegarde et comptes

Les profils sont stockés dans le `localStorage` du navigateur : aucun serveur ni mot de passe n'est nécessaire. Chaque profil garde sa propre progression, ses brouillons et ses statistiques.

Un profil local n'est pas automatiquement synchronisé entre appareils. Utilisez **Profil → Exporter la sauvegarde**, puis **Importer une sauvegarde** sur l'autre appareil. Le format historique de progression est migré automatiquement vers le système de profils V2.

## Utilisation mobile

La barre inférieure permet de passer entre **Cours**, **Éditeur** et **Aperçu**. Dans l'éditeur, la mission et ses trois étapes utiles restent visibles en haut. Quand le clavier virtuel s'ouvre, l'aperçu se replie pour laisser plus de place au code.

Les fenêtres du livre, des profils et du Sprint occupent tout l'écran sur mobile afin que leurs actions restent tactiles et accessibles.

## Architecture

- `index.html` : interface, logique de progression, profils et mode de jeu.
- `lessons-advanced.js` : catalogue modulaire des leçons 16 à 30 de chaque langage.
- Tailwind CSS et CodeMirror 5 sont chargés par CDN ; aucun build n'est requis.

Pour ajouter un langage, ajoutez sa configuration dans `COURSE_CATALOG.languages`, puis des objets de leçon utilisant son identifiant. Chaque leçon possède son contenu pédagogique, son code initial, ses objectifs et ses règles de validation.

## Publier sur GitHub Pages

1. Ouvrez **Settings → Pages** dans le dépôt GitHub.
2. Dans **Build and deployment**, choisissez **Deploy from a branch**.
3. Sélectionnez la branche `main`, le dossier `/ (root)`, puis **Save**.
4. Le site sera publié à l'adresse indiquée en haut de ce README.
