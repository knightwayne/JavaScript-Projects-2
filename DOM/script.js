
var div = document.getElementById("div1");
div.style.backgroundColor="brown";

document.getElementById("p1").style.backgroundColor="red";

document.getElementById("button1").addEventListener("click" , function(){
    document.getElementById("p1").style.backgroundColor=document.getElementById("input1").value;
})

    