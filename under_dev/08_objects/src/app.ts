interface Electrical{
    getVoltage():number
}
interface Good{
    getPrice():number
}

class TV implements Electrical, Good{

    private voltage:number
    private price:number

    getVoltage(): number {
        return this.voltage
    }

    getPrice(): number {
        return this.price
    }

    constructor(price:number,voltage:number){
        this.price=price
        this.voltage=voltage
    }
    
}

class Salad implements Good{

    private price:number
    getPrice(): number {
        return this.price
    }
    constructor(price:number){
        this.price=price
    }
}

let s1 : Salad = new Salad(2.3)
let s2 : Salad = new Salad(2.5)
let tv1 : TV = new TV(1399,220)
let tv2 : TV = new TV(999,220)
let tv3 : TV = new TV(1499,110)

let tabElectrical:Electrical[]=[]
tabElectrical.push(tv1)
tabElectrical.forEach((e:Electrical)=>console.log("electrical: "+e.getVoltage()+"V"))

const tab=[2,3,4]
console.log(tab)
tab[1]=0
console.log(tab)

interface Person {
    readonly name:string
    readonly age:number
}

const person:Person={
    name:"remi",
    age:30
}

console.log(person)
//impossible person.age=35