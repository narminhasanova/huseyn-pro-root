const loginForm = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let arr = JSON.parse(localStorage.getItem('users'));

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let userVar = false;
    for (let i = 0; i < arr.length; i++) {
        if (email.value == arr[i].email) {
            userVar = true;
            if (password.value == arr[i].password) {
                alert('Hesaba ugurla daxil oldunuz!');
                localStorage.setItem("CurrentUser", arr[i].firstname)
                // localStorage.setItem("UserEmail", arr[i].email)
                localStorage.setItem('userIndex', i);
                window.location.assign("../index.html")
            } else {
                alert('Yanlish parol!');
            }
        }
    }
    if (!userVar) {
        alert('Bele istifadeci yoxdur!');
    }
});