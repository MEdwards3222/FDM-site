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

function createActionBtn(id) {
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
        parseURL(id);
        buildUpdateAccount();
    })

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

function parseURL(id) {
    let parsedURL = new URL(window.location.href);
    
    parsedURL.searchParams.set("id", id);

    history.pushState({}, "", parsedURL);
    
}

function createCard(name){
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");

    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");
    

    cardBody.classList.add("card-body");

    cardTitle.classList.add("card-title");

    cardText.classList.add("card-text");
    cardText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam quam ipsum, non imperdiet mauris lobortis at. Ut feugiat, nisi."

    cardTitle.appendChild(createTitle(name));
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);

    return card;
}

function createRow() {
    let row = document.createElement("div");

    row.classList.add("row", "gx-5");

    return row;
}

function createTitle(name) {
    let title = document.createElement("div");
    let avatar = document.createElement("div");
    let userName = document.createElement("h5");

    avatar.classList.add("avatar");

    userName.classList.add("userName");
    userName.textContent = name;

    title.appendChild(avatar);
    title.appendChild(userName);


    return title;
}

export {setActiveBtn, createActionBtn, createCard, createRow, createTitle}