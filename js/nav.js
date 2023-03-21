const toggleBtn = document.querySelector('#nav_toggle');
const lists = document.querySelector('.nav__lists');
const icons = document.querySelector('.nav__icons');

toggleBtn.addEventListener("click", ()=>{
    lists.classList.toggle('active');
    icons.classList.toggle('active');
})
