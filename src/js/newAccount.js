function buildNewAccount() {
    let pageContent = document.getElementById("page-content");
    let newAccountPage = document.createElement("div");
    let h1 = document.createElement("h1");

    pageContent.textContent = "";
    
    newAccountPage.setAttribute("id", "new-account-page");
    newAccountPage.classList.add("container");
    
    h1.textContent = "Create New Account";

    newAccountPage.appendChild(h1);
    
    pageContent.appendChild(newAccountPage);
    pageContent.appendChild(buildForm());

    return pageContent
}

function buildForm(){
    let form = document.createElement("form");
    let accountTypeDiv = document.createElement("div");
    let accountTypeLabel = document.createElement("label");
    let accountTypeInput = document.createElement("input");
    let accountBalanceDiv = document.createElement("div");
    let accountBalanceLabel = document.createElement("label");
    let accountBalanceInput = document.createElement("input");

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

    accountBalanceInput.setAttribute("type", "text");
    accountBalanceInput.classList.add("form-control");
    accountBalanceInput.setAttribute("id", "account-balance-input");

    accountTypeDiv.appendChild(accountTypeLabel);
    accountTypeDiv.appendChild(accountTypeInput);

    accountBalanceDiv.appendChild(accountBalanceLabel);
    accountBalanceDiv.appendChild(accountBalanceInput);

    //----

    form.appendChild(accountTypeDiv);
    form.appendChild(accountBalanceDiv);

    return form;
}

export {buildNewAccount};