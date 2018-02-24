class Person {
    constructor(name){
        this.name = name;
    }
    greet() {
        return `Welcome ${this.name}!`;
    }
}



console.log( new Person('John').greet() );
