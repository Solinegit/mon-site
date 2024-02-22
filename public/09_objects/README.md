# Les objets en TypeScript: héritage, polymorphisme, interfaces, classes abstraites

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/09_objects/README.md)

Ce code introduit des concepts de programmation orientée objet tels que les classes, les interfaces, l'héritage et le polymorphisme. Voici une explication de ces concepts tels qu'ils sont utilisés dans ce code :

- Classes et Héritage : Dans ce code, nous avons deux classes, `User` et `Admin`, qui héritent de la classe `Person`. C'est ce qu'on appelle l'héritage, qui est un mécanisme permettant à une classe de gagner des propriétés et des méthodes d'une autre classe. Ici, `User` et `Admin` héritent de `Person`, ce qui signifie qu'ils ont accès aux propriétés `name` et `age` ainsi qu'à toute méthode définie dans `Person`.
- Polymorphisme : Le polymorphisme est un concept qui permet à une méthode d'avoir de nombreuses formes. Dans ce code, la méthode `logPerson()` est un exemple de polymorphisme. Bien qu'elle soit définie dans la classe `Person`, elle peut être appelée sur des instances de `User` et `Admin` grâce à l'héritage. De plus, si `User` ou `Admin` redéfinissait `logPerson()`, cette nouvelle définition serait utilisée à la place lors de l'appel de la méthode sur une instance de ces classes.
- Interfaces : L'interface `PersonInterface` est définie avec une méthode `logPerson()`. Cette interface est utilisée comme un contrat pour la classe `Person`, ce qui signifie que toute classe qui implémente `PersonInterface` doit fournir une implémentation pour `logPerson()`.
- Classes abstraites : La classe `Person` est définie comme une classe abstraite et implémente l'interface `PersonInterface`. Comme `Person` est une classe abstraite, elle ne peut pas être instanciée directement. Elle définit également la méthode `logPerson()` comme une méthode abstraite, ce qui signifie que toute classe qui hérite de `Person` doit fournir sa propre implémentation de `logPerson()`.

Vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice

1. Créez une interface `IVehicle` qui définit une méthode `drive` qui renvoie `void`.
2. Créez une classe abstraite `Vehicle` qui implémente `IVehicle` et qui a une propriété `speed` et une méthode abstraite `honk` (qui renvoie `void`) et qui donne l'implémentation de `drive` = affichage de `Driving at ${this.speed} km/h` dans la console.
3. Créez une classe `Car` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Beep beep!" dans la console.
4. Créez une classe `Bicycle` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Ring Ring" dans la console.
5. Créez deux instances de Car et trois de Bicycle, et appelez les méthodes drive et honk sur les cinq instances.
