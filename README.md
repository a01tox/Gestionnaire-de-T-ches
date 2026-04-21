# Projet - Gestionnaire de Tâches (Application interactive — Manipulation du DOM en JavaScrip)

Dans ce projet, vous allez construire de A à Z un Gestionnaire de Tâches interactif entièrement en JavaScript vanilla — sans aucun framework. L'objectif est de mettre en pratique tous les concepts du DOM vus en cours : sélection d'éléments, création dynamique, gestion des événements, modification de classes et de contenu. L'application permettra à l'utilisateur d'ajouter, cocher et supprimer des tâches, de filtrer la liste, et de voir un compteur mis à jour en temps réel. Tout le rendu sera généré dynamiquement par JavaScript — le HTML initial ne contiendra aucune tâche en dur.

**Ce que vous devez implémenter**

1. **Formulaire d'ajout** Un champ texte et un bouton « Ajouter ». À la soumission, la tâche apparaît dans la liste sans rechargement de la page. Le champ se vide automatiquement. Si le champ est vide, rien ne se passe.
2. **Affichage dynamique des tâches** Chaque tâche est une carte créée par JavaScript (createElement). Elle contient : une checkbox ronde, le texte de la tâche, et un bouton × de suppression. Les tâches initiales (données en dur dans un tableau JS) sont affichées au chargement.
3. **Cocher / Décocher** Un clic sur la checkbox alterne la classe terminee sur la carte. Le texte passe en barré et la carte change de fond. Le compteur de tâches restantes se met à jour instantanément.
4. **Supprimer une tâche** Un clic sur le bouton × supprime la carte du DOM et retire la tâche du tableau de données. Le compteur se recalcule.
5. **Filtres Trois boutons** : Toutes, Actives, Terminées. Le filtre actif est mis en évidence (classe CSS). La liste se met à jour à chaque clic sans rechargement.
6. **Compteur** Un texte en haut affiche le nombre de tâches non terminées, mis à jour après chaque action (ajout, suppression, cochage).

**Contraintes d'interface (UI à respecter)**

Votre application doit respecter les règles visuelles suivantes. Elles font partie de l'évaluation au même titre que le JavaScript. 

- **Palette de couleurs** Fond sombre (#0f0f0f ou équivalent) · Surface des cartes légèrement plus claire · Couleur d'accent vive (lime, cyan ou orange) pour les éléments interactifs actifs.
- **Typographie** Police monospace (Courier New, Fira Code…) pour tout le contenu. Taille de base : 14–16px. Pas de serif ni de sans-serif générique.
- **Formulaire** Le champ de saisie et le bouton sont sur la même ligne (flexbox). Le bouton utilise la couleur d'accent comme fond, texte sombre.
- **Carte de tâche** Checkbox ronde à gauche · texte au centre (flex: 1) · bouton × à droite. Hauteur min. 48px. Bordure fine (1px) sur fond surface.
- **État terminée** Fond légèrement teinté (ex. vert sombre), texte barré, opacité réduite. La checkbox affiche une coche visible.
- **Filtres** Boutons pill (border-radius: 99px). Le filtre actif : bordure + texte couleur d'accent. Les inactifs : muted.
- **Compteur** Affiché dans l'en-tête. Le nombre est mis en évidence (couleur d'accent, bold).
- **Animation** Les nouvelles tâches apparaissent avec une animation d'entrée (fadeIn / slideDown). Transitions CSS sur hover et sur l'état terminée.
