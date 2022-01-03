import './assets/styles/contact.css';

function createContactForm() {
    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');

    // const form = document.createElement('form');

    // form heading
    const head = document.createElement('h2');
    head.innerHTML = 'Contact Us'
    formWrapper.appendChild(head);

    // horizontal line after heading
    const line = document.createElement('hr');
    formWrapper.appendChild(line);

    var linebreak = document.createElement('br');
    formWrapper.appendChild(linebreak);


    // name input field
    const nameLabel = document.createElement('label');
    nameLabel.innerHTML= "Your Name: ";
    nameLabel.classList.add('name-label');
    // formWrapper.appendChild(nameLabel);
    
    const nameElementInput = document.createElement('input');
    nameElementInput.setAttribute('type', 'text');
    nameElementInput.setAttribute('name', 'dname');
    nameElementInput.classList.add('name-input');
    // attaching the element to label
    nameLabel.appendChild(nameElementInput);
    formWrapper.appendChild(nameLabel);

    // Email input field
    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Your Email: ';
    emailLabel.classList.add('email-label');
    // formWrapper.appendChild(emailLabel);
  
    const emailElementInput = document.createElement('input');
    nameElementInput.setAttribute('type', 'text');
    nameElementInput.setAttribute('email', 'demail');
    emailElementInput.classList.add('email-input');
    // attaching the element to label
    emailLabel.appendChild(emailElementInput);
    formWrapper.appendChild(emailLabel);

    const messageLabel = document.createElement('label');
    messageLabel.innerHTML = 'Whatcha got to say?';
    messageLabel.classList.add('message-label');
    // formWrapper.appendChild(messageLabel);

    const messageElementInput = document.createElement('textarea');
    messageElementInput.setAttribute('type','text');
    messageElementInput.setAttribute('message','dmessage');
    messageElementInput.classList.add('message-input');
    messageLabel.appendChild(messageElementInput);
    formWrapper.appendChild(messageLabel);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.innerHTML = 'Submit';
    formWrapper.appendChild(submitBtn);




    return formWrapper;
}

function createContacts() {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    contactWrapper.appendChild(createContactForm());

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '610 123 4567';

    const address = document.createElement('p');
    address.textContent = '1 E. Penn Square, Philadelphia, PA';

    const location = document.createElement('img');
    location.src = './assets/imgs/restaurantLocation.png';
    location.alt = 'Tres Tacos is proudly from Filthadelphia :)';
    location.classList.add('location-img');

    contact.appendChild(phoneNum);
    contact.appendChild(address);
    contact.appendChild(location);

    contactWrapper.appendChild(contact);

    return contactWrapper;
}

function loadContact() {
    const pageContent = document.getElementById('tab-content');
    pageContent.textContent = '';
    pageContent.appendChild(createContacts());
}

export default loadContact;