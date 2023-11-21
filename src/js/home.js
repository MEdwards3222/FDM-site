import { createActionBtn } from "./util";
import { buildNewAccount } from "./newAccount";
import { setActiveBtn } from "./util";

function initHome() {
 let home = document.createElement("div");
 let h1 = document.createElement("h1");
 let addBtn = document.createElement("button");
 let addAccountLink = document.getElementById("new-account-link");

 h1.textContent = "View All Accounts"

 home.setAttribute("id", "home-page");
 home.classList.add("container")

 addBtn.classList.add("btn", "btn-primary");
 addBtn.textContent = "Add New Account";

 addBtn.addEventListener("click", (e) => {
    setActiveBtn(addAccountLink);
    buildNewAccount();
})

 
 
 home.appendChild(h1);
 home.appendChild(addBtn);
 home.appendChild(buildTable());


 return home;
}

function buildHome() {
    let pageContent = document.getElementById("page-content")
    let home = document.createElement("div");
    let h1 = document.createElement("h1");
    let addBtn = document.createElement("button");
    let addAccountLink = document.getElementById("new-account-link");

    pageContent.textContent = "";

    home.setAttribute("id", "home-page");
    home.classList.add("container");

    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Add New Account";

    h1.textContent = "View All Accounts"
    
    home.appendChild(h1);
    home.appendChild(addBtn);

    addBtn.addEventListener("click", (e) => {
        setActiveBtn(addAccountLink);
        buildNewAccount();
    })



    pageContent.appendChild(home);
    pageContent.appendChild(buildTable());

    return pageContent;
}

function buildTable() {
    //Can hard code this - don't get fancy, you don't have time.

    let tableContent = document.createElement("table");
    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    let trHead = document.createElement("tr");
    let thHeadContent = ["Account ID", "Account Type", "Account Balance", "Account Owner", "Actions"];
    
    tableContent.classList.add("table", "table-striped");
    
    for(let item of thHeadContent){
        let thHead = document.createElement("th");
        
        trHead.appendChild(thHead);
        
        thHead.setAttribute("scope", "col");
        thHead.textContent = item;

        tableHead.appendChild(trHead);
    }

    tableInformation(tableBody);

    tableContent.appendChild(tableHead);
    tableContent.appendChild(tableBody);

    return tableContent
}

function tableInformation(tableBody) {
    let tableInfo1 = {AccountType: "Checking", AccountBalance: 500, AccountOwner: "Michael Edwards"}
    let tableInfo2 = {AccountType: "Savings", AccountBalance: 7321, AccountOwner: "John Doe"}
    let tableInfo3 = {AccountType: "Investment", AccountBalance: 36920, AccountOwner: "Jane Doe"}
    let tableInfo4 = {AccountType: "Checking", AccountBalance: 500000, AccountOwner: "Ryan Gossling"}

    let tableContent = [tableInfo1, tableInfo2, tableInfo3, tableInfo4];
    
    for(let i = 0; i < tableContent.length; i++) {
        
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        
        th.setAttribute("scope", "row");
        th.textContent = i;

        tr.appendChild(th);

        for(const [key, value] of Object.entries(tableContent[i])) {
            let td = document.createElement("td");
            td.textContent = `${value}`;

            
            tr.appendChild(td);
        } 

        let td = document.createElement("td");
        td.appendChild(createActionBtn())
        tr.appendChild(td);
        tableBody.appendChild(tr)
    }
}

export {initHome, buildHome}