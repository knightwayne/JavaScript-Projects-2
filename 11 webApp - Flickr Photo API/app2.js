
$("#form").submit(function(event){

    event.preventDefault();
    
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    var animal2 = $("#tags").val();
    var flickerOptions2 ={
        tags: animal2,
        format: "json"
    };

    function displayPhotos2(data){
        //alert(animal2);
        $("#div-photo").html("");
        var photohtml2 = "";
        //can use standard javascript loop, rather than jquery loop
        $.each(data.items, function(i , photo){
            photohtml2+="<span>";
            photohtml2+="<a target='_blank' class='inline' href='" + photo.link;
            photohtml2+="'><img src=" + photo.media.m;
            photohtml2+="></a></span>";
        })
        //photohtml2+="</ul>"
        $("#div-photo").append(photohtml2);
    }
    $.getJSON(flickerAPI , flickerOptions2 , displayPhotos2)
})  //button end