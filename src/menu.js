// import and attach img source names
import guac from "./assets/imgs/menuitems/guacandchips.jpg";
import dippytacos from "./assets/imgs/menuitems/dippytacos.jpg";
import spicytacos from "./assets/imgs/menuitems/spicytacos.jpg";
import tacoandbeans from "./assets/imgs/menuitems/tacoriceandbeans.jpg";

import './assets/styles/menu.css';
import './index.js';

function addMenuItem(name, description, srcName) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemImage = document.createElement('img');
    itemImage.classList.add('food-img');
    itemImage.src = srcName;
    itemImage.alt = `${name}`;

    const itemName = document.createElement('h2');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = description; 

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function makeMenu() {
    // Creates and names menu container
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // calls addMenuItem and passes the item name and description
    // Then appends this card to the menu container
    menu.appendChild(addMenuItem('Chips and Guacamole','Warm chips and homemade guac!', guac));
    menu.appendChild(addMenuItem('Barria Tacos','Delicious pork Barria Tacos!', dippytacos));
    menu.appendChild(addMenuItem('Spicy Chorizo Tacos','Habanero and chorizo tacos. WARNING: SPICY', spicytacos));
    menu.appendChild(addMenuItem('The Full Plate','Three Tacos served with rice and refried beans', tacoandbeans));

    return menu;
}

function loadMenu(){ 
    const menuContent = document.getElementById('content');
    menuContent.appendChild(makeMenu());
}

export default loadMenu();