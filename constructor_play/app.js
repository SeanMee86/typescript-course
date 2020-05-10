function Person(name, age) {
    this.name = name;
    this.age = age;
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