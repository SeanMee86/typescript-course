// interface Person {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }

// const person: {
//     name: string;
//     age: number;
// } =

// const person: Person = {
//     name: 'Sean',
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Sean',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


// person.role.push('admin');
// person.role[0] = 10;
//
// person.role = [0, 'author']


// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
//
// console.log(person.name);
//
// for(const hobby of person.hobbies) {
//     console.log(hobby);
//     console.log(hobby);
// }

// let a: Array<number> = [1,2,3,4];

// console.log(a);