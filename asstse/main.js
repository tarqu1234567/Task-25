let bars = document.querySelector(".bars")
let navber = document.querySelector(".navber")

bars.addEventListener("click", () => {
if(navber.style.display == "none")
{
    navber.style.display = "block"

}
else{
    navber.style.display = "none" 
}

})


// scroll top


let myBtn = document.querySelector(".btn_scroll")


window.onscroll = function () {
    'use strict'
    if (window.pageYOffset >= 500) {
        myBtn.style.display = "block";

    }
    else {
        myBtn.style.display = "none";

    }


}

myBtn.onclick = function () {
    'use strict'
    window.scrollTo(0, 0);

}