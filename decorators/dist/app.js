"use strict";
// function Logger(logString: string) {
//     return function(constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }
//
// function WithTemplate(template: string, hookId: string) {
//     return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
//         return class extends originalConstructor {
//             constructor(..._: any[]){
//                 super();
//                 const hookEl = document.getElementById(hookId);
//                 if(hookEl) {
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
// }
//
// @Logger('Logging - Person')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//     name = 'Sean';
//
//     constructor() {
//         console.log('Creating Person Object...')
//     }
// }
//
// const pers = new Person();
//
// console.log(pers);
//
// function Log(target: any, propertyName: string | Symbol) {
//     console.log('Propterty Decorator');
//     console.log(target, propertyName);
// }
//
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Accessor Decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
//
// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log('Method Decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
//
// function Log4(target: any, name: string | Symbol, position: number) {
//     console.log('Parameter Decorator');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }
//
// class Product {
//     @Log
//     title: string;
//     private _price: number;
//
//     @Log2
//     set price(val: number) {
//         if(val > 0){
//             this._price = val;
//         }else{
//             throw new Error('Invalid Price should be positive');
//         }
//     }
//
//     @Log3
//     getPriceWithTax(@Log4 tax: number) {
//         return this.price * (1 + tax);
//     }
//
//     constructor(public t: string, private p: number) {
//         this.title = t;
//         this._price = p;
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_, _2, descriptor) {
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works';
    }
    showMessage() {
        return this.message;
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
