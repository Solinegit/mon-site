# Les objets en TypeScript: héritage, polymorphisme, interfaces, classes abstraites

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ':include :type=code typescript')

# Exercice

1. Créez une interface `IVehicle` qui définit une méthode `drive` qui renvoie `void`.
2. Créez une classe abstraite `Vehicle` qui implémente `IVehicle` et qui a une propriété `speed` et une méthode abstraite `honk` (qui renvoie `void`) et qui donne l'implémentation de `drive` = affichage de `Driving at ${this.speed} km/h` dans la console.
3. Créez une classe `Car` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Beep beep!" dans la console.
4. Créez une classe `Bicycle` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Ring Ring" dans la console.
5. Créez deux instances de Car et trois de Bicycle, et appelez les méthodes drive et honk sur les cinq instances.