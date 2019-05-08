
let xhr = new XMLHttpRequest();

//callback function
xhr.onreadystatechange = function(){
    //alert("alphabeta"); //-->1 + 3(after button press) times called
    /*if(xhr.readyState!==4){
        alert("xhr.readyState " + xhr.readyState);
    }*/
    if(xhr.readyState===4 && xhr.status===200)
    {
        //call back function - tells what to do with incoming data from ajax request
        $("#ajax-div").html(xhr.responseText);
        alert(xhr.status + " " + xhr.statusText);
    }
    else if(xhr.readyState===4 && xhr.status!==200)
    {
        alert("Error " + xhr.status + " " + xhr.statusText);
    }
}
xhr.open("GET" , "sidebar.html");
//xhr.open("GET" , "sidebarDiffSpelling.html"); // different error in xhr.status & xhr.statusText;

$("#ajax-button").on("click" , function(){
        xhr.send();
        $("#ajax-button").remove();
})


// $("#ajax-button").on("click" , function(){
//     //sendAJAX();
//      $("#ajax-div").load("sidebar.html" , function(response){
//         $("#ajax-button").hide();
//         alert(response.toUpperCase());
//      })
     
// })