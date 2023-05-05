//voir https://www.json.org/json-fr.html

//JSON vers des objets (eux-même décrits par une interface)

let data=`[
    {
      "id": "1042",
      "name": "Joe",
      "age": 27,
      "scores": [31.4, 29.9, 35.7]
    },
    {
      "id": "1071",
      "name": "Sarah",
      "age": 29,
      "scores": [25.0, 27.1]
    }
  ]`
  
  interface UserInterface {
    id: string
    name: string
    age: number
    scores: number[]
  }
  
  let users : UserInterface[] = JSON.parse(data)
  
  console.log(users[0].scores[0])

  //objets (instanciés depuis une classe qui implémente une interface) vers JSON
  
  class User implements UserInterface{
      id: string
      name: string
      age: number
      scores: number[]
      constructor(id: string,name: string,age: number,scores: number[]){
          this.id=id
          this.name=name
          this.age=age
          this.scores=scores
      }
  }
  
  let u1,u2 : UserInterface
  u1 = new User("456","Eya",23,[2.4,34])
  u2 = new User("789","Emma",32,[23.1,9,5])
  
  //sans utiliser de classe cela donne

  let u3 : UserInterface = {"id": "1042","name": "Joe","age": 27,"scores": [31.4, 29.9, 35.7]}
  
  let users2 : UserInterface[]= [u1,u2,u3]
  
  let data2 :string = JSON.stringify(users2)
  
  console.log(data2)

  

  