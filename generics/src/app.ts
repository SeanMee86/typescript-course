// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     console.log(Object.assign(objA, objB))
//     // return Object.assign(objA, objB);
// }
//
// const person = merge({name: 'Sean'}, {age: 33});
//
// console.log(person);
//
// interface Lengthy {
//     length: number;
// }
//
// function countAndPrint<T extends Lengthy>(element: T): [T, string] {
//     let descriptionText = 'Got No Value.';
//     if(element.length === 1){
//         descriptionText = `Got ${element.length} element.`
//     } else if(element.length > 1){
//         descriptionText = `Got ${element.length} elements.`
//     }
//     return [element, descriptionText]
// }
//
// console.log(countAndPrint('Hi There!'));
//
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return `Value: ${obj[key]}`;
// }
//
// console.log(extractAndConvert({name: 'Sean'}, 'name'))

class DataStorage<T extends string | number> {
    private item: T[] = [];

    addItem(item: T) {
        this.item.push(item);
    }

    removeItem(item: T) {
        this.item.splice(this.item.indexOf(item), 1);
    }

    getItems() {
        return this.item;
    }
}

const numStore = new DataStorage<number>();

numStore.addItem(5);
numStore.addItem(10);
numStore.removeItem(10);
console.log(numStore.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Sean', 'Brooke'];

// names.push('Mike');

