//elements
const myHeading  = document.getElementById("heading");
const para = document.getElementById("para");

//text-field user input
var userInput = document.getElementById("input");

//buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");


//heading changes color on clicking
myHeading.addEventListener(
        'click' , () => {
    myHeading.style.color = rgbValue();
}
)

//clicking button changes heading color
button1.addEventListener(
    "click" , () =>{
        heading.style.color = rgbValue();
    }
)

//entered color in text field = new paragraph color
button2.addEventListener(
    "click" , () => {
        para.style.color = userInput.value;
        //added later on
        userInput.value=""; 
    }
)
