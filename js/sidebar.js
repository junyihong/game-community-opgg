const sideBar = document.querySelector(".sidebar")
const sideBarInner = document.querySelector(".sidebar__inner")
document.body.onscroll = function(){
    var scroll = window.scrollY;
        console.log(scroll);
        if(scroll >= 265) {
            sideBar.style.position = 'relative';
            sideBarInner.classList.add("affixed");
        } else {
            sideBarInner.classList.remove("affixed");
        }
    }
