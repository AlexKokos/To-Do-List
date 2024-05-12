let newDiv;
let copyInputField;
let editButton;
let checkBox;
let pasteInputField;
let confirmButton;
function CreateNewTask()
{
    newDiv = document.createElement("div");
    newDiv.className = "DivOptions";

    copyInputField = document.getElementById("InputField");

    checkBox = document.createElement("input");
    checkBox.type = "radio";
    checkBox.className = "CheckBoxOptions";
    checkBox.setAttribute('onclick', "CheckBox()");

    editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.setAttribute('onclick',"EditButton()");
    if(copyInputField != null)
    {
        copyInputField.select();

        pasteInputField = copyInputField.cloneNode(true);
        pasteInputField.setAttribute('readonly', true);

        document.body.appendChild(newDiv);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(pasteInputField);
        newDiv.appendChild(editButton);
    }
}

function EditButton()
{
    if(pasteInputField != null)
    {
        pasteInputField.removeAttribute('readonly');
    confirmButton = document.createElement("button");
    confirmButton.textContent = "confirm";
    confirmButton.setAttribute('onclick',"ConfirmButton()");
    
        newDiv.appendChild(confirmButton);
    }
}
function ConfirmButton()
{
    if(pasteInputField != null){
    pasteInputField.setAttribute('readonly',true);
        if(confirmButton != null)
        {
        confirmButton.remove();
        }
    }
}
function CheckBox()
{
    if(pasteInputField != null)
    {
    pasteInputField.className = "CrossOutText";
    }
}