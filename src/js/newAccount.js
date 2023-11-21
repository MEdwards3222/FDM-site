function buildNewAccount() {
    let pageContent = document.getElementById("page-content");
    let newAccountPage = document.createElement("div");

    pageContent.textContent = "";
    
    newAccountPage.setAttribute("id", "new-account-page");
    newAccountPage.classList.add("container");
    newAccountPage.textContent = "Hello, this is the new account page.";
    
    pageContent.appendChild(newAccountPage);

    return pageContent
}

export {buildNewAccount};