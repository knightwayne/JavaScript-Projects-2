//change color
let h1 = document.getElementById("h1");

h1.addEventListener("click" , ()=>{
    h1.style.color = rgb();
})


//toggle list
let listButton = document.querySelector("#listViewButton");
const listDiv = document.querySelector("#listDiv");

listButton.addEventListener("click", ()=>{

    if(listDiv.style.display==="none")
    {
        listButton.textContent = "Hide List";
        listDiv.style.display = "block"; 
    }
    else{
        listButton.textContent = "View List";
        listDiv.style.display = "none"; 
    }
})


//list heading text and color
//const listClass = document.querySelector(".listClass"); - again not working why
let listColorText = document.getElementById("listColorText");
let listColorButton = document.getElementById("listColorButton");
let listName = document.getElementById("listName");
let listNameText = document.getElementById("listNameText");
let listNameButton = document.getElementById("listNameButton");

listColorButton.addEventListener("click" , ()=>{
    listName.style.color = listColorText.value;
    listColorText.value = "";

})

listNameButton.addEventListener("click" , ()=>{
    listName.textContent = listNameText.value + ": ";
    listNameText.value = "";
})


//hovering changes case
/*listDiv.addEventListener("mouseover" , (event)=>{
    //alert("fdfsdf");
    let x = event.target;
    if(x.tagName==="LI")
    {
        x.textContent = x.textContent.toUpperCase();
    }

})

listDiv.addEventListener("mouseout" , (event)=>{
    let x = event.target;
    if(x.tagName==="LI")
    {
        x.textContent = x.textContent.toLowerCase();
    }

})*/
