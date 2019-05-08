//
let list =  document.querySelector("#list-paragraph");
const listInput = document.querySelector("#list-input");
const listButton = document.getElementById("list-button");

listButton.addEventListener("click" , ()=>{
    list.textContent = listInput.value;
    listInput.value="";
})

//
list.title="";
listButton.title="";

//
let descriptionParagraph = document.getElementById("toggle-paragraph");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click" , ()=>{
    if(descriptionParagraph.style.display==="none")
    {
        toggleButton.textContent = "Hide";
        descriptionParagraph.style.display="block";
    }
    else{
        toggleButton.textContent = "View";
        descriptionParagraph.style.display="none";
    }
})

//change list (inner HTML)
let ol = document.querySelector("#ol");
const changeButton = document.querySelector("#change-button");

changeButton.addEventListener("click" , ()=>{
    ol.innerHTML = "<li>igloo</li><li>penguins</li><li>polar bear</li>";
})


//add - remove created elements
 let addInput = document.getElementById("add-input");
 const addButton = document.getElementById("add-button");
 const removeButton = document.getElementById("remove-button");

 addButton.addEventListener("click" , ()=>{
    let li = document.createElement("li");
    let ol = document.getElementById("ol");
    li.textContent = addInput.value;
    ol.appendChild(li);
    addInput.value="";
 })

 removeButton.addEventListener("click" , ()=>{
     let ol = document.getElementById("ol");
     let li = document.querySelector('li:last-child');
     ol.removeChild(li);
 })

