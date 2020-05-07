interface AnimalInfo {
    legs: number;
    environment: string;
    classification: string;
}

abstract class Animal {
    protected constructor(
        protected legs: number,
        protected environment: string,
        protected classification: string
    ) {}
    abstract sound(): string
}

class Dog extends Animal{

    constructor(public name: string) {
        super(4, 'House hold', 'Mammal')

    }

    sound() {
        return 'Woof';
    }

    callDog(command: string): string {
        return this.name + ' ' + command;
    }

    makeSound() {
        return this.sound();
    }

    get showInfo(): AnimalInfo {
        return {
            legs: this.legs,
            environment: this.environment,
            classification: this.classification
        }
    }
}

class MyDog extends Dog {
    private static instance: MyDog;
    private constructor(private owner: string) {
        super('Joe');
    }

    static getInstance(owner: string): MyDog {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new MyDog(owner);
        return this.instance;
    }

    get dogOwner(): string {
        return this.owner;
    }

    set dogOwner(newOwner: string) {
        this.owner = newOwner;
    }
}

// const joe = MyDog.getInstance('Sean');
// const joe2 = MyDog.getInstance('Brooke');


// console.log(joe.dogOwner);
// joe2.dogOwner = 'Brooke';
// console.log(joe.dogOwner);
// console.log(joe2.dogOwner);
//
const dog1 = new Dog('Bruce');
// const dog2 = new Dog('Nibbler');
//
// console.log(dog1.name, dog2.name);

// console.log(joe.callDog('Come!'))

console.log(dog1)

dog1.name = 'Charlie'

console.log(dog1)



