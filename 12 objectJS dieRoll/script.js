
function printNumber(value){
    $("#div1").html(value);
}
$("#button").on("click" , ()=>{
    var die = new Die(3);
    printNumber(die.roll());

})