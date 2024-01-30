/*<header>
        <img src="../src/images/coffeeLogoMain.jpg" id="header-logo">
        <nav>
            <button>home</button>
            <button>menu</button>
            <button>about</button>
        </nav>  
    </header>
*/
import coffeeLogo from "./images/coffeeLogoMain.jpg";

const logo = new Image();
logo.src = coffeeLogo;
logo.setAttribute('id','header-logo')
const header = document.createElement("header");



header.innerHTML = `
<nav>
    <button id="toHome">home</button>
    <button id="toMenu">menu</button>
    <button id="toAbout">about</button>
</nav>`

header.prepend(logo)

export {header}