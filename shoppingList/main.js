var myList = document.querySelector('ol');
const inputField = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
const clearBtn = document.querySelector('.invisible');

addBtn.onclick = function() {
    let inputFieldValue = inputField.value;
    inputField.value = '';

    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const doneBtn = document.createElement('button');
    
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    doneBtn.setAttribute('class', 'done-btn');
    doneBtn.textContent = 'Done';

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
            listItem.style.textDecoration = 'line-through';
            doneBtn.style.backgroundColor = '#eee';
        }
        else {
            listItem.style.textDecoration = 'none';
            doneBtn.style.backgroundColor = '#fff';
        }

}

inputField.onkeydown = function(e) {
    if (e.keyCode === 13) {
        let inputFieldValue = inputField.value;
        inputField.value = '';

        const listItem = document.createElement('li');
        const itemText = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const doneBtn = document.createElement('button');
        
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete';
        doneBtn.setAttribute('class', 'done-btn');
        doneBtn.textContent = 'Done';

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
                listItem.style.textDecoration = 'line-through';
                doneBtn.style.backgroundColor = '#eee';
            }
            else {
                listItem.style.textDecoration = 'none';
                doneBtn.style.backgroundColor = '#fff';
            }
        }
    }
}
