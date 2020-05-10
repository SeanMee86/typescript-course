"use strict";
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
class DataStorage {
    constructor() {
        this.item = [];
    }
    addItem(item) {
        this.item.push(item);
    }
    removeItem(item) {
        this.item.splice(this.item.indexOf(item), 1);
    }
    getItems() {
        return this.item;
    }
}
const numStore = new DataStorage();
numStore.addItem(5);
numStore.addItem(10);
numStore.removeItem(10);
console.log(numStore.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Sean', 'Brooke'];
// names.push('Mike');
