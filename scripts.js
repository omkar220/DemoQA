// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DemoQA Clone loaded');

    const form = document.getElementById('demo-form');
    const alertButton = document.getElementById('alertButton');
    const clickButton = document.getElementById('clickButton');
    const clickMessage = document.getElementById('clickMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Form submitted! Name: ${name}`);
    });

    alertButton.addEventListener('click', () => {
        alert('This is a demo alert!');
    });

    clickButton.addEventListener('click', () => {
        clickMessage.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
  document.addEventListener ('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Form submitted! Name: ${name}`);
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.heading');
    const content = document.querySelector('.form-check');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.H2');
    const content = document.querySelector('.name-radio-container');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.H3');
    const content = document.querySelector('.btn');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.H4');
    const content = document.querySelector('.lnk');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.f');
    const content = document.querySelector('.signup-container');

    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

function redirect() {
    window.location.href = 'https://sqaguru.co.in/technologies/';
}

/*document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Basic validation (you can add more comprehensive validation as needed)
    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
        return;
    }

    // Here you would typically send the data to the server
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form fields
    document.getElementById('signupForm').reset();

    // Display a success message or redirect the user
    alert('Signup successful!');
});
*/

