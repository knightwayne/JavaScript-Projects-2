//javascript
// let ul = document.getElementById("ul");
// let li = ul.children;

// ul.addEventListener("click" , (event)=>{
//     event.target.textContent  ="clicked";
//})

//jQuery
//jqueryButton
$("#jqueryEvent").on({
    
    "click" : function(event)
    {
        console.log("type1" + event);
        event.target.textContent="Button Pressed!";
    },
    "dblclick" : function(event)
    {
        console.log("type2");
        console.log(event);
        event.target.html="<h1>Nibba</h1>"
    }
})

//heading
$("h1").hover(
    function(){
    h1.textContent = "Changed Heading";
} , 
    function(){
    h1.textContent = "Orignal Heading";
}
)

//list-name
alert($("#list p").attr("id"));

//typical syntax try to remember this and make sure to write it from w3school
$("#list p").on(
    {
        click: ()=>{
            alert('this');
            $("#list p").text("Name Changes on click"); //using this here doesnt change name
        } , 

        mouseenter: ()=>{
            $("#list p").css({"color": "red" , "background-color": "lightblue"});
        } , 

        mouseleave: ()=>{
            $("#list p").css({"background-color": "pink"});
        }
    }
    
)

//list elements
 $("ol li:first-child").css({"color": "red"})

//using descendant element attribute
$("ul li").on("click" , function(){
    alert("Disappeared!")
    $(this).text("Clicked here").delay(1500).fadeOut(400);
})


 $("#ol1 li:nth-child(1)").on("click" , function(){
    //alert("bulbasaur");
    $(this).text("bulbasaur");
})
$("#ol1 li:nth-child(2)").on("click" , function(){
    //alert("squirtle");
    $(this).text("squirtle");
})
$("#ol1 li:nth-child(3)").on("click" , function(){
    //alert("charmander");
    $(this).text("charmander");
})

$("#ol2 li:nth-last-child(1)").on("click" , function(){
    //alert("bulbasaur");
    $(this).text("bulbasaur");
})
$("#ol2 li:nth-last-child(2)").on("click" , function(){
    //alert("squirtle");
    $(this).text("squirtle");
})
$("#ol2 li:nth-last-child(3)").on("click" , function(){
    //alert("charmander");
    $(this).text("charmander");
})

$("#disappear").on("click" , ()=>{
    //empties it, not delete rather than 'remove'
    $("#div1").empty();
    //removes from page
    $("#div2").remove();
})






