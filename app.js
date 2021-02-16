const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookNumber = document.querySelector('.book-number');
const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('.table');
const alertContainer = document.querySelector('.alert');

submitBtn.addEventListener('click', createElements)

function createElements(event) {

    event.preventDefault();
    // check input validity
    if (title.value === '' || author.value === '' || bookNumber.value === '') {
        alert('incomplete input, please enter value');
        return
    }
    if (isNaN(bookNumber.value)) {
        alert('Enter Book number!')
        return
    }

    // geting the input values
    const titleValue = title.value;
    const authorValue = author.value;
    const bookNumberValue = bookNumber.value;

    // creating and appending the table elements
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = titleValue;
    let td2 = document.createElement('td');
    td2.innerText = authorValue;
    let td3 = document.createElement('td');
    td3.innerText = bookNumberValue;
    let td4 = document.createElement('td');
    let tableBtn = document.createElement('button');
    tableBtn.innerHTML = '<i class="fas fa-times"></i>'
    tableBtn
        .classList
        .add('table-btn');
    td4.appendChild(tableBtn);
    tableBtn.addEventListener('click', function (event) {
        event
            .target
            .parentElement
            .parentElement
            .remove();

        // alert danger
        alertContainer
            .classList
            .add('danger');
        alertContainer.innerText = 'Book Removed!'
        // removing danger alert
        setTimeout(function () {
            alertContainer
                .classList
                .remove('danger');
        }, 3000)
    })
    tr.append(td1, td2, td3, td4);
    table.appendChild(tr);

    // alert success
    alertContainer.innerText = 'Book Added to List.'
    alertContainer
        .classList
        .add('success');
    // removing success alert
    setTimeout(function () {
        alertContainer
            .classList
            .remove('success');
    }, 3000)

    // clearing input values
    title.value = '';
    author.value = '';
    bookNumber.value = '';

}
