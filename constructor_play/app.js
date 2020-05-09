function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log('Hi my name is ' + this.name);
    }
}

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
