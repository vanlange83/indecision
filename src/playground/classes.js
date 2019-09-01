
class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    } 
    getGreeting() {
        return 'Hi. Im ' + this.name
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student  extends Person {
    constructor (name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation = 'london') {
        super(name, age)
        this.homelocation = homelocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        
        if(this.homelocation) {
            greeting += `. Im visiting from ${this.homelocation}` 
            return greeting
        }
    }
}

const me = new Person('Vaughn');
console.log(me.getGreeting())
console.log(me.getDescription())
console.log('--------------------------')
const other = new Student('mark', 25)
console.log(other.getDescription())
console.log(other.getGreeting())
console.log(other.hasMajor())

const explorer = new Traveler('elle', 'essex')

console.log(explorer.getGreeting())
console.log(explorer.age)