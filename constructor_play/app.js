function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log('Hi!')
    }
}

const SingleInstanceOfPerson = (function(){
    let instance;
    function createInstance(name, age) {
        return new Person(name, age);
    }

    return {
        getInstance: function(name, age) {
            if(!instance) {
                instance = createInstance(name, age)
            }
            return instance;
        }
    }
})()

const person1 = SingleInstanceOfPerson.getInstance('Sean', 33);
const person2 = SingleInstanceOfPerson.getInstance('Brooke', 32);

console.log(person1, person2);

Person.prototype.ageAYear = function() {
    this.age++;
}

const sean = new Person('Sean', 33);

sean.sayHi();

// sean.prototype.ageAYear = function() {
//     this.age++
// }

console.log(sean.age);

sean.ageAYear();

console.log(sean.age);

