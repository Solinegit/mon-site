# Fonctions anonymes, fonctions fléchées, lambdas

vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ':include :type=code typescript')

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