let projModal = document.querySelector(".project-modal");
const newProj = document.querySelector("#new-proj-btn");
const projClose = document.querySelector(".proj-close-btn");
const delProj = document.querySelector(".del-proj-btn");


function projectModal() {
    newProj.addEventListener("click", () => {
        projModal.style.display = "block";
    })
    projClose.addEventListener("click", () => {
        projModal.style.display = "none";
    })
};