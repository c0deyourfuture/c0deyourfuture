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
let lazyLoadingAnim = (index) => {
    if (cardsEl[index].offsetTop <= window.innerHeight + window.scrollY) {
        cardsEl[index].classList.add("card-animation");
        
    }
}
let lazyLoadingImg = (index) => {
    if (cardsEl[index].offsetTop <= window.innerHeight + window.scrollY) {
    cardsImgEl[index].src = cardsImgEl[index].dataset.src;
    
    }
}
lazyLoading.then(function () {

    for (let i = 0; i < cardsEl.length; i++) {
        
            lazyLoadingAnim(i);
            lazyLoadingImg(i);
        
    }
})
lazyLoading.then(function (resolve, reject) {
    for (let i = 0; i < cardsEl.length; i++) {
        window.addEventListener("scroll", function () {
            lazyLoadingAnim(i);
            lazyLoadingImg(i);

        })

    }
})