//function
let tab : number[] = [0,2,4,7,1,8]
console.log("tab: "+tab)

function fois2(x:number):number{
    return x*2
}

//impossible de faire let tab2 : number[] = fois2(tab); (a tester et voir l'erreur)

//utilisation de map

let tab2 : number[] = tab.map(fois2)
console.log("tab.map(fois2): "+tab2)

//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions } 

let fois3 = (x:number):number=>{
    let result = x*3
    return result
}

let tab3 : number[] = tab.map(fois3)
console.log("tab.map(fois3): "+tab3)

//avec expression
//(<paramètres> ...) => <expression>
let fois4 = (x:number):number=>x*4

let tab4 : number[] = tab.map(fois4)
console.log("tab.map(fois4): "+tab4)


//différence avec forEach (attention ici il y a un retour à la ligne à chaque console.log, donc pour chaque élément !) - forEach retourne void donc ne pas mettre le retour de forEach dans une variable sinon sa valeur sera undefined !
tab.forEach(x=>{x=fois2(x);console.log("for each (fois2): "+x)})


//fonction de filtrage 
let estPair = (x:number):boolean => x%2 === 0

let tabPair : number[] = tab.filter(estPair)
 console.log("tab.filter(estPair): "+tabPair)

//fonction de reduce (ici la somme de tous les éléments du tableau)
let somme = (a:number,b:number):number=>a+b
let tabSomme = tab.reduce(somme)
console.log("tab.reduce(somme): "+tabSomme)

//chaînage 
let tabSumPairFois2 = tab.filter(estPair).map(fois2).map(fois3).reduce(somme)
console.log("tab.filter(estPair).map(fois2).map(fois3).reduce(somme): "+tabSumPairFois2)

//fonction de chaînage
function ma_chaine(tab: number[]):number{
    return tab.filter(estPair).map(fois2).map(fois3).reduce(somme)
}
let tabSumPairFois2Bis = ma_chaine(tab)
console.log("ma_chaine(tab): "+tabSumPairFois2Bis)

function ma_chaine2(tab: number[],f_filter: (x: number) => boolean,f_map1: (x: number) => number,f_map2: (x: number) => number,f_reduce: (a: number, b: number) => number){
    return tab.filter(f_filter).map(f_map1).map(f_map2).reduce(f_reduce)
}
let tabSumPairFois2Ter = ma_chaine2(tab,estPair,fois2,fois3,somme)
console.log("ma_chaine2(tab,estPair,fois2,fois3,somme): "+tabSumPairFois2Ter)
 
//fonction de recherche
let plusGrandQue5 = (a:number):boolean=>a>5
let valeur = tab.find(plusGrandQue5)
let index = tab.findIndex(plusGrandQue5)
console.log(`${valeur} est le premier élément supérieur à 5 et il est situé à la position ${index}`)

