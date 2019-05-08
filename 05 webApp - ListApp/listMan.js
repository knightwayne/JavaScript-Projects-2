
let li = document.getElementsByTagName("li");
//const listDiv = document.querySelector("#listDiv"); - already declared
let listAddInput = document.getElementById("listAddInput");
let listAddButton = document.getElementById("listAddButton");
let listUl = document.getElementById("ul");

//clicking on button performs action on list item
listUl.addEventListener("click" , (event)=>{
    let x = event.target;
    let li = x.parentNode;
    let ul = li.parentNode;

    if(x.tagName==="BUTTON" && x.className==="remove")   //how to use id in place of className -- XXXPart2
    {    
        ul.removeChild(li);
    }

    if(x.tagName==="BUTTON" && x.className==="up")
    {
        let previousElementSibling = li.previousElementSibling;
        if(previousElementSibling!==null)
        {
            ul.insertBefore(li,previousElementSibling);
        }
        else{
            console.log("Start of List");
        }    
    }

    if(x.tagName==="BUTTON" && x.className==="down")
    {
        let nextElementSibling = li.nextElementSibling;
        if(nextElementSibling!==null)
        {
            nextElementSibling = nextElementSibling.nextElementSibling;
            ul.insertBefore(li,nextElementSibling);
        }
        else{
            console.log("End of List");
        }
    }
})

//up down remove button
function addButtonsToList(li)
{
    console.log("adding buttons to the list element");
    let up = document.createElement("button");
    let down = document.createElement("button");
    let remove = document.createElement("button");
    up.textContent = "UP";  down.textContent = "DOWN";    remove.textContent = "REMOVE";
    
    li.appendChild(up);
    up.className="up";  //how to use id in place of className -- XXXPart1
    up.style.display="inline-block";
    
    li.appendChild(down);
    down.className="down";
    down.style.display = "inline-block";
    
    li.appendChild(remove);
    remove.className="remove";
    remove.style.display = "inline-block";

}

//adding buttons to the list elements
// for(let i=0;i<li.length;i++)
// {
//     addButtonsToList(li[i]);
// }
let listChild = listUl.children;
for(let i=0;i<listChild.length;i+=1)
{
    addButtonsToList(listChild[i]);
}

listAddButton.addEventListener("click" , (event)=>{

    //listUl.firstElementChild.style.backgroundColor = "lightskyblue"; 
    //listUl.lastElementChild.style.backgroundColor = "lightsteelblue";
    let li = document.createElement("li");
    //let ul = document.getElementById("ul");

    li.textContent = listAddInput.value;
    listAddInput.value = "";
    addButtonsToList(li);
    listUl.appendChild(li);

    //listUl.firstElementChild.style.backgroundColor = "lightskyblue";    //to remove top most up button
    //listUl.lastElementChild.style.backgroundColor = "lightsteelblue";  //to remove bottom most downss button
})


