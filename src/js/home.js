function initHome() {
 let home = document.createElement("div");

 home.textContent = "Hello, this is the home page."

 home.setAttribute("id", "home-page");
 home.classList.add("container")


 return home;
}

function buildHome() {
    let pageContent = document.getElementById("page-content")
    let home = document.createElement("div");

    pageContent.textContent = "";

    home.setAttribute("id", "home-page");
    home.classList.add("container");
    home.textContent = "Hello, this is the home page."
    
    pageContent.appendChild(home);

    return pageContent;
}

export {initHome, buildHome}