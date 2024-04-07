let allProjects = [];

export default class Project {
    constructor(name, complete ,tasks=[]) {
        this.name = name;
        this.complete = complete;
        this.tasks = tasks;
    }
}

Project.prototype.toggleComplete = function() {
    this.complete = !this.complete
}

function toggleComplete(index) {
    allProjects[index].toggleComplete();
    renderProj();
}

function renderProj() {
    
}