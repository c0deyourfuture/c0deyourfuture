let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for (let i = 0; i < hamburgerBarEl.length; i++) {
    hamburgerBarEl[i].addEventListener("click", function () {

        //document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        //document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}

let hamburger = {
    el: document.getElementsByClassName("hamburger"),
    nav: document.getElementById("header-list"),
    cont: document.getElementsByClassName("container")[0],
    doToggle() {

        this.cont.classList.toggle("hamburger-container-expanded");
        this.cont.classList.toggle("hamburger-container-unexpanded");
        this.nav.classList.toggle("hamburger-list-expanded");
        this.nav.classList.toggle("hamburger-list-unexpanded");
        this.el[0].classList.toggle("hamburger-barAnimation");
    }
}
    hamburger.el[0].addEventListener("click", () => {
        hamburger.doToggle()
    })
