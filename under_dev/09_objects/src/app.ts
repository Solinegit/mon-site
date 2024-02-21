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


interface PersonInterface{
    logPerson(): void;
}

abstract class Person implements PersonInterface{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    abstract logPerson(): void;
}

class User extends Person{
    occupation: string;
    constructor(name: string, age: number, occupation: string){
        super(name, age);
        this.occupation = occupation;
    }
    logPerson(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`);
    }
}

class Admin extends Person{
    role: string;
    constructor(name: string, age: number, role: string){
        super(name, age);
        this.role = role;
    }
    logPerson(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`);
    }
}


const persons: Person[] = [
    new User('Max', 30, 'Frontend Developer'),
    new Admin('Max', 30, 'Administrator')]

    persons.forEach((person : Person )=> person.logPerson());

console.log("Filter Users only")
const usersOnly = persons.filter((person: Person) => person instanceof User);
usersOnly.forEach((person: Person) => person.logPerson());