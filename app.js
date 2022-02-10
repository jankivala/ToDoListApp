const addBtnHandler = document.querySelector('.addBtn');
const container = document.querySelector('.container');
const input = document.getElementById('input-text');
const ul = document.querySelector('.list');

function toDo () {
    const list = input.value;

    if (!list) {
        alert('Please enter something');
        return;
    }

    const listElement = document.createElement('li');
    listElement.className = 'listitem';
    listElement.innerHTML = list;

    console.log(listElement);
    ul.appendChild(listElement);

    ul.onclick = function () {
        ul.className.remove('listitem');
    }

    const dltBtn = document.createElement('button');
    dltBtn.className = 'delete';
    dltBtn.innerHTML = 'DELETE';

    listElement.appendChild(dltBtn);

    dltBtn.addEventListener('click', () => {
        ul.removeChild(listElement);
    })

    input.value = '';
}

addBtnHandler.addEventListener('click', toDo);