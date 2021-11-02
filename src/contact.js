function createContacts() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '610 123 4567';

    const address = document.createElement('p');
    address.textContent = '1 E. Penn Square, Philadelphia, PA';

    const location = document.createElement('img');
    location.src = './assets/imgs/restaurantLocation.png';
    location.alt = 'Tres Tacos is proudly from Filthadelphia :)';

    contact.appendChild(phoneNum);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

function loadContact() {
    const pageContent = document.getElementById('tab-content');
    pageContent.textContent = '';
    pageContent.appendChild(createContacts());
}

export default loadContact;