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

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    addAdmin(admin: string) {
        this.admins.push(admin);
    }

    getAdmins() {
        console.log(this.admins);
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]){
        super(id, 'Accounting');
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    getReports() {
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d1', ['Initial Report']);

accounting.addEmployee('Sean');
accounting.addEmployee('Brooke');

accounting.addReport('Up 5 figures');
accounting.getReports();

// accounting.printEmployeeInformation();

// accounting.employees[2] = 'Melodie';

// console.log(accounting);

accounting.describe();

console.log(accounting);

// const accountingCopy = {
//     name: 's',
//     describe: accounting.describe
// }
//
// accountingCopy.describe();

const itDepartment = new ITDepartment('d2', []);

itDepartment.addAdmin('Sean');

itDepartment.getAdmins();

itDepartment.describe();

console.log(itDepartment);
