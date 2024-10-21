document.getElementById('addButton').addEventListener('click', addOpinion);

function addOpinion() {
    const opinionInput = document.getElementById('opinionInput');
    const opinionText = opinionInput.value.trim();
    
    if (opinionText) {
        const opinionList = document.getElementById('opinionList');
        const listItem = document.createElement('li');
        listItem.textContent = opinionText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            opinionList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        opinionList.appendChild(listItem);
        opinionInput.value = '';
    }
}


document.addEventListener('DOMContentLoaded', loadOpinions);

function loadOpinions() {
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.forEach(opinion => {
        addOpinionToList(opinion);
    });
}

function addOpinion() {
    const opinionInput = document.getElementById('opinionInput');
    const opinionText = opinionInput.value.trim();

    if (opinionText) {
        addOpinionToList(opinionText);
        saveOpinionToLocalStorage(opinionText);
        opinionInput.value = '';
    }
}

function addOpinionToList(opinionText) {
    const opinionList = document.getElementById('opinionList');
    const listItem = document.createElement('li');
    listItem.textContent = opinionText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        opinionList.removeChild(listItem);
        removeOpinionFromLocalStorage(opinionText);
    };

    listItem.appendChild(deleteButton);
    opinionList.appendChild(listItem);
}

function saveOpinionToLocalStorage(opinionText) {
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.push(opinionText);
    localStorage.setItem('opinions', JSON.stringify(opinions));
}

function removeOpinionFromLocalStorage(opinionText) {
    let opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions = opinions.filter(opinion => opinion !== opinionText);
    localStorage.setItem('opinions', JSON.stringify(opinions));
}
