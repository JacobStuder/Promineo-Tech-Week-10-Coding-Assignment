let id = 0;

document.getElementById('add-name-button').addEventListener('click', () => { //function to register input submission
    let table = document.getElementById('name')
    let row = table.insertRow(1); //row to display user input
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = document.getElementById('picture-select').value; //row column to display user form selection
    row.insertCell(1).innerHTML = document.getElementById('add-name').value; //row column to display user input
    let actions = row.insertCell(2); //row column to display delete button function
    actions.appendChild(createDeleteButton(id++)); //to create delete button along with user input
    document.getElementById('add-name').value = '';
});

function createDeleteButton(id) { //function to create delete button along with user input
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => { //function to register the delete function when clicking
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}