
// var die = {
//     sides: 6 ,   
//     roll: function diceRoll(){
//         let rand = Math.floor(Math.random()*die.sides)+1;
//         return rand;
//     }
// }

//constructor function

function Die(sides) {
    this.sides = sides;
    this.roll = function(){
        let rand = Math.floor(Math.random() * this.sides)+1;
        return rand;
    }
}
