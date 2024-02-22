# Async Await

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/13_async_await/README.md)

L'asynchronisme est un concept de programmation qui permet à des opérations de s'exécuter en parallèle sans bloquer le fil d'exécution principal. Cela est particulièrement utile pour des opérations qui prennent du temps, comme les requêtes réseau, les lectures de fichiers, etc.

Une promesse en JavaScript (et donc en TypeScript) est un objet qui représente l'achèvement ou l'échec éventuel d'une opération asynchrone. Une promesse est dans l'un des trois états suivants : en attente (pending), résolue (fulfilled), ou rejetée (rejected). Une fois qu'une promesse est résolue ou rejetée, elle ne peut plus changer d'état.

`async` et `await` sont des mots-clés en JavaScript (et donc en TypeScript) qui permettent de travailler avec des promesses de manière plus lisible et plus facile à comprendre. Une fonction marquée avec le mot-clé `async` retourne toujours une promesse. Le mot-clé `await` ne peut être utilisé que dans une fonction `async` et fait que l'exécution de la fonction est mise en pause jusqu'à ce que la promesse soit résolue ou rejetée.

Dans le code ci-dessous, la fonction `fetchData` est une fonction asynchrone qui utilise la fonction `delay` préalablement définie au dessus. La fonction `delay` est une fonction qui prend un nombre de millisecondes comme argument et retourne une promesse qui se résout après ce nombre de millisecondes. Ceci permet de simuler une opération asynchrone (comme une requête réseau). Lorsque vous appelez `await delay(2000);` dans `fetchData`, l'exécution de `fetchData` est mise en pause pendant 2 secondes, après quoi elle reprend et retourne "Some data". Remarquez que `delay` utilise `setTimeout` (une fonction JavaScript déjà existante qui permet d'exécuter du code après un certain délai, exprimé en millisecondes) pour créer une promesse qui se résout après un certain délai. Cela est nécessaire car `setTimeout` ne retourne pas une promesse, mais `delay` retourne une promesse qui se résout après le délai spécifié. 

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice 1

1. Créez une fonction `calculateSumAsync` qui prend deux nombres comme arguments et retourne une promesse (`Promise`) qui se résout à leur somme après un délai de 3 secondes.
2. Utilisez `async` et `await` pour appeler `calculateSumAsync` dans une autre fonction `printSum`. `printSum` doit afficher le message "Calcul en cours..." avant d'appeler `calculateSumAsync`, puis afficher le résultat une fois qu'il est prêt.

# Exercice 2

1. Créez une fonction `verifyUser` qui prend un nom d'utilisateur et un mot de passe comme arguments. Cette fonction doit retourner une promesse (`Promise`) qui se résout (`resolve`) si le nom d'utilisateur et le mot de passe sont corrects, et se rejette (`reject`) si l'un d'eux est incorrect.
2. Utilisez `then` et `catch` pour gérer la promesse retournée par `verifyUser`. Si la promesse est résolue, affichez un message de bienvenue à l'utilisateur. Si la promesse est rejetée, affichez un message d'erreur.

# Exercice 3

Reprenez les exercices 2 et 3 mais cette fois-ci utilisez des classes (`Calculator` pour l'exercice 1 et `User` pour l'exercice 2). La fonction `calculateSumAsync` doit être une méthode de la classe `Calculator` et la fonction `verifyUser` doit être une méthode de la classe `User`.
