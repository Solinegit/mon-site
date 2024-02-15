const hi : string = "salut";
console.log("Type of hi:", typeof hi);

const age : number = 30;
console.log("Type of age:", typeof age);

const prix : number = 2.5;
console.log("Type of prix:", typeof prix);

const cool : boolean = true;
console.log("Type of cool:", typeof cool);

const n : null = null;
console.log("Type of n:", typeof n);

const u : undefined = undefined;
console.log("Type of u:", typeof u);

let f : Function = (x:number):number=>2*x;
console.log("Type of p1", typeof f)

let now : Date = new Date();
console.log("Type of now", typeof now)

const map1 : Map<number,string> = new Map();
console.log("Type of map1", typeof map1)

//notation JSON JavaScript Object Notation pour un Point
let p1 : {x:number, y:number} = {
    x : 2,
    y : 5
}

console.log("Type of p1", typeof p1)
console.log("Type of p1.x", typeof p1.x)

//utilisation d'une classe pour un Point
class Point{
    x:number=0
    y:number=0
    constructor(x:number,y:number){
        this.x=x
        this.y=y
    }
}

let p2 = new Point(3,6)
console.log("Type of p2", typeof p2)
console.log("Type of p2.x", typeof p2.x)