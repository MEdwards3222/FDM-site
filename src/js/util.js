import { buildUpdateAccount } from "./updateAccount";

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".nav-link");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add('active');
}

function createActionBtn() {
    let btnContainer = document.createElement("div");
    let updateBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let updateAccountLink = document.getElementById("update-account-link");

    btnContainer.classList.add("container");
    btnContainer.setAttribute("id", "action-btn-container")

    updateBtn.setAttribute("type", "button");
    updateBtn.classList.add("btn", "btn-primary");
    updateBtn.textContent = "Update"

    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.textContent = "Delete"


    updateBtn.addEventListener("click", (e) => {
        setActiveBtn(updateAccountLink);
        buildUpdateAccount();
    })

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

export {setActiveBtn, createActionBtn}