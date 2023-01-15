const spanUsername = document.querySelector('.username');
const qeydiyyatLinkiNavbar = document.querySelector('.qeydiyyat');
const logOutBtn = document.querySelector('.logout');
const userLabel = document.querySelector('.user-data');
const myprofile = document.querySelector('.myprofile')

if (localStorage.getItem('CurrentUser')) {
    let user = localStorage.getItem('CurrentUser');
    spanUsername.innerText = user;

    qeydiyyatLinkiNavbar.classList.add('d-none');
} else {
    mainPageReset();
}

logOutBtn.addEventListener('click', function () {
    mainPageReset();
    localStorage.removeItem('CurrentUser');
});

function mainPageReset() {
    logOutBtn.classList.add('d-none');
    qeydiyyatLinkiNavbar.classList.remove('d-none');
    userLabel.classList.add('d-none');
}
