/*
let xyz = document.querySelector('[title = "Voldemort is Back"]') //if string has space, needs to be inside quotes
alert(xyz.id);  // id works 05webApp - ListApp doubt in listMan file xxx section 1 and 2: will try
console.log(xyz);
*/
//change list name - element.textContent
let list =  document.querySelector("#list-paragraph");
const listInput = document.querySelector("#list-input");
const listButton = document.getElementById("list-button");

listButton.addEventListener("click" , ()=>{
    list.textContent = listInput.value;
    listInput.value="";
})

//remove title by accessing element.attributes
list.title="";
listButton.title="";

//toggling on/off using element.style
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

//change list content - element.innerHTML
let ol = document.querySelector("#ol");
const changeButton = document.querySelector("#change-button");

changeButton.addEventListener("click" , ()=>{
    ol.innerHTML = "<li>igloo</li><li>penguins</li><li>polar bear</li>";
})


//add - remove created elements 
// create-append-remove Child
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


//hovering capitalizes list - loop+individualListElements
//let ol = document.querySelector("ol");
//ol already defined as it should be
// let li = document.querySelectorAll("li");
 
//  for(let i=0;i<li.length;i++)
//  {
//     li[i].addEventListener("mouseover", ()=>{
//             li[i].textContent = li[i].textContent.toUpperCase();
//     })

//     li[i].addEventListener("mouseout", ()=>{
//         li[i].textContent = li[i].textContent.toLowerCase();
//     })
//  }
 
//hovering capitalises list - using bubbling
let listDiv = document.querySelector(".ListDiv");

listDiv.addEventListener("mouseover" , (event) =>{
    if(event.target.tagName==="LI")
    {
        event.target.textContent = event.target.textContent.toUpperCase();  
    }
})

listDiv.addEventListener("mouseout", (event) =>{
    if(event.target.tagName==="LI")
    {
        event.target.textContent = event.target.textContent.toLowerCase();  
    }
})

//clicking deletes element

// listDiv.addEventListener("click" , (event)=>{
//     let x = event.target;
//     if(x.tagName=="LI")
//     {
//         let p = x.parentNode;
//         p.removeChild(x);
//     }

// })

