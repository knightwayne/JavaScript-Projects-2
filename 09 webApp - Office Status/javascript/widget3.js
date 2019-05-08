$("document").ready(()=>{
    $.getJSON("data/employee.json" , function(response){
        //response is the fucking object/return value returned from the server side
        var $html = "<ul id='ul'>";
        $.each(response , function(index , employee){
            if(employee.inoffice==="no")
            {
                $html+="<li class='out'>"
            }
            else
            {
                $html+="<li class='in'>"
            }
            $html+=employee.name;
            $html+="</li>";
        }) // each-loop 
        $html+="</ul>";
        $("#div-emp").html($html);
    }) // getJson end
})  //document ready end
