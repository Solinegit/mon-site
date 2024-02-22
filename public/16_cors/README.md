# CORS (Cross-Origin Resource Sharing)

!> **Attention** page en cours de création, vous voyez une version incomplète de la page.

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/16_cors/README.md)

Ce code interagit avec l'API de Deezer pour récupérer et afficher une liste de genres musicaux.

Voici ce que fait chaque partie du code :

La fonction `getGenresFromDeezer` fait une requête à l'API de Deezer pour obtenir une liste de genres musicaux. Elle utilise `fetch` pour faire la requête, puis `await` pour attendre que la promesse renvoyée par `fetch` soit résolue. Ensuite, elle convertit la réponse en JSON et renvoie les données de genre.

La méthode `then` est utilisée pour traiter la promesse renvoyée par `getGenresFromDeezer`. Elle prend une fonction de rappel qui est appelée lorsque la promesse est résolue. Cette fonction de rappel prend la liste des genres et utilise `forEach` pour afficher le nom de chaque genre dans la console.

Ensuite, le même processus est répété, mais cette fois en utilisant une classe `DeezerService`. Cette classe a deux méthodes : `getGenresFromDeezer`, qui fait la même chose que la fonction du même nom, et `displayGenres`, qui récupère les genres de Deezer et les affiche.

Enfin, une instance de `DeezerService` est créée et la méthode `displayGenres` est appelée pour afficher les genres.

Notez que ce code suppose que vous avez un serveur proxy en cours d'exécution sur `localhost:8088` pour contourner les restrictions de la politique de même origine (CORS) imposées par l'API de Deezer.

CORS signifie Cross-Origin Resource Sharing (Partage de ressources entre origines). C'est un mécanisme qui permet à de nombreux ressources (par exemple, les polices, les images, les scripts) sur une page web d'être demandées à un autre domaine que celui du site d'origine.

Par défaut, la politique de même origine (Same-Origin Policy) dans les navigateurs web empêche les requêtes d'accéder à des ressources de différents domaines. Cette politique est une mesure de sécurité importante pour empêcher les attaques de type "Cross-Site Request Forgery" (CSRF).

Cependant, CORS permet aux serveurs de spécifier qui (c'est-à-dire, quels domaines) peut accéder à leurs ressources. Cela se fait en ajoutant des en-têtes HTTP spécifiques qui indiquent quels domaines sont autorisés à accéder aux ressources.

Dans notre exemple, vous devez avoir un serveur proxy en cours d'exécution sur `localhost:8088` pour contourner les restrictions CORS imposées par l'API de Deezer. Cela signifie que l'API de Deezer n'autorise pas les requêtes CORS directes depuis votre domaine (ici votre domaine est localhost, car vous exécutez le code en local), et votre navigateur empêchera ces requêtes. C'est pour contourner la restriction de votre navigateur que nous utilisons un serveur proxy.

Pour pouvoir tester cette application, vous devez d'abord démarrer le proxy CORS, en exécutant la commande suivante :

```terminal
npm start
```

Cette commande utilise npm, le gestionnaire de paquets de Node.js, configuré avec package.json. Dans la configuration de package.json, nous utilisons le package cors.js qui sera téléchargé et installé automatiquement lors de l'exécution de la commande npm start. Nous utilisons ce package dans le fichier `proxycors.js`que vous pouvez consulter ci-dessous. Attention ce fichier est en javascript et non en typescript. Vous n'êtes pas obligé de comprendre son fonctionnement pour le moment.

[proxycors.js](proxycors.js ":include :type=code javascript")

vous devez lire et comprendre le code source de `app.ts` que voici ainsi que vérifier son fonctionnement en démarrant le proxy cors, en transpilant avec `tsc` et en exécutant `index.html` dans votre navigateur.

[src/app.ts](src/app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

