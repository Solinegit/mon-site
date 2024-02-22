//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }

// Premier exemple avec instructions
let ajouter = (a: number, b: number) => {
  let somme = a + b;
  console.log(`La somme est: ${somme}`);
};
ajouter(5, 3); // Affiche "La somme est: 8"

//avec expression
//(<paramètres> ...) => <expression>

// Deuxième exemple avec expression
let multiplier = (a: number, b: number) => a * b;
console.log(multiplier(5, 3)); // Affiche "15"
