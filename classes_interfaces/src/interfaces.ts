interface Person {
    name: string;
    age: number;

    greet(): void;
}

let user1: Person;

user1 = {
    name: 'Sean',
    age: 33,
    greet: function() {
        console.log('hello');
    }
}