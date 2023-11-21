import {initHome, buildHome} from "./home";
import { setActiveBtn } from "./util";
import { buildNewAccount } from "./newAccount";
import { buildUpdateAccount } from "./updateAccount";


function initializePage() {
    const content = document.getElementById("content");

    content.appendChild(buildNavbar());
    content.appendChild(initPageContent());

    return content
}

function buildNavbar() {
    let navbar = document.createElement('nav');
    let fluidContainer = document.createElement('div');
    let bankLogo = document.createElement('a');
    let navbarNav = document.createElement('ul');
    let homeList = document.createElement('li')
    let newAccountList = document.createElement('li');
    let updateAccountList = document.createElement('li');
    let homeLink = document.createElement('a');
    let newAccountLink = document.createElement('a');
    let updateAccountLink = document.createElement('a');


    navbar.setAttribute("id", "navbar");
    navbar.classList.add("navbar", "navbar-dark", "bg-dark");

    fluidContainer.classList.add("container-fluid");

    bankLogo.setAttribute("href", "#");
    bankLogo.classList.add("navbar-brand");
    bankLogo.textContent = "FDM Bank";

    navbarNav.setAttribute('id', 'navbarNav');
    navbarNav.classList.add("navbar-nav");

    homeList.classList.add("nav-item");
    newAccountList.classList.add("nav-item");
    updateAccountList.classList.add("nav-item");

    homeLink.setAttribute("href", "#");
    homeLink.classList.add('nav-link', 'active');
    homeLink.textContent = "Home"

    newAccountLink.setAttribute("href", "#");
    newAccountLink.setAttribute("id", "new-account-link")
    newAccountLink.classList.add('nav-link');
    newAccountLink.textContent = "Add";

    updateAccountLink.setAttribute("href", "#");
    updateAccountLink.setAttribute("id", "update-account-link")
    updateAccountLink.classList.add('nav-link');
    updateAccountLink.textContent = "Update";

    homeList.appendChild(homeLink)
    newAccountList.appendChild(newAccountLink)
    updateAccountList.appendChild(updateAccountLink)
    

    navbarNav.appendChild(homeList);
    navbarNav.appendChild(newAccountList);
    navbarNav.appendChild(updateAccountList);
    fluidContainer.appendChild(bankLogo);
    fluidContainer.appendChild(navbarNav)


    homeList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(homeLink);
        buildHome();
    })

    newAccountList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(newAccountLink);
        buildNewAccount();
    })

    updateAccountList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(updateAccountLink);
        buildUpdateAccount();
    })

    bankLogo.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(homeLink);
        buildHome();
    })


    navbar.appendChild(fluidContainer);
    return navbar
}

function initPageContent() {
    let pageContent = document.createElement("div");

    pageContent.setAttribute("id", "page-content");
    pageContent.classList.add("container");

    pageContent.appendChild(initHome());

    return pageContent
}

export default initializePage;