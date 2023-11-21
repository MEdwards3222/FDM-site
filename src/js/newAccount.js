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
    let accountTypeFeedback = document.createElement("div");
    let accountBalanceDiv = document.createElement("div");
    let accountBalanceLabel = document.createElement("label");
    let accountBalanceInput = document.createElement("input");
    let accountBalanceFeedback = document.createElement("div");
    let submitBtn = document.createElement("button");

    form.setAttribute("id", "new-account-form");
    form.classList.add("needs-validation");

    accountTypeDiv.classList.add("mb-3");
    accountBalanceDiv.classList.add("mb-3");

    accountTypeLabel.setAttribute("for", "validationCustom01");
    accountTypeLabel.classList.add("form-label");
    accountTypeLabel.textContent = "Account Type";

    accountBalanceLabel.setAttribute("for", "account-balance");
    accountBalanceLabel.classList.add("form-label");
    accountBalanceLabel.textContent = "Account Balance"; //This requires validation
   
    accountTypeInput.setAttribute("type", "text");
    accountTypeInput.classList.add("form-control");
    accountTypeInput.setAttribute("id", "validationCustom01");
    accountTypeInput.setAttribute("required", "");

    accountBalanceInput.setAttribute("type", "number");
    accountBalanceInput.classList.add("form-control");
    accountBalanceInput.setAttribute("id", "account-balance-input");
    accountBalanceInput.setAttribute("required", "");

    accountTypeFeedback.classList.add("invalid-feedback");
    accountTypeFeedback.textContent = "Please enter only alphabetical letters";

    accountBalanceFeedback.classList.add("invalid-feedback");
    accountBalanceFeedback.textContent = "Please enter only numbers";

    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("btn", "btn-primary");
    submitBtn.textContent = "Create New Account";

    accountTypeDiv.appendChild(accountTypeLabel);
    accountTypeDiv.appendChild(accountTypeInput);
    accountTypeDiv.appendChild(accountTypeFeedback);

    accountBalanceDiv.appendChild(accountBalanceLabel);
    accountBalanceDiv.appendChild(accountBalanceInput);
    accountBalanceDiv.appendChild(accountBalanceFeedback);

    form.appendChild(accountTypeDiv);
    form.appendChild(accountBalanceDiv);
    form.appendChild(submitBtn);

    return form;
}


export {buildNewAccount};