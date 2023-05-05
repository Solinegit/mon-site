//function
let tab : number[] = [2,4,7,9]

function fois2(x:number):number{
    return x*2
}

//impossible de faire let tab2 : number[] = fois2(tab); 

//utilisation de map

let tab2 : number[] = tab.map(fois2)
console.log(tab2)

//fat arrow avec bloc d'instructions
let fois3 = (x:number):number=>{
    let result = x*3
    return result
}

let tab3 : number[] = tab.map(fois3)
console.log(tab3)

//fat arraow avec expression
let fois4 = (x:number):number=>x*4

let tab4 : number[] = tab.map(fois4)
console.log(tab4)



//différence avec forEach (attention ici il y a un retour à la ligne à chaque console.log, donc pour chaque élément !)
let tab2bis = tab.forEach(x=>{x=fois2(x);console.log(x)})

