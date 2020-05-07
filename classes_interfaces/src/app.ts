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

    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('No Report');
        }
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = this.reports[0];
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    getReports() {
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d1', []);

accounting.addReport('Report 1');

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Report 2';

console.log(accounting.mostRecentReport);

// accounting.addEmployee('Sean');
// accounting.addEmployee('Brooke');
//
// accounting.addReport('Up 5 figures');
// accounting.getReports();

// accounting.printEmployeeInformation();

// accounting.employees[2] = 'Melodie';

// console.log(accounting);

// accounting.describe();
//
// console.log(accounting);

// const accountingCopy = {
//     name: 's',
//     describe: accounting.describe
// }
//
// accountingCopy.describe();

const itDepartment = new ITDepartment('d2', []);

// itDepartment.addAdmin('Sean');
//
// itDepartment.getAdmins();
//
// itDepartment.describe();
//
// console.log(itDepartment);



