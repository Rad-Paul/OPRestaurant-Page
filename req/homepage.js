import leftCake from '../images/cake.png'
import rightCake from '../images/cake2.png'
import img1 from '../images/1.jpeg'
import img2 from '../images/1.png'
import img3 from '../images/2.jpeg'
import img4 from '../images/3.jpeg'
import img5 from '../images/4.jpeg'
import img6 from '../images/4.jpg'
import img7 from '../images/5.jpeg'
import img8 from '../images/6.jpeg'
import catImage from '../images/animal.png'
export default function loadHomePage(){
    console.log('homepage loaded!')
    let mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    console.log(mainContainer)
    let homepageContainer = document.createElement('div')
    homepageContainer.classList.add('homepage')

    createFrontDiv()
    createSampleMenu()

    mainContainer.appendChild(homepageContainer)

    function createFrontDiv(){
        let introduction = document.createElement('div')
        introduction.classList.add('home-main')

        let leftIconC = document.createElement('div')
        let leftIcon = document.createElement('img')
        leftIcon.src = leftCake
        leftIconC.appendChild(leftIcon)

        introduction.appendChild(leftIconC)

        let middleText = document.createElement('div')
        middleText.textContent = 'For all your sweetest desires!'
        middleText.classList.add('home-front-text')
        introduction.appendChild(middleText)

        let rightIconC = document.createElement('div')
        let rightIcon = document.createElement('img')
        rightIcon.src = rightCake
        rightIconC.appendChild(rightIcon

        )
        introduction.appendChild(rightIconC)

        homepageContainer.appendChild(introduction)
    }

    function createSampleMenu(){
        let sampleMenuContainer = document.createElement('div')
        sampleMenuContainer.classList.add('home-menu')

        let imagesContainer = document.createElement('div')
        imagesContainer.classList.add('home-images')
        let images = [img1, img2, img3, img4, img5, img6, img7, img8]
        images.forEach(image => {
            let newImage = document.createElement('img')
            newImage.src = image
            imagesContainer.appendChild(newImage)
        });
        sampleMenuContainer.appendChild(imagesContainer)

        homepageContainer.appendChild(sampleMenuContainer)

    }
}