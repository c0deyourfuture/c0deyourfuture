let cardsEl = document.getElementsByClassName("card");
let cardsImgEl = document.getElementsByClassName("card-img");

let lastSecEl = document.getElementsByClassName("last-sec__article");
let lastSecImgEl = document.getElementsByClassName("last-sec__image")

let lazyLoadingAnim = (el, animName) => {

    if (el.offsetTop <= window.innerHeight + window.scrollY) {
        el.classList.remove("invisible");
        el.classList.add(animName);
    }
}
let lazyLoadingImg = (imgEl, contEl) => {
    if (contEl.offsetTop + 50  <= window.innerHeight + window.scrollY) {
        imgEl.src = imgEl.dataset.src;
    }
}
(function () {
    for (let i = 0; i < cardsEl.length; i++) {
        lazyLoadingAnim(cardsEl[i], "card-animation");
        lazyLoadingImg(cardsImgEl[i], cardsEl[i]);
    }
    for (let i = 0; i < cardsEl.length; i++) {
        lazyLoadingAnim(cardsEl[i], "card-animation");
        lazyLoadingImg(cardsImgEl[i], cardsEl[i]);
    }
    for (let i = 0; i < document.getElementsByClassName("last-sec__article").length; i++) {
        lazyLoadingImg(lastSecImgEl[i], lastSecEl[i])
        if (i % 2 == 0) {
            lazyLoadingAnim(lastSecEl[i], "last-sec-right-anim");

        } else {
            lazyLoadingAnim(lastSecEl[i], "last-sec-left-anim");
        }
    }
})()

window.addEventListener("scroll", () => {

    for (let i = 0; i < cardsEl.length; i++) {
        lazyLoadingAnim(cardsEl[i], "card-animation");
        lazyLoadingImg(cardsImgEl[i], cardsEl[i]);
    }
    for (let i = 0; i < cardsEl.length; i++) {
        lazyLoadingAnim(cardsEl[i], "card-animation");
        lazyLoadingImg(cardsImgEl[i], cardsEl[i]);
    }
    for (let i = 0; i < document.getElementsByClassName("last-sec__article").length; i++) {
        lazyLoadingImg(lastSecImgEl[i], lastSecEl[i])
        if (i % 2 == 0) {
            lazyLoadingAnim(lastSecEl[i], "last-sec-right-anim");
        } else {
            lazyLoadingAnim(lastSecEl[i], "last-sec-left-anim");
        }
    }

})