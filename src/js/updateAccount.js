function buildUpdateAccount() {
    let pageContent = document.getElementById("page-content");
    let updateAccountPage = document.createElement("div");

    pageContent.textContent = ""

    updateAccountPage.setAttribute("id", "update-account-page");
    updateAccountPage.classList.add("container");
    updateAccountPage.textContent = "Hello, this is the update account page."

    pageContent.appendChild(updateAccountPage);

    return pageContent
}

export {buildUpdateAccount};