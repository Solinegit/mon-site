# Le JSON : JavaScript Object Notation

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/10_json/README.md)

Lisez d'abord https://www.json.org/json-fr.html pour comprendre ce qu'est le JSON.

`JSON.parse(data)` est une fonction en JavaScript qui transforme une chaîne de caractères formatée en JSON en un objet JavaScript. C'est ce qu'on appelle la désérialisation.

La sérialisation est le processus inverse de la désérialisation. Il s'agit de convertir un objet JavaScript en une chaîne de caractères formatée en JSON. C'est ce que fait `JSON.stringify()`.

les interfaces en TypeScript peuvent être utilisées pour faciliter la désérialisation. Lorsque vous utilisez `JSON.parse()`, vous pouvez spécifier une interface pour le résultat, ce qui vous permet d'avoir une vérification de type et une autocomplétion pour l'objet désérialisé.

Par exemple, si vous avez une chaîne JSON qui représente un utilisateur, vous pouvez définir une interface User avec les propriétés attendues :

```typescript
interface User {
  name: string;
  age: number;
}

let jsonString = '{"name":"John","age":30}';
let user: User = JSON.parse(jsonString);
```

Dans cet exemple, `user` est de type `User`, donc vous aurez une vérification de type et une autocomplétion pour les propriétés `name` et `age`.

On peut aussi sélectionner des propriétés en omettant dans l'interface les propriétés non désirées.

Supposons que vous ayez une chaîne JSON qui représente un utilisateur avec plus de propriétés que celles définies dans votre interface :

```typescript
interface User {
    name: string;
}

let jsonString = '{"name":"John","age":30, "city":"New York"}';
let user: User = JSON.parse(jsonString);
```

Dans cet exemple, l'interface `User` ne définit que la propriété `name`. Cependant, la chaîne JSON contient également `age` et `city`. Lorsque vous désérialisez la chaîne JSON en utilisant `JSON.parse()`, TypeScript ne se plaindra pas tant que la chaîne JSON contient au moins les propriétés définies dans l'interface `User`.

Cependant, si vous essayez d'accéder à `user.age` ou `user.city`, TypeScript vous donnera une erreur de compilation car ces propriétés ne sont pas définies dans l'interface `User`. Si vous voulez accéder à ces propriétés, vous devrez les ajouter à l'interface `User`.

On peut aussi sélectionner les propriétés à désérialiser en utilisant un deuxième argument de type fonction fléchée (anonyme) pour `JSON.parse()` comme suit :

```typescript
let jsonString = '{"name":"John","age":30,"city":"New York"}';
let user: User = JSON.parse(jsonString, (key, value) => {
  if (key === 'name' || key === 'age') {
    return value;
  }
});
```

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ":include :type=code typescript")

ainsi que le code source de `deezerOffline.ts` que voici

[src/deezerOffline.ts](src/deezerOffline.ts ":include :type=code typescript")

Remarquez quand dans tscconfig.json, nous avons ajouté src/deezerOffline.ts dans la liste des fichiers à transpiler:

[tsconfig.json](tsconfig.json ":include :type=code json")

Remarquez aussi que dans le fichier `index.html`, nous avons ajouté un lien vers le fichier `deezerOffline.js`:

[index.html](index.html ":include :type=code html")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# lecture

https://www.json.org/json-fr.html

# Exercice

1. Créez une interface `IUser` qui représente un utilisateur avec les propriétés `id`, `name`, `age`, et un tableau de scores `scores` (qui sont des nombres entiers) et les méthodes `getMaxScore` et `getAverageScore`.
2. Créez une classe `User` qui implémente `IUser`
3. Créez trois instances de `User`.
4. Créez un tableau contenant des `IUser` (attention c'est bien des `IUser` et non des `User`) et mettez-y les trois instances de `User` que vous avez créées.
5. Créez une fonction `serializeUsers` qui sérialise un tableau de `IUser` en une chaîne JSON. Appelez cette fonction avec le tableau que vous avez créé à l'étape 4 et affichez le résultat dans la console.
6. Créez une fonction `deserializeUsers` qui prend une chaîne JSON et retourne un tableau de `IUser`. Appelez cette fonction avec le résultat de la fonction `serializeUsers` et affichez le résultat dans la console.
7. Affichez le nom du deuxième utilisateur du tableau désérialisé ainsi que son score le plus élevé et son score moyen.
