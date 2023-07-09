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

    persons.forEach(person => person.logPerson());


