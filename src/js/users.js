import { createCard, createRow, createTitle } from "./util";

function buildUsers() {
    let pageContent = document.getElementById("page-content");
    let updateAccountPage = document.createElement("div");
    let h1 = document.createElement("h1");

    pageContent.textContent = ""

    updateAccountPage.setAttribute("id", "update-account-page");
    updateAccountPage.classList.add("container");
    
    h1.textContent = "Users"

    updateAccountPage.appendChild(h1);
    
    pageContent.appendChild(updateAccountPage);
    pageContent.appendChild(buildGrid());

    return pageContent
}

function buildGrid() {
    let userGrid = document.createElement("div");
    let userRow = document.createElement("div");

    let row1 = createRow();
    let row2 = createRow();

    userGrid.classList.add("container", "text-center");
    userRow.classList.add("row");

    row1.appendChild(createCard("Michael Edwards"));
    row1.appendChild(createCard("John Doe"));
    row1.appendChild(createCard("Jane Doe"));

    row2.appendChild(createCard("Ryan Gosling"));
    row2.appendChild(createCard("Desi Rodelas"));
    row2.appendChild(createCard("Daniel Dick"));

    userGrid.appendChild(row1);
    userGrid.appendChild(row2);

    return userGrid
}

export {buildUsers}