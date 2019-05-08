 function say(something)
 {
     alert(something);
 }

function exec(func, something)
{
    func(something);
}

//say("nigger");

//exec(say, "what's up!")

// exec(
//     say =(something)=>
// {
//      alert(something);
//  } , 
//  "word of mouth")

/*exec(
    (something)=>
{
     alert(something);
 } , 
 "word of mouth")
*/

//var timeoutID = window.setTimeout(exec,500, say, "batman");
//window.clearTimeout(timeoutID);
  
window.setTimeout((something)=>
{
     alert(something);
 } , 1500 , "i am batman")