let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for (let i = 0; i < hamburgerBarEl.length; i++) {
    hamburgerBarEl[i].addEventListener("click", function () {

        //document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        //document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}

let hamburger = {
    el: document.getElementsByClassName("hamburger__bar"),
    nav: document.getElementById("header-list"),
    cont: document.getElementsByClassName("container")[0],
    doToggle() {

        this.cont.classList.toggle("hamburger-container-expanded");
        this.cont.classList.toggle("hamburger-container-unexpanded");
        this.nav.classList.toggle("hamburger-list-expanded");
        this.nav.classList.toggle("hamburger-list-unexpanded");
    }
}
for (let i = 0; i < hamburger.el.length; i++) {
    hamburger.el[i].addEventListener("click", () => {
        hamburger.doToggle()
    })
}