
$("ul button").click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    var animal = $(this).text();
    var flickerOptions ={
        tags: animal,
        format: "json"
    };

    function displayPhotos(data){
        //alert(animal);
        $("#div-photo").html("");
        var photohtml = "";
        //can use standard javascript loop, rather than jquery loop
        $.each(data.items, function(i , photo){
            photohtml+="<span>";
            photohtml+="<a target='_blank' class='inline' href='" + photo.link;
            photohtml+="'><img src=" + photo.media.m;
            photohtml+="></a></span>";
        })
        //photohtml+="</ul>"
        $("#div-photo").append(photohtml);
    }
    $.getJSON(flickerAPI , flickerOptions , displayPhotos)
})  //button end