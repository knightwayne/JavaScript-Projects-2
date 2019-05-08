//bbygrl from scratch.

//random bgcolor
$("#ref-button").on("click" , (event)=>{
    let rand=rgb();
    $("#main").css({"background-color": rand});
})

//random bgcolor
$("#list-button").on("click" , (event)=>{
    $("#list-name").text($("#list-value").val());
    $("#list-value").val("");
})

//list - hide/unhide
$("#toggle-button").on("click" , (event)=>{
    if($("#list-div").css("display")==="block"){
        $("#list-div").css("display", "none");
        $("#toggle-button").text("Toggle On");
    }
    else
    {
        $("#list-div").css("display", "block");
        $("#toggle-button").text("Toggle Off");
    }
})

//adding buttons in list

let lis = document.getElementsByTagName("li");

function addButtons(li)
{
    let UP = document.createElement("button");
    UP.textContent="UP";
    UP.className="UP";
    let DOWN = document.createElement("button");
    DOWN.textContent="DOWN";
    DOWN.className="DOWN";
    let REMOVE = document.createElement("button");
    REMOVE.textContent="REMOVE";
    REMOVE.className="REMOVE";
    li.append(UP);
    li.append(DOWN);
    li.append(REMOVE);
}

for(let i=0;i<lis.length;i++)
{
    addButtons(lis[i]);
}


//add Elements
$("#add-button").on("click" , (event)=>{
    
    let newlist = document.createElement("li");
    newlist.textContent=document.querySelector("#add-value").value;
    $("#ul").append(newlist);
    addButtons(newlist);
    $("#add-value").val("");
})

//functionality to buttons

let ul = document.querySelector("#ul");

ul.addEventListener("click" , function(){
    if(event.target.tagName==="BUTTON"){
        if(event.target.className==="REMOVE"){
            //console.log(event.target);
            let liParent=event.target.parentNode;
            let ulParent=liParent.parentNode;
            ulParent.removeChild(liParent);
        }
        else if(event.target.className==="UP"){
            let liParent=event.target.parentNode;
            let ulParent=liParent.parentNode;
            let prevLI=liParent.previousElementSibling;
            if(prevLI)
            ulParent.insertBefore(liParent,prevLI);
            else
            console.log("Already the first element");
            
        }
        else if(event.target.className==="DOWN"){
            let liParent=event.target.parentNode;
            let ulParent=liParent.parentNode;
            let nextLI=liParent.nextElementSibling;
            if(nextLI)
            ulParent.insertBefore(nextLI,liParent);
            else
            console.log("Already the last element");
        }
    }
})