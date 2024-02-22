# Generics

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/11_generics/README.md)

vous devez lire et comprendre le code source de `app.ts` que voici

[src/app.ts](src/app.ts ':include :type=code typescript')

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partie de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Exercice

1. Créez une classe `Queue` qui utilise les génériques. Cette classe doit avoir les méthodes suivantes :
  - `enqueue(element: T)`: Ajoute un élément à la queue.
  - `dequeue()`: Supprime et renvoie l'élément en tête de la queue. Si la queue est vide, cette méthode doit renvoyer undefined.
  - `size()`: Renvoie le nombre d'éléments dans la queue.
2. Créez une instance de `Queue` qui stocke des nombres et une autre qui stocke des chaînes de caractères. Testez les méthodes `enqueue`, `dequeue` et `size` sur ces instances.

Voici un squelette de code pour vous aider à démarrer :

```typescript
class Queue<T> {
    // TODO: Implementez les methodes ici

    enqueue(element: T): void {
        // TODO
    }

    dequeue(): T | undefined {
        // TODO
    }

    size(): number {
        // TODO
    }
}

// Testez votre code ici
let numberQueue = new Queue<number>();
// TODO

let stringQueue = new Queue<string>();
// TODO
```

