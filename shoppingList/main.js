var myList = document.querySelector('ol');
const inputField = document.querySelector('.add_field');
const addBtn = document.querySelector('.add_btn');
const clearBtn = document.querySelector('.invisible');

addBtn.onclick = function() {
    let inputFieldValue = inputField.value;
    inputField.value = '';

    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const doneBtn = document.createElement('button');
    
    deleteBtn.setAttribute('class', 'delete_btn');
    deleteBtn.innerHTML = 'Delete';
    doneBtn.setAttribute('class', 'done_btn');
    doneBtn.innerHTML = 'Done';
    
    if (window.innerWidth < 640) {
        doneBtn.innerHTML = '&#10003;';
        deleteBtn.innerHTML = '	&#10006;';
    }

    listItem.appendChild(itemText);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(doneBtn);
    listItem.setAttribute('style', 'text-decoration: none');

    itemText.textContent = inputFieldValue + ' ';
    myList.appendChild(listItem);
    
    deleteBtn.onclick = function(e) {
        e.target.parentNode.parentNode.removeChild(listItem);
    }
    inputField.focus();
    clearBtn.classList.add('clear');
    clearBtn.onclick = function(e) {
        e.preventDefault;
        myList.innerHTML = '';
        clearBtn.classList.remove('clear');
    }
    doneBtn.onclick = function() {
        if (listItem.style.textDecoration === 'none') {
            listItem.style = 'text-decoration: line-through; color: #bbb';
            doneBtn.style.backgroundColor = '#eee';
        }
        else {
            listItem.style = 'text-decoration: none; color: #000';
            doneBtn.style.backgroundColor = '#fff';
        }
    }
}

// Add items by pressing enter when cursor is in input field
inputField.onkeydown = function(e) {
    if (e.keyCode === 13) {
        let inputFieldValue = inputField.value;
        inputField.value = '';

        const listItem = document.createElement('li');
        const itemText = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const doneBtn = document.createElement('button');
        
        deleteBtn.setAttribute('class', 'delete_btn');
        deleteBtn.innerHTML = 'Delete';
        doneBtn.setAttribute('class', 'done_btn');
        doneBtn.innerHTML = 'Done';
        
        if (window.innerWidth < 640) {
            doneBtn.innerHTML = '&#10003;';
            deleteBtn.innerHTML = '	&#10006;';
        }

        listItem.appendChild(itemText);
        listItem.appendChild(deleteBtn);
        listItem.appendChild(doneBtn);
        listItem.setAttribute('style', 'text-decoration: none');

        itemText.textContent = inputFieldValue + ' ';
        myList.appendChild(listItem);
        
        deleteBtn.onclick = function(e) {
            e.target.parentNode.parentNode.removeChild(listItem);
        }
        inputField.focus();
        clearBtn.classList.add('clear');
        clearBtn.onclick = function(e) {
            e.preventDefault();
            myList.innerHTML= '';
            clearBtn.classList.remove('clear');
        }
        doneBtn.onclick = function() {
            if (listItem.style.textDecoration === 'none') {
                listItem.style = 'text-decoration: line-through; color: #bbb';
                doneBtn.style.backgroundColor = '#eee';
            }
            else {
                listItem.style = 'text-decoration: none; color: #000';
                doneBtn.style.backgroundColor = '#fff';
            }
        }
    }
}
// To do:
// перенос текста в ли на новую строку, чтобы не ломалась разметка у кнопок
// динамическое изменение содержимого кнопок ли при иизменении размера экрана