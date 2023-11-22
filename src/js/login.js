function buildLogin() {
    let pageContent = document.getElementById("page-content");
    let updateAccountPage = document.createElement("div");
    let h1 = document.createElement("h1");

    pageContent.textContent = ""

    updateAccountPage.setAttribute("id", "update-account-page");
    updateAccountPage.classList.add("container");
    
    h1.textContent = "Login"

    updateAccountPage.appendChild(h1);
    
    pageContent.appendChild(updateAccountPage);
    pageContent.appendChild(buildForm());

    return pageContent
}

function buildForm() {
    let form = document.createElement("form");
    let usernameDiv = document.createElement("div");
    let usernameLabel = document.createElement("label");
    let usernameInput = document.createElement("input");
    let passwordDiv = document.createElement("div");
    let passwordLabel = document.createElement("label");
    let passwordInput = document.createElement("input");
    let submitBtn = document.createElement("button");

    form.setAttribute("id", "login-form");

    usernameDiv.classList.add("mb-3");
    passwordDiv.classList.add("mb-3");

    usernameLabel.setAttribute("for", "account-type");
    usernameLabel.classList.add("form-label");
    usernameLabel.textContent = "Username";

    passwordLabel.setAttribute("for", "account-balance");
    passwordLabel.classList.add("form-label");
    passwordLabel.textContent = "Password"; //This requires validation
   
    usernameInput.setAttribute("type", "text");
    usernameInput.classList.add("form-control");
    usernameInput.setAttribute("id", "account-type-input");
    usernameInput.setAttribute("required", "");

    passwordInput.setAttribute("type", "password");
    passwordInput.classList.add("form-control");
    passwordInput.setAttribute("id", "account-balance-input");
    passwordInput.setAttribute("required", "");

    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("btn", "btn-primary");
    submitBtn.textContent = "Login";

    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    form.appendChild(usernameDiv);
    form.appendChild(passwordDiv);
    form.appendChild(submitBtn);

    return form;
}

export {buildLogin}