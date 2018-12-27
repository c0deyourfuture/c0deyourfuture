let test = () => {
    console.log("test")
}
let hamburgerBarEl = document.getElementsByClassName("hamburger__bar");
for(let i=0;i<hamburgerBarEl.length; i++){
    hamburgerBarEl[i].addEventListener("click",function(){
        document.getElementById("header-list").classList.toggle("disp-none")
    })
}