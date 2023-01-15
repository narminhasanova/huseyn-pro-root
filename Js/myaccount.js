const bookname = document.querySelector("#bookname");
const genre = document.querySelector("#bookgenre");
const price = document.querySelector("#bookprice");
const photo = document.querySelector("#bookphoto");
// add btn
const addButton = document.querySelector("#addBtn");


addButton.addEventListener('click', function () {
    // console.log('hello');

    const bookObj = {
        bookname: bookname.value,
        genre: genre.value,
        price: price.value,
        image: photo.value
    };

    const userArr = JSON.parse(localStorage.getItem('users'));
    let index = Number(localStorage.getItem('userIndex')); //string

    userArr[index].books.push(bookObj);
    window.location.reload();

    localStorage.setItem('users', JSON.stringify(userArr));
});



function viewBooks() {
    let text = `
    <div class="col-lg-3 mb-3">
        <div class="book d-flex">
            <div class="col-6">
                <img class="w-100" src="../images/Pineapple.jpg" alt="">
            </div>
            <div class="col-6">
                <p>Book name: </p>
                <p>Book genre: </p>
                <p>Book price: </p>
            </div>
        </div>
    </div>
    `
}