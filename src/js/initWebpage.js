function initializePage() {
    const content = document.getElementById("content");

    content.appendChild(buildNavbar());
    content.appendChild(helloWorld());

    return content
}

function buildNavbar() {
    let navbar = document.createElement('nav');

    navbar.setAttribute("id", "navbar");
    navbar.classList.add("navbar", "navbar-dark", "bg-primary");


    return navbar
}

function helloWorld() {
    let hello = document.createElement('p');
    hello.textContent = "Hello World!";

    return hello
}

export default initializePage;