let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for (let i = 0; i < hamburgerBarEl.length; i++) {
    hamburgerBarEl[i].addEventListener("click", function () {
        
        //document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        //document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}

let hambureger ={
    el: document.getElementsByClassName("hamburger__bar"),
    nav: document.getElementById("header-list"),
    doToggle(){
        this.nav.classList.toggle("expanded")
    }
}

let cardsEl = document.getElementsByClassName("card");
let cardsImgEl = document.getElementsByClassName("card-img");


let colors = [
    'light-blue', 'violet', 'red', 'yellow', 'blue', 'green'
];

let thirdSectionEl = document.getElementsByClassName("last-sec__article");
let thirdSectionImgEl = document.getElementsByClassName("last-sec__image")
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

let lazyLoadingLastSecImg = (i) => {
    if (document.getElementsByClassName("last-sec__article")[i].offsetTop <= window.innerHeight + window.scrollY) {
        document.getElementsByClassName("last-sec__image")[i].classList.add(`last-sec__image--${colors[i]}`)
    }
}

for (let i = 0; i < document.getElementsByClassName("last-sec__article").length; i++) {
    
    window.addEventListener("scroll", () => {
        lazyLoadingLastSecImg(i);
        if(i%2==0){
            lazyLoadingAnim(document.getElementsByClassName('last-sec__article')[i], "last-sec-right-anim");
        }
        else{
            lazyLoadingAnim(document.getElementsByClassName('last-sec__article')[i], "last-sec-left-anim");
        }
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