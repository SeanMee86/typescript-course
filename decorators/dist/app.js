"use strict";
// function Logger(logString: string) {
//     return function(constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }
//
// function WithTemplate(template: string, hookId: string) {
//     return function(constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         console.log(hookEl)
//         if(hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;
//         }
//         console.log('activated')
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// console.log(pers);
function Log(target, propertyName) {
    console.log('Propterty Decorator');
    console.log(target, propertyName);
}
class Product {
    constructor(title, _price) {
        this.title = title;
        this._price = _price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid Price should be positive');
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "price", null);
