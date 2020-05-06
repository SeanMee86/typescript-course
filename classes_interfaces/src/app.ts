class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}, ID: ${this.id}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Sean');
accounting.addEmployee('Brooke');

// accounting.printEmployeeInformation();

// accounting.employees[2] = 'Melodie';

// console.log(accounting);

accounting.describe();

// const accountingCopy = {
//     name: 's',
//     describe: accounting.describe
// }
//
// accountingCopy.describe();
