const inputBox = document.getElementById('input-box');
const listConatiner = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
         alert("You must write something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listConatiner.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); 
        savedata();
    }
}, false)

function savedata() {
    localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask() {
    listConatiner.innerHTML = localStorage.getItem("data")
}
showTask();