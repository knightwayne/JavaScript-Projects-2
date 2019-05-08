
$("#search").submit(function(event){

    event.preventDefault();

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    
    var tag = $("#input").val();
    //converting data in json format
    var data = {
        tags: tag ,
        format: "json"
    }
    
    function addPhoto(response){
        var arr=response.items;   //items part of json-ified API
        console.log(arr);
        
        var html="<ul>"
        $.each(arr,function(i,item){
            html+="<li style='display:inline'> <a target='_blank' href='" + item.link +"'>";
            html+="<img src='" + item.media.m + "'> </a>"
            html+="</li>"
        })
        html+="</ul>";

        $("#flickr-div").html("");
        $("#flickr-div").append(html);
    }

    $.getJSON(flickerAPI,data,addPhoto);

})

$("#cat-button").click(function(event){

    event.preventDefault();

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    
    //converting data in json format
    var data = {
        tags: "cat" ,
        format: "json"
    }
    
    function addPhoto(response){
        var arr=response.items;   //items part of json-ified API
        console.log(arr);
        
        var html="<ul>"
        $.each(arr,function(i,item){
            html+="<li style='display:inline'> <a target='_blank' href='" + item.link +"'>";
            html+="<img src='" + item.media.m + "'> </a>"
            html+="</li>"
        })
        html+="</ul>";

        $("#flickr-div").html("");
        $("#flickr-div").append(html);
    }

    $.getJSON(flickerAPI,data,addPhoto);

})