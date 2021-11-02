// import './index.js';

function createHome() {
    // const pageContent = document.getElementById('tab-content');
   
    const homePage = document.createElement('div');
    homePage.classList.add('tabcontent')

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const h1 = document.createElement('h1');
    h1.textContent = "Tired of Tacobell? Let Tres Tacos help you out";

    const p = document.createElement('p');
    p.textContent = "Delicious Tacos handmade for your enjoyment!";

    const order = document.createElement('a');
    order.textContent = 'Order Online';
    // order.setAttribute('data-tab-target="#menu"');
    order.classList.add('order-online');

    hero.appendChild(h1);
    hero.appendChild(p);
    hero.appendChild(order);

    homePage.appendChild(hero);

    // pageContent.appendChild(homePage);
    
    return homePage;
}

function loadHome() { 
    const pageContent = document.getElementById('tab-content');
    pageContent.textContent = '';
    pageContent.appendChild(createHome());
}

export default loadHome;