
//AJAX
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState===4)
    {
        let employees = JSON.parse(xhr.responseText);
        console.log(employees);
       
        attachAJAX(employees);
    }
}
xhr.open("GET" , "data/employee.json");
function sendAJAX(){
    xhr.send();
}


$("#button-ajax").on("click" , function(){
    sendAJAX();
})

function attachAJAX(employees){
    
    let list = "<ul id='ul-emp'>";
    
    for(let i=0;i<employees.length;i+=1)
    {
        if(employees[i].inoffice==='no')
        {
            list+="<li class='out'>" + employees[i].name + "</li>";
        }
        else{
            list+="<li class='in'>" + employees[i].name + "</li>";
        }
        list+="<br>";
    }

    list+="</ul>"
    let $list = $(list)
    $("#div-emp").append($list);
}
