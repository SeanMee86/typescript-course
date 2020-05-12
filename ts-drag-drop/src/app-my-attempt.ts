// class Project {
//     constructor(
//         public title: string,
//         public description: string,
//         public peopleAmount: number
//     ){}
// }
//
// class ProjectsList {
//     constructor(public projectsList: Project[]) {}
//     public addProject(project: Project) {
//         this.projectsList.push(project);
//     }
// }
//
// const formTemp = <HTMLTemplateElement>document.getElementById('project-input');
// const formClone = formTemp.content.cloneNode(true);
//
// const singleProjTemp = <HTMLTemplateElement>document.getElementById('single-project');
// const singleProjClone = singleProjTemp.content.cloneNode(true);
//
// const projListTemp = <HTMLTemplateElement>document.getElementById('project-list');
// const projListClone = projListTemp.content.cloneNode(true);
//
// const app = <HTMLElement>document.getElementById('app');
//
// app.appendChild(formClone);
// app.appendChild(singleProjClone);
// app.appendChild(projListClone);
//
// const projectsList = new ProjectsList([]);
//
// const form = document.querySelector('form') as HTMLFormElement;
//
// form.addEventListener('submit', (ev): void => {
//     ev.preventDefault();
//     const titleEl = <HTMLInputElement>document.querySelector('#title');
//     const descriptionEl = <HTMLInputElement>document.querySelector('#description');
//     const peopleEl = <HTMLInputElement>document.querySelector('#people');
//     const project = new Project(titleEl.value, descriptionEl.value, +peopleEl.value);
//     projectsList.addProject(project);
//     clearVals(titleEl, descriptionEl, peopleEl);
//     console.log(projectsList);
// })
//
// function clearVals<T extends HTMLInputElement>(t: T, d: T, p: T) {
//     t.value = '';
//     d.value = '';
//     p.value = '';
// }
//
//
//
