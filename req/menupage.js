import '../css/menu.css'
import testImage from '../images/test.jpeg'

export default function loadMenuPage(){
    console.log('Menu page loaded!')

    let mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    let menuPageContainer = document.createElement('div')
    menuPageContainer.classList.add('menupage')

    let name = 'TEST'
    let ingredients = ['starcraft', 'sauce', 'salmonella', 'disrespect', 'mayonnaise']
    for (let index = 0; index < 8; index++) {

        let newMenuItem = createMenuItem(name, testImage, ingredients, 69.99)
        menuPageContainer.appendChild(newMenuItem)
    }

    mainContainer.appendChild(menuPageContainer)

    function createMenuItem(dishName, imageRef, ingredients, price){
        let menuItemContainer = document.createElement('div')
        menuItemContainer.classList.add('menuitem')

        let dishNameC = document.createElement('div')
        dishNameC.textContent = dishName
        menuItemContainer.appendChild(dishNameC)

        let dishRelatedC = document.createElement('div')
        dishRelatedC.classList.add('iteminfo')
        let dishImg = document.createElement('img')
        dishImg.src = imageRef
        dishRelatedC.appendChild(dishImg)

        let dishInfo = document.createElement('div')
        dishInfo.classList.add('priceandingredients')

        let priceC = document.createElement('div')
        priceC.textContent = 'Price: ' + price
        dishInfo.appendChild(priceC)

        let ingredientsC = document.createElement('div')
        let toR = 'Ingredients: '
        for (let i = 0; i < ingredients.length; i++) {
            const element = ingredients[i];
            toR += element + ', '
        }
        ingredientsC.textContent = toR
        dishInfo.appendChild(ingredientsC)

        dishRelatedC.appendChild(dishInfo)

        menuItemContainer.appendChild(dishRelatedC)
        return menuItemContainer
    }
}