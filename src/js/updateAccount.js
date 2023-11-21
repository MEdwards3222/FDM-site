function buildUpdateAccount() {
    let pageContent = document.getElementById("page-content");
    let updateAccountPage = document.createElement("div");
    let h1 = document.createElement("h1");

    pageContent.textContent = ""

    updateAccountPage.setAttribute("id", "update-account-page");
    updateAccountPage.classList.add("container");
    
    h1.textContent = "Update Account"

    updateAccountPage.appendChild(h1);
    
    pageContent.appendChild(updateAccountPage);
    pageContent.appendChild(buildForm());

    return pageContent
}

function buildForm() {
    let form = document.createElement("form");
    let accountTypeDiv = document.createElement("div");
    let accountTypeLabel = document.createElement("label");
    let accountTypeInput = document.createElement("input");
    let accountBalanceDiv = document.createElement("div");
    let accountBalanceLabel = document.createElement("label");
    let accountBalanceInput = document.createElement("input");
    let submitBtn = document.createElement("button");

    form.setAttribute("id", "new-account-form");

    accountTypeDiv.classList.add("mb-3");
    accountBalanceDiv.classList.add("mb-3");

    accountTypeLabel.setAttribute("for", "account-type");
    accountTypeLabel.classList.add("form-label");
    accountTypeLabel.textContent = "Account Type";

    accountBalanceLabel.setAttribute("for", "account-balance");
    accountBalanceLabel.classList.add("form-label");
    accountBalanceLabel.textContent = "Account Balance"; //This requires validation
   
    accountTypeInput.setAttribute("type", "text");
    accountTypeInput.classList.add("form-control");
    accountTypeInput.setAttribute("id", "account-type-input");
    accountTypeInput.setAttribute("required", "");

    accountBalanceInput.setAttribute("type", "number");
    accountBalanceInput.classList.add("form-control");
    accountBalanceInput.setAttribute("id", "account-balance-input");
    accountBalanceInput.setAttribute("required", "");

    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("btn", "btn-primary");
    submitBtn.textContent = "Update New Account";

    accountTypeDiv.appendChild(accountTypeLabel);
    accountTypeDiv.appendChild(accountTypeInput);

    accountBalanceDiv.appendChild(accountBalanceLabel);
    accountBalanceDiv.appendChild(accountBalanceInput);

    form.appendChild(accountTypeDiv);
    form.appendChild(accountBalanceDiv);
    form.appendChild(submitBtn);

    return form;
}

export {buildUpdateAccount};