
import './assets/styles/home.css';
import loadMenu from './menu';


function createHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('tabcontent')

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const h1 = document.createElement('h1');
    h1.textContent = "Tired of Tacobell? Let Tres Tacos help you out";

    const p = document.createElement('p');
    p.textContent = "Delicious Tacos handmade for your enjoyment!";

    const chefImg = document.createElement('img');
    chefImg.src = '';
    chefImg.alt = '';

    const order = document.createElement('button');
    order.textContent = 'Order Online';
    order.classList.add('order-online');
    order.addEventListener('click', loadMenu);

    hero.appendChild(h1);
    hero.appendChild(p);
    hero.appendChild(order);

    homePage.appendChild(hero);
    
    return homePage;
}

function loadHome() { 
    const pageContent = document.getElementById('tab-content');
    pageContent.textContent = '';
    pageContent.appendChild(createHome());
}

export default loadHome;