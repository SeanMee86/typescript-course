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

function Log(target: any, propertyName: string | Symbol) {
    console.log('Propterty Decorator');
    console.log(target, propertyName);
}

class Product {
    @Log
    set price(val: number) {
        if(val > 0){
            this._price = val;
        }else{
            throw new Error('Invalid Price should be positive');
        }
    }

    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }

    constructor(public title: string, private _price: number) {
    }
}
