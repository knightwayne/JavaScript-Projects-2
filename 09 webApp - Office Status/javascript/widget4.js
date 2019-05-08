
$("#button-ajax2").on("click" , function(){
    
    $.getJSON("data/room.json" , function(response){
        var roomhtml = "<ol id='ol'>";
    
        $.each(response , function(index , room){
            //alert(index + response[index].status + response[index].roomNo);
            if(room.status==="occupied")
            {
                roomhtml+="<li class='full'>"
            }
            else{
                roomhtml+="<li class='empty'>"
            }
            roomhtml+=room.roomNo;
            roomhtml +="</li>";
        }) //each-loop ending

        roomhtml+="</ol>";
        $("#div-room").html(roomhtml);
    }) //getJSON end

})//button end