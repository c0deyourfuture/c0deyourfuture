let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for (let i = 0; i < hamburgerBarEl.length; i++) {
    hamburgerBarEl[i].addEventListener("click", function () {
        document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        document.getElementById("header-list").classList.remove("d-none");
        document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}


let cardsEl = document.getElementsByClassName("card");
let cardsImgEl = document.getElementsByClassName("card-img");

let thirdSectionEl = document.getElementsByClassName("third-section__article");
let thirdSectionImgEl = document.getElementsByClassName("third-section__image")
let lazyLoadingCard = new Promise(function (resolve, reject) {

    document.addEventListener("DOMContentLoaded", () => {
        resolve();
    })
})
let lazyLoadingAnim = (el, animName) => {

    if (el.offsetTop <= window.innerHeight + window.scrollY) {
        el.classList.remove("invisible");
        el.classList.add(animName);
    }
}
let lazyLoadingCardImg = (imgEl, contEl) => {
    if (contEl.offsetTop <= window.innerHeight + window.scrollY) {
        imgEl.src = imgEl.dataset.src;
    }
}


for (let i = 0; i < document.getElementsByClassName("third-section__article").length; i++) {
    console.log(document.getElementsByClassName("third-section__article")[i]);
 
    window.addEventListener("scroll", () => {
        lazyLoadingAnim(document.getElementsByClassName('third-section__article')[i])
    
    })
}
window.addEventListener("scroll", () => {

    for (let i = 0; i < cardsEl.length; i++) {
            lazyLoadingAnim(cardsEl[i], "card-animation");
            lazyLoadingCardImg(cardsImgEl[i], cardsEl[i]);
    }
    for (let i = 0; i < cardsEl.length; i++) {
        lazyLoadingAnim(cardsEl[i], "card-animation");
        lazyLoadingCardImg(cardsImgEl[i], cardsEl[i]);
    }


})