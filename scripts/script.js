const btnMenu = document.querySelector('header nav button')
const menuNav = document.querySelector('body > section')
const closeBtn = document.querySelector('body > section article button')

btnMenu.addEventListener('click', ()=>{
    menuNav.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{

    menuNav.classList.remove('active')
})