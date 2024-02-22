# HTTP CRUD

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/15_http/README.md)

CRUD signifie Create, Read, Update, Delete. C'est un acronyme qui désigne les quatre opérations de base pour la persistance des données. Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur. Il est utilisé pour le transfert de données sur le World Wide Web. Il est basé sur le modèle requête/réponse. Les requêtes sont envoyées par le client et les réponses sont renvoyées par le serveur. Les requêtes sont généralement des requêtes de type CRUD mais les verbes utilisés sont `GET` (Read), `POST` (Create), `PUT`/`PATCH` (Update) et `DELETE` (Delete); la différence entre `PUT` et `PATCH` est que `PUT` remplace l'objet entier alors que `PATCH` ne remplace que les champs spécifiés. Les réponses sont généralement des réponses de type CRUD mais les codes de statut HTTP sont utilisés pour indiquer le succès ou l'échec de l'opération. Les codes de statut HTTP les plus courants sont `200` (OK), `201` (Created), `204` (No Content), `400` (Bad Request), `404` (Not Found), `500` (Internal Server Error), etc

Attention dans le cas d'un UPDATE avec `PUT` ou `PATCH`, si l'objet à modifier n'existe pas ou n'est pas correctement identifié, le comportement du serveur est indéterminé: il peut créer de nouveaux objets ou renvoyer une erreur, cela dépend du serveur... 

Dans ce TP nous allons démarrer un serveur HTTP et écrire une application client en TypeScript qui va effectuer des opérations CRUD sur ce serveur. Pour cela nous utilisons le projet `json-server` qui est un serveur HTTP qui utilise un fichier JSON comme base de données. Nous avons un début de base de donnée dans le fichier `db.json` qui contient des restaurants et des catégories. Voici le contenu de ce fichier :

[db.json](db.json ":include :type=code json")

Pour démarrer le serveur, il suffit d'installer json-server avec la commande suivante :

```terminal
npm install json-server
```

Puis de démarrer le serveur avec la commande suivante :

```terminal
npx json-server db.json
```

Le serveur est alors démarré sur le port 3000. Vous pouvez accéder à la base de données en utilisant l'URL suivante : http://localhost:3000/api/ (par exemple http://localhost:3000/api/restaurants pour accéder à la liste des restaurants ou http://localhost:3000/api/categories pour accéder à la liste des catégories).

Attention: quand le serveur reçoit des requêtes de type POST, PUT/PATCH ou DELETE, il modifie le fichier `db.json` en conséquence. Il est donc possible que les données soient modifiées ou supprimées. De plus, si vous testez votre programme avec un mécanisme de relance automatique à chaque modification de fichier, il est possible d'avoir une boucle infinie: le serveur modifie le fichier `db.json`, ce qui déclenche une relance du programme, qui envoie une requête au serveur, qui modifie le fichier `db.json`, qui relance le programme etc... Vous devriez désactiver le mécanisme de relance automatique si vous en utilisez un dans ce cas.

Vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ":include :type=code typescript")

Si vous exécutez une deuxième fois le code, les modifications ayant déjà été effectuées,
vous aurez deux problèmes:

1. pour la suppression:
`There was a problem with the fetch operation:  Error: HTTP error! status: 404` : erreur 404 car le restaurant a déjà été supprimé et n'existe plus = introuvable = 404

2. pour la création:
vous aurez en doublon le restaurant "Le Restaurant de la Joie"
avec une nouvelle id
car le serveur json-server ne gère pas les doublons

Pas de problème pour la lecture ou la modification (car on les modifie avec les mêmes données)


remarquez que les requêtes sont asynchrones
et que l'ordre d'exécution n'est pas garanti

remarquez aussi que `restaurantCategories` (qui est une table de relation entre `restaurants` et `categories`) n'est pas du tout géré par ce programme

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice

Modifiez le fichier `app.ts` pour bien gérer les modifications des relations entre les restaurants et les catégories:

- à chaque suppression/modification d'une catégorie, modifiez les `categoryIds` de tous les restaurants qui la contiennent
- à chaque suppression/modification d'un restaurant, modifiez les `restaurantIds` de toutes les catégories qui le contiennent
- à chaque suppression/modification modifiez les relations dans `restaurantCategories`
