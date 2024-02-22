# Fonctions anonymes, fonctions fléchées, lambdas

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/07_anonymous_functions/README.md)

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ':include :type=code typescript')

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partie de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice : Calculatrice simple

Créez une fonction fléchée **additionner** qui prend deux nombres en paramètres et retourne leur somme. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **soustraire** qui prend deux nombres en paramètres et retourne leur différence. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **multiplier** qui prend deux nombres en paramètres et retourne leur produit. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **diviser** qui prend deux nombres en paramètres et retourne leur quotient. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée calculatrice qui prend trois paramètres : deux nombres et une opération sous forme de chaîne de caractères ("additionner", "soustraire", "multiplier", "diviser"). Cette fonction doit utiliser une instruction pour déterminer quelle opération effectuer, puis appeler la fonction appropriée et afficher le résultat.

Par exemple, 

```typescript
calculatrice(5, 3, "additionner")
```

doit afficher "La somme est: 8".