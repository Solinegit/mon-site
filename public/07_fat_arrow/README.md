# Fonctions anonymes, fonctions fléchées, lambdas

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/07_anonymous_functions/README.md)

Dans le code TypeScript ci-dessous, deux types de fonctions fléchées (ou lambdas ou fonctions anonymes) sont utilisés : avec instructions et avec expressions.

Avec instructions :
Dans ce cas, le corps de la fonction est entouré d'accolades {} et contient une série d'instructions. Ces instructions sont exécutées lorsque la fonction est appelée. Ici, la fonction ajouter prend deux nombres en paramètres, les additionne et affiche le résultat dans la console.

Avec expression :
Dans ce cas, le corps de la fonction est une expression simple qui est directement retournée par la fonction. Il n'y a pas de bloc d'instructions entouré de {}. Ici, la fonction multiplier prend aussi deux nombres en paramètres et retourne leur produit.

La principale différence entre les deux est que les fonctions avec instructions peuvent contenir plusieurs lignes de code et ne retournent pas automatiquement une valeur, tandis que les fonctions avec expressions sont plus courtes et retournent directement le résultat de l'expression.

Vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# lecture

19 Fonctions.pdf  partie  4. This et les fonctions fléchées 

# Exercice : Calculatrice simple

Faites une application de calculatrice.

Créez une fonction fléchée **additionner** qui prend deux nombres en paramètres et retourne leur somme. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **soustraire** qui prend deux nombres en paramètres et retourne leur différence. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **multiplier** qui prend deux nombres en paramètres et retourne leur produit. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **diviser** qui prend deux nombres en paramètres et retourne leur quotient. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée calculatrice qui prend trois paramètres : deux nombres et une opération sous forme de chaîne de caractères ("additionner", "soustraire", "multiplier", "diviser"). Cette fonction doit utiliser une instruction pour déterminer quelle opération effectuer, puis appeler la fonction appropriée et afficher le résultat.

Par exemple,

```typescript
calculatrice(5, 3, "additionner");
```

doit afficher "La somme est: 8".
