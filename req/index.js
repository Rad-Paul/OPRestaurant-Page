import '../css/styles.css'
import '../css/home.css'
import loadHomePage from './homepage'
import loadMenuPage from './menupage'
import loadAboutPage from './aboutpage'

const addEventListeners = () => {
    let buttons = document.getElementsByTagName('button')
    buttons[0].addEventListener('click', loadHomePage)
    buttons[1].addEventListener('click', loadMenuPage)
    buttons[2].addEventListener('click', loadAboutPage)
}

loadHomePage()
addEventListeners()
