# Le JSON : JavaScript Object Notation

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ':include :type=code typescript')

ainsi que le code source de `deezerOffline.ts` que voici

[src/deezerOffline.ts](src/deezerOffline.ts ':include :type=code typescript')

Remarquez quand dans tscconfig.json, nous avons ajouté src/deezerOffline.ts dans la liste des fichiers à transpiler:

[src/tsconfig.json](src/tsconfig.json ':include :type=code json')

Changez dans le script dans le fichier `index.html` en remplaçant `app.js` par `deezerOffline.js` et vérifiez que tout fonctionne correctement pour tester le deuxième script.


# Exercice

1. Créez une interface `IUser` qui représente un utilisateur avec les propriétés `id`, `name`, `age`, et un tableau de scores `scores` (qui sont des nombres entiers) et les méthodes `getMaxScore` et `getAverageScore`.
2. Créez une classe `User` qui implémente `IUser`
3. Créez trois instances de `User`.
4. Créez un tableau contenant des `IUser` (attention c'est bien des `IUser` et non des `User`) et mettez-y les trois instances de `User` que vous avez créées.
5. Créez une fonction `serializeUsers` qui sérialise un tableau de `IUser` en une chaîne JSON. Appelez cette fonction avec le tableau que vous avez créé à l'étape 4 et affichez le résultat dans la console.
6. Créez une fonction `deserializeUsers` qui prend une chaîne JSON et retourne un tableau de `IUser`. Appelez cette fonction avec le résultat de la fonction `serializeUsers` et affichez le résultat dans la console.
7. Affichez le nom du deuxième utilisation du tableau désérialisé ainsi que son score le plus élevé et son score moyen.