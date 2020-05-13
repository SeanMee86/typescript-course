import Cmp from "./base-component";
import { Project, ProjectStatus } from "../models/project";
import { ProjectItem } from "./project-item";
import { DragTarget } from "../models/drag-drop";
import { projectState } from "../state/project";
import { AutoBind } from "../decorators/autobind";

// Project List Class
export class ProjectList extends Cmp<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`)
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @AutoBind
    dragOverHandler(event: DragEvent): void {
        if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }

    @AutoBind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(
            prjId,
            this.type === 'active' ?
                ProjectStatus.Active :
                ProjectStatus.Finished);
    }

    @AutoBind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
        }
    }

    configure(): void {
        this.element.addEventListener('dragover', this.dragOverHandler)
        this.element.addEventListener('dragleave', this.dragLeaveHandler)
        this.element.addEventListener('drop', this.dropHandler)
        projectState.addListener((projects: Project[]) => {
            this.assignedProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.renderProjects();
        })
    }

    renderContent() {
        // (<HTMLUListElement>this.element.querySelector('ul')).id = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = `${this.type}-projects-list`;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }
}
