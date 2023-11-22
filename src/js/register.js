function buildRegister() {
    let pageContent = document.getElementById("page-content");
    let updateAccountPage = document.createElement("div");
    let h1 = document.createElement("h1");

    pageContent.textContent = ""

    updateAccountPage.setAttribute("id", "update-account-page");
    updateAccountPage.classList.add("container");
    
    h1.textContent = "Register"

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
    let confirmDiv = document.createElement("div");
    let confirmLabel = document.createElement("label");
    let confirmInput = document.createElement("input");
    let submitBtn = document.createElement("button");

    form.setAttribute("id", "register-form");

    usernameDiv.classList.add("mb-3");
    passwordDiv.classList.add("mb-3");
    confirmDiv.classList.add("mb-3");

    usernameLabel.setAttribute("for", "username-register");
    usernameLabel.classList.add("form-label");
    usernameLabel.textContent = "Username";

    passwordLabel.setAttribute("for", "password-register");
    passwordLabel.classList.add("form-label");
    passwordLabel.textContent = "Password";

    confirmLabel.setAttribute("for", "confirm-register");
    confirmLabel.classList.add("form-label");
    confirmLabel.textContent = "Confirm Password";
   
    usernameInput.setAttribute("type", "text");
    usernameInput.classList.add("form-control");
    usernameInput.setAttribute("id", "register-username-input");
    usernameInput.setAttribute("required", "");

    passwordInput.setAttribute("type", "password");
    passwordInput.classList.add("form-control");
    passwordInput.setAttribute("id", "register-password-input");
    passwordInput.setAttribute("required", "");

    confirmInput.setAttribute("type", "password");
    confirmInput.classList.add("form-control");
    confirmInput.setAttribute("id", "confirm-password-input");
    confirmInput.setAttribute("required", "");

    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("btn", "btn-primary");
    submitBtn.textContent = "Register";

    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    confirmDiv.appendChild(confirmLabel);
    confirmDiv.appendChild(confirmInput);

    form.appendChild(usernameDiv);
    form.appendChild(passwordDiv);
    form.appendChild(confirmDiv);
    form.appendChild(submitBtn);

    return form;
}

export {buildRegister}