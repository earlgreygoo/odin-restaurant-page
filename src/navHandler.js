import { about } from "./about";
import { homepage } from "./homepage";
import { menu } from "./menu";


let content = document.querySelector("div")


const homeDiv = document.createElement("div");
homeDiv.innerHTML = homepage;

const menuDiv = document.createElement("div")
menuDiv.innerHTML = menu;

const aboutDiv = document.createElement('div');
aboutDiv.innerHTML = about;






function clearpage(){
    if(homeDiv.parentNode){
        homeDiv.parentNode.removeChild(homeDiv)
    } 
    if(menuDiv.parentNode){
        menuDiv.parentNode.removeChild(menuDiv)
    }
    if(aboutDiv.parentNode){
        aboutDiv.parentNode.removeChild(aboutDiv)
    }
    
}

function setSelectedStyle(domElement){
    domElement.classList.add('selected')
}
function removeStyle(dom1,dom2){
    dom1.classList.remove('selected');
    dom2.classList.remove('selected')
}


function navHandler(option) {
    switch(option){
        case 'homepage':
            clearpage();
            content.appendChild(homeDiv);
            break;
        case 'menu': 
            clearpage();
            content.appendChild(menuDiv);
            break;
        case 'about': 
            clearpage();
            content.appendChild(aboutDiv)
            break;
    }
}


function eventListenerSetup(){
    let homeButton = document.querySelector('#toHome');
    let menuButton = document.querySelector('#toMenu');
    let aboutButton = document.querySelector('#toAbout');


    homeButton.addEventListener('click', ()=> {
        
        navHandler('homepage');
        setSelectedStyle(homeButton);
        removeStyle(menuButton,aboutButton)
    })
    menuButton.addEventListener('click', ()=> {
        navHandler('menu')
        setSelectedStyle(menuButton);
        removeStyle(homeButton,aboutButton)
    })
    aboutButton.addEventListener('click', ()=> {
        navHandler('about')
        setSelectedStyle(aboutButton);
        removeStyle(homeButton,menuButton)
    })
}


export {navHandler, eventListenerSetup}