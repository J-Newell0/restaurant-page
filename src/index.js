// Index.js will be the initial page load script
// 

function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}
// Function to create buttons
function makeBtns(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('pages');
    return btn;    
}
// creates navagation buttons, depends on MakeBtns function, load after makeBtns()
function createNavBar(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = makeBtns('home', 'Home');
    const aboutBtn = makeBtns('about', 'About');
    const menuBtn = makeBtns('menu', 'Menu');
    const contactBtn = makeBtns('contact', 'Contact');

    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
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
function createFooter(id, text){
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}


function loadHome() {
    // naming content wrapper
    const content = document.getElementById('content');
    // Header load
    const header = createHeader('header', 'Tres Tacos!');
    content.appendChild(header);
    //  navagation load
    const nav = createNavBar('nav');
    content.appendChild(nav);
    // load pages-content
    const pageContent = createMain('page-content');
    content.appendChild(pageContent);
    // personal footer
    const footer = createFooter('footer', 'Made with ❤ by Josh N');
    content.appendChild(footer);    
}

export default loadHome;