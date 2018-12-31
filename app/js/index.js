let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for (let i = 0; i < hamburgerBarEl.length; i++) {
    hamburgerBarEl[i].addEventListener("click", function () {
        document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        document.getElementById("header-list").classList.remove("display-none");
        document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}


cardsEl = document.getElementsByClassName("card");
cardsImgEl = document.getElementsByClassName("card-img");
let lazyLoading = new Promise(function (resolve, reject) {

    document.addEventListener("DOMContentLoaded", () => {
        resolve();
    })
})
let lazyLoadingAnim = (el) => {
    if (el.offsetTop <= window.innerHeight + window.scrollY) {
        el.classList.add("card-animation");
        
    }
}
let lazyLoadingImg = (el) => {
    if (el.offsetTop <= window.innerHeight + window.scrollY) {
    el.src = el.dataset.src;
    
    }
}
lazyLoading.then(function () {

    for (let i = 0; i < cardsEl.length; i++) {
            lazyLoadingAnim(cardsEl[i]);
            lazyLoadingImg(cardsImgEl[i]);
    }
})
lazyLoading.then(function (resolve, reject) {
    for (let i = 0; i < cardsEl.length; i++) {
        window.addEventListener("scroll", function () {
            lazyLoadingAnim(cardsEl[i]);
            lazyLoadingImg(cardsImgEl[i]);

        })

    }
})