const form = document.querySelector('#qeydiyyat');
const fnameInput = document.querySelector('#firstname');
const lnameInput = document.querySelector('#lastname');
const phoneInput = document.querySelector('#phone-number');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

let usersArray;
if (localStorage.getItem('users')) {
    usersArray = JSON.parse(localStorage.getItem('users'));
} else {
    usersArray = [];
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('.userData');
    let isEmpty = false;
    let emailUse = false;

    inputs.forEach(function (input) {
        if (input.value.length === 0) {
            isEmpty = true;
        }
    });

    // emailin yoxlanilmasi
    usersArray.forEach(function (value) {
        if (emailInput.value == value.email) {
            alert("Bu email artiq istifade olunub")
            emailUse = true;
        }

    })

    if (!isEmpty) {
        if (!emailUse) {


            const userObject = {
                firstname: fnameInput.value,
                lastname: lnameInput.value,
                phone: phoneInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                books:[]
            };

            usersArray.push(userObject);

            const jsonString = JSON.stringify(usersArray);

            localStorage.setItem('users', jsonString);

            window.location.reload();
        }

    } else {
        alert('Butun saheleri doldurun!');
    }

});