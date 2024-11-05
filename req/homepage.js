
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
    
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('home-logo')
        logoContainer.textContent = 'LOGO'
        introduction.appendChild(logoContainer)
    
        let mainParagraph = document.createElement('p')
        mainParagraph.classList.add('home-p')
        mainParagraph.textContent = 'PLACEHOLDER TEXT'
        introduction.appendChild(mainParagraph)


        homepageContainer.appendChild(introduction)
    }

    function createSampleMenu(){
        let sampleMenuContainer = document.createElement('div')
        sampleMenuContainer.classList.add('home-menu')

        homepageContainer.appendChild(sampleMenuContainer)
    }
}