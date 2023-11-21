function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".nav-link");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add('active');
}

function createActionBtn() {
    let btnContainer = document.createElement("div");
    let updateBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    btnContainer.classList.add("container");

}

export {setActiveBtn}