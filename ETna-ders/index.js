const resNav = document.getElementById('rs-nav')
const xmarkIcon = document.getElementById('xmark-icon')
const menuIcon = document.getElementById('menu-icon')

menuIcon.addEventListener('click', function () {
    resNav.classList.add('transform')  
})


xmarkIcon.addEventListener('click', function(){
    resNav.classList.remove('transform')
})

