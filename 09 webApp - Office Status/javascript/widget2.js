
let xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function(){
    if(xhr2.readyState===4)
    {
        let roomList = JSON.parse(xhr2.responseText);
        console.log(roomList);
       
        attachAJAX2(roomList);
    }
}
xhr2.open("GET" , "data/room.json");

function sendAJAX2(){
    xhr2.send();
}

$("#button-ajax2").on("click" , function(){
    sendAJAX2();
})

function attachAJAX2(roomList){
    
    let list = "<ol id='ol-room'>";
    
    for(let i=0;i<roomList.length;i+=1)
    {
        if(roomList[i].status==='occupied')
        {
            list+="<li class='full'>" + roomList[i].roomNo + "</li>";
        }
        else{
            list+="<li class='empty'>" + roomList[i].roomNo + "</li>";
        }
        list+="<br>";
    }

    list+="</ol>"
    let $list = $(list)
    $("#div-room").append($list);
}