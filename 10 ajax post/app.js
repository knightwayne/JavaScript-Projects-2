
//$("#button-form").on - another alternative
//submit ke andar function kyun hai
//read its fucking documentation
$("form").submit(function(event){
    event.preventDefault();
    let url = $("form").attr("action");
    let formData =  $("form").serialize();
    $.post(url , formData , function(response){
        $("#div-form").html("<p>Thanks for submitting.</p>");
    })
})  //submit end