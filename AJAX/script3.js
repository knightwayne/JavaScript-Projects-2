
function empStatusjq(response){
    
    let size=response.length;
    console.log(size);
    let html="<h2>Employee Status</h2><br><ul>";
    
    $.each(response,function(i,val){
        html+="<li";
        if(val.inoffice==="yes")
        {
             html+=" class='out'> " + val.name/* + " " + (i+1)*/;
        }
        else{
            html+=" class='in'> " + val.name/* + " " + (i+1)*/;
        }
        html+=" </li><br>"
    })
    // for(let i=0;i<size;i++)
    // {
    //     html+="<li";
    //     if(response[i].inoffice==="no")
    //     {
    //         html+=" class='out'> " + response[i].name;
    //     }
    //     else if(response[i].inoffice==="yes")
    //     {
    //         html+=" class='in'> " + response[i].name;
    //     }
    //     html+=" </li><br>"
    // }
    html+="</ul>";
    $("#emp-div").html(html);
}

$("#emp-button").on("click" , ()=>{
    $.getJSON("/employee.json",empStatusjq);
        $("#emp-button").css("display", "none")
})



