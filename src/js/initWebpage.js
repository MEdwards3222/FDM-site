import {initHome, buildHome} from "./home";
import { setActiveBtn } from "./util";
import { buildNewAccount } from "./newAccount";
import { buildUpdateAccount } from "./updateAccount";
import { buildLogin } from "./login";
import { buildRegister } from "./register";
import { buildUsers } from "./users";


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
    let loginList = document.createElement('li');
    let registerList = document.createElement('li');
    let userList = document.createElement("li");
    let homeLink = document.createElement('a');
    let newAccountLink = document.createElement('a');
    let updateAccountLink = document.createElement('a');
    let loginLink = document.createElement('a');
    let registerLink = document.createElement('a');
    let userLink = document.createElement("a");


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
    loginList.classList.add("nav-item");
    registerList.classList.add("nav-item");
    userList.classList.add("nav-item");

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

    loginLink.setAttribute("href", "#");
    loginLink.setAttribute("id", "login-link");
    loginLink.classList.add("nav-link");
    loginLink.textContent = "Login";

    registerLink.setAttribute("href", "#");
    registerLink.setAttribute("id", "register-link");
    registerLink.classList.add("nav-link");
    registerLink.textContent = "Register";

    userLink.setAttribute("href", "#");
    userLink.setAttribute("id", "user-link");
    userLink.classList.add("nav-link");
    userLink.textContent = "Users";


    homeList.appendChild(homeLink)
    newAccountList.appendChild(newAccountLink)
    updateAccountList.appendChild(updateAccountLink)
    loginList.appendChild(loginLink);
    registerList.appendChild(registerLink);
    userList.appendChild(userLink);
    

    navbarNav.appendChild(homeList);
    navbarNav.appendChild(newAccountList);
    navbarNav.appendChild(updateAccountList);
    navbarNav.appendChild(loginList);
    navbarNav.appendChild(registerList);
    navbarNav.appendChild(userList);
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

    loginList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(loginLink);
        buildLogin();
    })

   registerList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(registerLink);
        buildRegister();
   })

   userList.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(userLink);
        buildUsers();
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