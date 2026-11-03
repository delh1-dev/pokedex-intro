# Pokedex.intro

- Installer les dépendances : npm install
- Lancer le serveur de développement : npm run dev
- Vérifier le code avec Biome : npm run check / npm run check:fix

# Étapes du projet

- création du projet avec Vite (React/TypeScript/Biome)
- création du dépôt et envoi de la branche main.
- création de PokemonCard, qui affiche une image et un nom dans une balise figure.
- utilisation d'un ternaire pour afficher « ??? » quand un Pokémon (Mew) n'a pas d'image.
- Pokémon est défini dans App et passé à PokemonCard via une prop pokemon.
- les props sont typées avec un type PokemonCardProps
- ajout de useState pour mémoriser le nom du Pokémon affiché, avec deux boutons (bulbasaur/mew)

Chaque étape a été développée sur sa propre branche Git (component-1, components-2, props.1, props.2).

# Étapes 7

- créé une nouvelle branche appelée rendering-list
- J’ai ajouté la méthode map pour afficher la liste Pkm
- ajouté les attributs key, type et onClick

# Étapes 8

- crée un fichier PokemoCard.module.css pour le style
- importer fichier avec styles. PokemonCard.tsx et dans App.tsx
- remplacer les className per styles..

# Étapes 9

- crée le composant NavBar.
- Déplace les boutons dans NavBar
- Utilise les props
- Supprime les boutons de App

# # Étapes 10

- utiliser le hook useEffect pour message "hello pokemon trainer"
- détecte lorsque le Pokémon sélectionné devient "pikachu"
- alerte avec le message "pika pikachu !!!" sans hook useEffect

# Difficultés rencontrées

la mise à jour du state est asynchrone. Juste après avoir appelé la fonction de mise à jour, la valeur lue était encore l'ancienne, ce qui donnait un affichage qui n'était pas à jour.
placer correctement les parenthèses, les crochets et les accolades.....

étape 7
placer correctement les parenthèses, les crochets et les accolades.....

étape 8
placer correctement les parenthèses, les crochets et les accolades.....
j'ai eu du mal avec la syntaxe des className et des imports

étape 9
utiliser les props pour transmettre les données entre App et NavBar
placer correctement les parenthèses, les crochets et les accolades

étape 10
la logique du onClick avec la condition pour Pikachu
placer correctement les parenthèses, les crochets et les accolades......
