let addButton;
let copyDivTask;
let pasteDivTask;
let textFieldSpan;
let spanTextContent;
let okButton;
let parentObject;
let inputField;
let editButton;
let confirmButton;
let checkBoxButton;
let completeButton;
addButton = document.getElementById("AddButton");
addButton.addEventListener('click', CreateFields);

function CreateFields() {
    copyDivTask = document.getElementById("DivTask");
    pasteDivTask = copyDivTask.cloneNode(true);
    document.body.appendChild(pasteDivTask);
    pasteDivTask.classList.remove('hidden');

    okButton = pasteDivTask.querySelector("#okButton");
    okButton.addEventListener('click', function(event) {
        OkButton(event);
    });
}

function OkButton(event) {
    okButton = event.target;
    parentObject = okButton.parentElement; 

    textFieldSpan = document.createElement('span');
    inputField = parentObject.querySelector("#InputField");
    spanTextContent = inputField.value;
    textFieldSpan.classList.add("span");

    textFieldSpan.textContent = spanTextContent;
    if (pasteDivTask != null) {
        parentObject.appendChild(textFieldSpan);
        
    }
    editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add("editbutton");
    parentObject.appendChild(editButton);

    parentObject.className = "Task";
    okButton.remove();
    inputField.classList.add("hidden");

    editButton = parentObject.querySelector(".editbutton");
    editButton.addEventListener('click', function(event){
        EditButton(event)
    });
}

function EditButton(event)
{
    editButton = event.target;
    parentObject = editButton.parentElement;
    
    parentObject.querySelector("#InputField").classList.remove("hidden");
    editButton.classList.add("hidden");
    parentObject.querySelector(".span").classList.add("hidden");

    confirmButton = document.createElement('button');
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("confirmbutton");
    parentObject.appendChild(confirmButton);

    confirmButton = parentObject.querySelector(".confirmbutton");
    confirmButton.addEventListener('click', function(event){
        ConfirmButton(event);
    });
}

function ConfirmButton(event)
{
    confirmButton = event.target;
    parentObject = confirmButton.parentElement;

    parentObject.querySelector("#InputField").classList.add("hidden");
    parentObject.querySelector(".span").classList.remove("hidden");
    parentObject.querySelector(".span").textContent = parentObject.querySelector("#InputField").value;

    confirmButton.remove();
    parentObject.querySelector(".editbutton").classList.remove("hidden");
}

function CheckBox(event)
{
    checkBoxButton = event.target;
    parentObject = checkBoxButton.parentElement;

    parentObject.querySelector(".span").classList.add("checkBox");
    parentObject.querySelector("#InputField").classList.add("checkBox");
}
function CompleteButton(event)
{
completeButton = event.target;
parentObject = completeButton.parentElement;

parentObject.remove();
}

