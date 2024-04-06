export const addProject = () => {
    let allProjects = [];
    projModal = document.querySelector(".project-modal");
    newProj = document.querySelector("#new-proj-btn");
    newProj.addEventListener("click", () => {
        projModal.style.display = "block";
    })
}