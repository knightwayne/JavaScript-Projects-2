
function empStatus(emp)
{
    let size=emp.length;
    console.log(size);
    let html="<h2>Employee Status</h2><br><ul>";
    for(let i=0;i<size;i++)
    {
        html+="<li";
        if(emp[i].inoffice==="no")
        {
            html+=" class='out'> " + emp[i].name;
        }
        else if(emp[i].inoffice==="yes")
        {
            html+=" class='in'> " + emp[i].name;
        }
        html+=" </li><br>"
    }
    html+="</ul>";
    $("#emp-div").html(html);
}



let xhrEmp = new XMLHttpRequest();

//call back function of event -> onreadystatechange
xhrEmp.onreadystatechange = ()=>{
    if(xhrEmp.readyState===4)
    {
        //$("#ajax-div").html(xhrEmp.responseText);
        let emp=JSON.parse(xhrEmp.responseText);
        console.log(emp);
        empStatus(emp);
    }
    else
    {
        console.log("Oops! Error Message Log " + xhrEmp.status + ": " + xhrEmp.statusText);
    }
}

xhrEmp.open("GET" , "/employee.json");

$("#emp-button").on("click" , ()=>{
    xhrEmp.send();
    $("#emp-button").css("display", "none")
})