
let xhr = new XMLHttpRequest();

//call back function of event -> onreadystatechange
xhr.onreadystatechange = ()=>{
    if(xhr.readyState===4)
    {
        $("#ajax-div").html(xhr.responseText);
    }
    else
    {
        console.log("Oops! Error Message Log " + xhr.status + ": " + xhr.statusText);
    }
}

xhr.open("GET" , "/ajaxData.html");

$("#ajax-button").on("click" , ()=>{
    xhr.send();
    $("#ajax-button").css("display", "none")
})