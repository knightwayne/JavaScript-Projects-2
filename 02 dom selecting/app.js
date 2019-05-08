//elements
const heading = document.getElementById("heading")
const para = document.querySelector("p");
const li = document.querySelectorAll("li")
const vowel = document.querySelectorAll(".vowel");

//button
const button1 = document.getElementById("button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

//user Input
var userInput = document.querySelector("#input");

//heading
button1.addEventListener("click" , () =>{
    heading.style.color = rgb();
})

button2.addEventListener("click" , () =>{
    heading.style.backgroundColor = rgb();
})

//paragraph
button3.addEventListener("click" , () =>{
    para.style.color = userInput.value;
})

//list elements
button4.addEventListener("click" , ()=>{
    for(let i=0;i<li.length;i+=1)
{
    if(li[i].className!=="vowel")
    li[i].style.color=rgb();
}
})

for(let i=0;i<vowel.length;i+=1)
{
    vowel[i].style.color=rgb();
}


