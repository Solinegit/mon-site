# 05 Html Css 2048

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/05_html_css_2048/README.md)

## micro-projet jeu 2048

Un site important de ressource est celui de MDN (Mozilla Developer Network) :
https://developer.mozilla.org/fr/

Votre but dans ce micro-projet est de développer le jeu 2048 avec des technologies web : HTML/CSS/Typescript.

Créez un dossier pour votre micro-projet, avec tous les fichiers et dossiers
nécessaires: fichiers html, css, .tsconfig et dossier src avec fichier .ts

## Défi 1

EN HTML uniquement: afficher un tableau 4 fois 4 (sans traits ou
bordures) avec des étoiles dans chaque case.

### Test 1

ce test est visuel, il doit y avoir un tableau affiché dans le
navigateur et il est possible de voir la taille 4 \* 4 (par exemple avec
des lignes) avec des étoiles dans chacune des cases.

## Défi 2

En HTML et CSS: afficher un titre en utilisant la balise h1 au
dessus du tableau, faites en sorte que le titre soit de couleur rouge.
Vous devez utiliser le CSS pour configurer la couleur rouge, pas l'HTML,
donc vous devez créer un fichier CSS en plus de votre fichier HTML et
lier ce fichier CSS au fichier HTML.

### Test 2

ce test est visuel, structurel (structure des fichiers), et
fonctionnel (vérification des erreurs dans la console de débogage du
navigateur web). Pour le test visuel, un titre plus gros en rouge doit
apparaître. Pour le test structurel, vérifier qu'il y a au moins deux
fichiers : un de type HTML et un de type CSS, vérifier que les deux
doivent être liés (c'est à dire que le HTML fait référence au CSS - avec
le nom du fichier CSS indiqué dans le fichier HTML). Pour le test
fonctionnel, ouvrez la console de débogage du navigateur et vérifiez
qu'aucune erreur n'apparaisse.

## Défi 3

En TypeScript : écrire une fonction nommée bonjour qui affiche
"bonjour" dans la console de débogage du navigateur. Aidez-vous du
code fourni ci-dessous et complétez la partie //TODO1.

```typescript
function bonjour(): void {
  // TODO1
}
```

### Test 3

créez une fonction testBonjour() qui fait appel à la fonction
bonjour() en complétant //TODO2. La fonction testBonjour() ne doit être
appelée qu'une et une seule fois au tout début du fichier TypeScript. La
fonction bonjour() ne doit être appelée qu'une et une seule fois dans la
fonction testBonjour()

Vérifiez aussi que le fichier HTML est bien lié au fichier javascript
issu de la compilation du fichier TypeScript (par exemple index.js) et
si rien de s'affiche c'est sûrement la source du problème.

Vérifiez qu'un et un seul « bonjour » s'affiche dans la console du
navigateur.

```typescript
function testBonjour(): void {
  // TODO2
}
```

la structure globale de votre code doit donc ressembler à cela :

```typescript
//programme principal :

testBonjour();

function bonjour(): void {
  // TODO1
}

function testBonjour(): void {
  // TODO2
}
```

## Défi 4

Afficher des bordures noires autour des cases du tableau en CSS.
Ne pas modifier l'HTML mais uniquement le CSS pour afficher ces
bordures.

### Test 4

c'est un test visuel uniquement : vérifiez que le tableau
apparaît bien avec des bordures noires visuellement.

## Défi 5

Agrandir les cases du tableau avec une taille fixe en CSS (pas
en HTML). Le tableau doit être confortable pour jouer. Essayez
d'afficher des cases carrées (et non rectangulaires).

### Test 5

test visuel, structurel et fonctionnel : visuellement le
tableau doit avoir des grandes cases carrées et fonctionnellement il ne
doit pas y avoir d'erreurs dans la console, structurellement le fichier
HTML ne doit pas être modifié par rapport au défi précédent.

Ajouter du contenu dans une case (par exemple \*\*\*\*\* au lieu de \*)
et vérifiez que la case reste carrée.

## Défi 6

écrire des fonctions haut() bas() gauche() droit() qui
affichent "haut" "bas" "gauche" "droite" dans la
console lors de l'appui sur les touches directionnelles du clavier.

### Test 6

appuyez plusieurs fois sur les touches directionnelles et
vérifiez que les mots affichés dans la console correspondent aux touches.

## Défi 7

Ajoutez une balise à votre fichier HTML pour afficher un score

```html
<div id="score">0</div>
```

### Test 7

Appuyez ensuite 4 fois sur les touches directionnelles et
vérifiez que le score est bien incrémenté de 4.

## Défi 8

écrire les fonctions ayant pour signature

```typescript
function getCell(i: number, j: number): HTMLTableCellElement | undefined;
function setValue(i: number, j: number, value: number): boolean;
function getValue(i: number, j: number): number;
function isEmpty(i: number, j: number): boolean;
```

qui permettent respectivement de récupérer une case du tableau, de
mettre une valeur dans une case du tableau et de récupérer la valeur
d'une case du tableau ainsi que de savoir si une case est vide ou non.
La fonction getCell renvoie la case du tableau qui est à la ligne
i et à la colonne j ou undefined si i ou j sont en dehors du tableau.
La fonction setValue utilisera getCell pour récupérer la case du tableau
et mettre la valeur value dans la case. La fonction setValue renvoie
true si la valeur a bien été mise dans la case et false sinon
(si i ou j sont en dehors du tableau).
Vous pouvez utiliser la valeur spéciale 0 pour indiquer que la case est
vide. Dans ce cas, la fonction setValue doit mettre une chaîne de
caractères vide dans la case.

### Test 8

testez les fonctions en utilisant la fonction statique assert en combinaison avec l'opérateur typeof. Pour cela utilisez la documentation officielle : https://developer.mozilla.org/fr/docs/Web/API/console/assert_static#assertion et https://www.typescriptlang.org/docs/handbook/2/typeof-types.html et les exemples ici https://www.typescriptlang.org/play#example/assertion-functions

## Défi 9

utilisez l’événement 'DOMContentLoaded' de l'objet window
pour appeler une fonction newGame() qui initialise le jeu 2048.
Pour cela, cette fonction doit choisir deux cases aléatoirement (les
deux cases doivent être différentes), et qui met une valeur 2 dans 85% des
cas et une valeur 4 dans 15% des cas pour une case et la valeur 2 dans
86% des cas et la valeur 4 dans 14% des cas pour l'autre case.
L'utilisation de cet événement permet de s'assurer que le
document HTML est chargé avant d'exécuter le code. Vous trouverez des
informations sur cet événement ici :
https://developer.mozilla.org/fr/docs/Web/API/Document/DOMContentLoaded_event
Cette fonction doit évidemment utiliser les fonctions précédemment
écrites.

### Test 9

Chargez plusieurs fois la page et vérifiez que
deux cases sont bien initialisées avec des valeurs aléatoires. Vérifiez
aussi que les valeurs sont bien 2 ou 4 et que les probabilités sont
respectées.

## Défi 10

Ecrire les fonctions

```typescript
function moveRight(i: number): boolean;
function moveLeft(i: number): boolean;
function moveUp(j: number): boolean;
function moveDown(j: number): boolean;
```

qui décalent les cases d'une ligne ou d'une colonne vers la droite, la
gauche, le haut ou le bas. Ces fonctions renvoient true si au moins une
case a bougé et false sinon.

### Test 10

testez les fonctions avec des fonctions de test

4 exemples :

Exemple 1:

si la ligne i est au départ

\* \* 2 \*

après l'appel de la fonction moveRight(i) elle sera:

\* \* \* 2

Exemple 2:

si la ligne i est au départ

4 \* 2 \*

après l'appel de la fonction moveRight(i) elle sera:

\* \* 4 2

Exemple 3:

si la ligne i est au départ

2 \* 2 2

après l'appel de la fonction moveRight(i) elle sera:

\* 2 2 2

Exemple 4:

si la ligne i est au départ

4 2 \* 4

après l'appel de la fonction moveRight(i) elle sera:

\* 4 2 4

## Défi 11

Ecrivez les fonctions

```typescript
function fusionRight(i: number): boolean;
function fusionLeft(i: number): boolean;
function fusionUp(j: number): boolean;
function fusionDown(j: number): boolean;
```

qui fusionnent les cases d'une ligne ou d'une colonne vers la droite, la
gauche, le haut ou le bas. Ces fonctions renvoient true si au moins une
fusion a eu lieu et false sinon.

### Test 11

testez les fonctions avec des fonctions de test

Exemple 1:

si la ligne i est au départ

\* \* 2 2

après l'appel de la fonction fusionRight(i) elle sera:

\* \* \* 4

Exemple 2:

si la ligne i est au départ

4 4 2 2

après l'appel de la fonction fusionRight(i) elle sera:

\* 8 \* 4

Exemple 3:

si la ligne i est au départ

\* 2 2 2

après l'appel de la fonction fusionRight(i) elle sera:

\* 2 \* 4

Exemple 4:

si la ligne i est au départ

\* 2 2 4

après l'appel de la fonction fusionRight(i) elle sera:

\* \* 4 4

## Défi 12

Ecrivez les fonctions

```typescript
function right(i: number): boolean;
function left(i: number): boolean;
function up(j: number): boolean;
function down(j: number): boolean;
```

qui déplacent, fusionnent puis re-déplacent une ligne ou une colonne vers
la droite, la gauche, le haut ou le bas. Ces fonctions renvoient true si
au moins une case a bougé ou a fusionné et false sinon.

Par exemple, la fonction right(i) déplace, fusionne puis re-déplace la
ligne i vers la droite. Elle renvoie true si au moins une case a bougé.

### Test 12

Testez avec les exemples suivants:

Exemple 1:

si les valeurs des cases initiales sont:

\* \* 2 2\
4 2 \* \*\
4 4 \* \*\
2 \* \* 2

après l'appui de la touche droite, les valeurs doivent être:

\* \* \* 4\
\* \* 4 2\
\* \* \* 8\
\* \* \* 4

Exemple 2:

si les valeurs des cases initiales sont:

4 \* 2 \*\
\* 2 \* 4\
4 2 \* 4\
2 \* 2 2

après l'appui de la touche bas , les valeurs doivent être:

\* \* \* \*\
\* \* \* \*\
8 \* \* 8\
2 4 4 2

## Défi 13

Continuez de structurer votre code en écrivant des
fonctions adaptées.
Faites en sorte que si l'utilisateur appuie sur une touche
directionnelle et qu'aucun mouvement ni aucune fusion n'a eu lieu,
alors un message dans une zone du jeu (par exemple
au dessus du tableau) indique que le mouvement n'a pas eu lieu.
Faites en sorte que si aucun mouvement n'est possible, alors
un message indique que le jeu est terminé.

## Défi 14

Terminez le jeu ! A chaque fois qu'il y a au moins un mouvement
ou une fusion, une case vide est choisie et une valeur 2 ou 4 est mise
dans cette case avec une certaine probabilité.
