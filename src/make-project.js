let allProjects = [];
let projModal = document.querySelector(".project-modal")
let projClose = document.querySelector(".proj-close-btn");
let newProj = document.querySelector("#new-proj-btn");
let projConfirm = document.querySelector(".proj-confirm");

projClose.addEventListener("click", () =>{
    projModal.style.display = "none";
});

newProj.addEventListener("click", () => {
    projModal.style.display = "block";
});

export function Project(name, description, complete) {
    this.name = name;
    this.description = description;
    this.complete = complete;
}

export function render() {
    
}

export function addProject() {
    let projName = document.querySelector("#proj-name").value;
    let projDesc = document.querySelector("#proj-description").value;
    let projComplete = document.querySelector("#proj-complete");
    let makeProj = new Project(projName, projDesc, projComplete);
    allProjects.push(makeProj);
    render();
}

projConfirm.addEventListener("click", () => {
    addProject()
});