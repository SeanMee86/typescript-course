import Component from "./base-component.js";
import * as Validation from "../utils/validation.js";
import { AutoBind } from "../decorators/autobind.js";
import { projectState } from "../state/project.js";

// Project Input Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputEl: HTMLInputElement;
    descriptionInputEl: HTMLInputElement;
    peopleInputEl: HTMLInputElement;


    constructor() {
        super('project-input','app', true, 'user-input');

        this.titleInputEl = <HTMLInputElement>this.element.querySelector('#title');
        this.descriptionInputEl = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleInputEl = <HTMLInputElement>this.element.querySelector('#people');

        this.configure();
    }

    // static validateInputs(input: string | number): boolean {
    //     if(typeof input === 'number') {
    //         return input > 0;
    //     } else {
    //         return input.trim().length !== 0;
    //     }
    // }

    // private gatherUserInput(): [string, string, number] | void {
    //     const enteredTitle = this.titleInputEl.value
    //     const enteredDescription = this.descriptionInputEl.value
    //     const enteredPeople = this.peopleInputEl.value
    //     const userInfo:[string, string, number] = [enteredTitle, enteredDescription, +enteredPeople];
    //
    //     let isValid = true;
    //
    //     for(let value of userInfo) {
    //         isValid = ProjectInput.validateInputs(value) && isValid;
    //     }
    //
    //     if(!isValid) {
    //         alert('Invalid Input Please Try Again')
    //     }else{
    //         return userInfo;
    //     }
    // }

    configure(): void {
        this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent(): void {
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputEl.value
        const enteredDescription = this.descriptionInputEl.value
        const enteredPeople = this.peopleInputEl.value

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true,
        }

        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }

        const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if(
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)
        ) {
            alert('Invalid Input Please Try Again')
        }else{
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs(): void {
        this.titleInputEl.value = '';
        this.descriptionInputEl.value = '';
        this.peopleInputEl.value = '';
    }

    @AutoBind
    private submitHandler(ev: Event) {
        ev.preventDefault();
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
        }
        this.clearInputs();
    }
}
