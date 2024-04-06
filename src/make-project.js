function makeProject () {
    let allProjects = [];
    let projName = document.querySelector("#proj-name");
    let projValue = projName.value;
    let projConfirm = document.querySelector(".proj-confirm");
    let projModal = document.querySelector(".project-modal");
    let projClose = document.querySelector(".proj-close-btn");
    
    const projBtn = document.querySelector("#new-project-btn");
    projBtn.addEventListener("click", () => {
        projModal.style.display = "block";
    })
    projClose.addEventListener("click", () => {
        projModal.style.display = "none";
    })
    projConfirm.addEventListener("click", () => {
        allProjects.push(projValue);
    })
};

module.exports = makeProject();