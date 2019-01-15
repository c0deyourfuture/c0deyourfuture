window.addEventListener("scroll", () =>{
    if(window.scrollY >= 50){
        document.getElementsByClassName("header")[0].classList.add("header__scrolled")
    }
    else{
        document.getElementsByClassName("header")[0].classList.remove("header__scrolled")
   
    }
})