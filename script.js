AOS.init()
const $scrollButton = document.getElementById('greyButton')
const $menu = document.getElementById('menu')

let menuToggle = false

$scrollButton.addEventListener('click', function(){

    if (menuToggle === false){
        $menu.style.display = 'block'
        menuToggle = true
    } else if(menuToggle === true){
        $menu.style.display = 'none'
        menuToggle = false
    }
})

window.addEventListener('resize', function(){
    if(window.innerWidth >= 768){
        $nav.style.display = 'none'
        menuToggle = false
    }
})