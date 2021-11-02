// Index.js will be the initial page load script
// 
import './assets/styles/index.css';
import tacoLogo from './assets/imgs/logo.png';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact.js';



function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    
    const restName = document.createElement('h1');
    restName.textContent = text;
    
    const logo = document.createElement('img');
    logo.src = tacoLogo;
    logo.classList.add('logo');
       
    header.classList.add('header');
    header.appendChild(logo);
    header.appendChild(restName);

    return header;
}
// Function to create buttons
function makeBtns(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.classList.add('tablinks');
    btn.textContent = text;

    return btn;    
}
// creates navagation buttons, depends on MakeBtns function, load after makeBtns()
function createNavBar(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = makeBtns('homeTab', 'Home');
    // homeBtn.classList.add('active');
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        loadHome();
    });
    // const aboutBtn = makeBtns('about', 'About');
    const menuBtn = makeBtns('menuTab', 'Menu');
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        loadMenu();
    });
    const contactBtn = makeBtns('contactTab', 'Contact');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}
// main content area
function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);

    return main;
}
// create a footer
function createFooter(){
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    const h3 = document.createElement('h3');
    h3.textContent = 'Made with ♥ by Josh Newell';
    h3.classList.add('footerH3');
    footer.appendChild(h3);
    const github = document.createElement('a');
    github.href = 'https://github.com/J-Newell0';
    github.textContent = 'Check out my Github!';
    github.classList.add('github-redirect');
    footer.appendChild(github);

    return footer;
}


// when a nav button is clicked, look at all buttons and everything that wasn't clicked
// remove the active class, then add acive class to the button that was clicked
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.tablinks');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}


function loadIndex() {
    // naming content wrapper
    const content = document.getElementById('content');
    // Header and  navagation load
    const nav = createNavBar('nav');
    const header = createHeader('header', 'Tres Tacos!');
    header.appendChild(nav);
    content.appendChild(header);
    // load pages-content
    const pageContent = createMain('tab-content');
    content.appendChild(pageContent);
    // personal footer
    const footer = createFooter();
    content.appendChild(footer);    
}

export default loadIndex();