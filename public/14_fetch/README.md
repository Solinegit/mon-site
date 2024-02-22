# FETCH en typescript

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/14_fetch/README.md)

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ':include :type=code typescript')

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partie de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice Création d'un service de recherche d'adresses en France

Objectif : Créer une application simple qui utilise l'API de recherche d'adresses en France

documentation de l'API : https://adresse.data.gouv.fr/api-doc/adresse

exemple de requête : https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&limit=5

D'après la documentation, le retour est est un geojson FeatureCollection respectant la spec GeoCodeJSON

1. Créez une interface `Address` pour représenter un résultat de recherche d'adresse, nous sommes intéressés par le nom de la ville, le code postal, le nom de la rue, le numéro, le contexte (numéro du département, nom du département et de la région) ainsi que la latitude et la longitude. Cette interface doit donc contenir les propriétés suivantes : `city`, `postcode`, `street`, `housenumber`, `context`, `lat` et `lon`. Attention car ces propriétés ne sont pas directement accessibles à la racine de l'objet retourné par l'API, vous devrez les extraire du champ `properties` de chaque objet `Feature` du tableau `features` retourné par l'API.
2. Créez une nouvelle classe `AddressService` avec une méthode `searchAddress` qui doit accepter deux paramètres : `query` (une chaîne de caractères représentant l'adresse à rechercher) et `limit` (un nombre entier représentant le nombre maximum de résultats à retourner). La méthode `searchAddress` doit retourner une promesse (`Promise`) qui se résout avec les résultats de la recherche d'adresses.
3. Faites en sorte que la `query` soit encodée pour être utilisée dans une URL, c'est à dire que les espaces et autres caractères spéciaux soient encodés en général avec des pourcentages. Par exemple, la chaîne "8 bd du port" doit être transformée en "8%20bd%20du%20port" pour être utilisée dans une URL. Vous pouvez utiliser la fonction prédéfinie `encodeURIComponent` pour cela.
4. Utilisez l'API `fetch` pour faire une requête GET à l'URL https://api-adresse.data.gouv.fr/search/. Ajoutez les paramètres `q` et `limit` à l'URL avec les valeurs fournies.
5. Créez une instance de `AddressService` et utilisez-la pour rechercher une adresse avec la chaine "8 bd du port". Affichez les résultats dans la console et affichez-les aussi sur la page web, en particulier les propriétés `city`, `postcode`, `street`, `housenumber`, `context`, `lat` et `lon` de chaque résultat. Vous pouvez utiliser une liste HTML pour afficher les résultats.
6. Gérez les erreurs qui peuvent survenir lors de la réalisation de la requête à l'API.