export function makeProject () {
    let allProjects = [];
    let projName = document.querySelector("#proj-name").value;
    let projConfirm = document.querySelector(".proj-confirm");
    let projModal = document.querySelector(".project-modal");
    let projClose = document.querySelector(".proj-close-btn");
    let projList = document.querySelector(".project-list");
    
    const projBtn = document.querySelector("#new-project-btn");
    projBtn.addEventListener("click", () => {
        projModal.style.display = "block";
    });
    projClose.addEventListener("click", () => {
        projModal.style.display = "none";
    });
    projConfirm.addEventListener("click", () => {
        allProjects.push(projName);
    });
    projList.innerHTML += allProjects;
};