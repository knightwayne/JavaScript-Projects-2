
//toggling paragraph description
//Super Cool Effect
$("#toggle").on("click" , ()=>{
    $("#desc-para").toggle(1500);
})

//adding a new pet
$("#submit").on("click" , ()=>{
    
    const $petname = $("#pet-name");
    const $petspecies = $("#pet-species");
    const $petnotes = $("#pet-notes");
    
    const $newPet = $(
        "<div class='card'>" + 
        "<p><strong>Pet-Name: </strong>" + $petname.val() +
        " <br><strong>Pet-Species: </strong>" + $petspecies.val() + 
        " <br><strong>Pet-Notes: </strong>" + $petnotes.val() +
        "</p><button class = 'remove-button'>Remove Button</button></div>"
    )
    
    $petname.val("");
    $petspecies.val("");
    $petnotes.val("");

    //difference between .val(for jquery elements) .html and .text (tick)
    console.log($newPet.text());
    console.log($newPet.html());
    $("#pet-list").append($newPet);
    alert("Pet Added!");

    //remove button not working outside this function - why ??
    //"this" doesn't work with arrow syntax function -- around this ??
    $(".remove-button").on("click" , function(){
        alert("Pet Adopted");
        $(this).parent().remove();
    })
})








