function initHome() {
 let home = document.createElement("div");

 home.textContent = "Hello, this is the home page."

 home.setAttribute("id", "home-page");
 home.classList.add("container")
 
 home.appendChild(buildTable());


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
    
    tableContent.classList.add("table");
    
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

    let tableContent = [tableInfo1, tableInfo2, tableInfo3];

    /* let tr = document.createElement("tr");
    let th = document.createElement("th");
    
    th.setAttribute("scope", "row");
    th.textContent = 1;

    tr.appendChild(th);

    for(const [key, value] of Object.entries(tableInfo1)) {
        let td = document.createElement("td");
        td.textContent = `${value}`;

        tr.appendChild(td);
    } */
    
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

        tableBody.appendChild(tr)
    }
}

export {initHome, buildHome}