const addBtn = document.querySelector('.addBtn');
const input = document.getElementById('input-text');
const container = document.querySelector('.container'); 

function toDo () {
        const task = input.value;

        if (!task) {
            alert('Please enter a task');
            return;
        }

        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        console.log(itemElement);

        const inputValue = document.createElement('input');
        inputValue.disabled = true;
        inputValue.classList.add('inputItem');
        inputValue.type = 'text';
        inputValue.value = task;

        container.appendChild(itemElement);
        itemElement.appendChild(inputValue);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'DELETE';
        deleteBtn.classList.add('deleteBtn');

        itemElement.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            container.removeChild(itemElement);
        });

        input.value = '';
}

addBtn.addEventListener('click', toDo);
