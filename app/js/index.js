let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for(let i=0;i<hamburgerBarEl.length; i++){
    hamburgerBarEl[i].addEventListener("click",function(){
        document.getElementById("header-list").classList.toggle("hamburger-animation-close");
        document.getElementById("header-list").classList.remove("display-none");
        document.getElementById("header-list").classList.toggle("hamburger-animation-open");
    })
}