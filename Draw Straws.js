



console.log("*************************************************");
console.log("               Draw Staws Game                   ");
console.log("Everyone gets a random number and Finally        ");
console.log("Up to 3 Winners are picked Randomly              ");
console.log("*************************************************");


document.getElementById("h1001").innerHTML = "Welcome to Pick a Random Winner Game";
document.getElementById("h2001").innerHTML = "Here we Draw Straws to see who gets access to Cloud Guru";
document.getElementById("h2002").innerHTML = "Please review the Console Output after the Draw";

// = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

person = [];
random_num = [];

let maxNum = prompt("Enter a Number to set How many Persons are participating.");
maxNum = parseInt(maxNum);
while (!maxNum) {
    maxNum = parseInt(prompt("Please Enter a Number"));
}

let targetNum = Math.floor(Math.random() * maxNum) + 1; //A Random number 

let i = 0;

while (i < maxNum) {
    i++;
    let new_person = prompt("Enter your name")
    person.push(new_person)
    let new_score = Math.floor(Math.random() * maxNum * 10) + 1;
    random_num.push(new_score)
    new_score = new_score.toString();
    window.alert(`Your ticket draw number is:  ${new_score}`);
    // window.confirm("Your ticket draw number is ", new_score.toString());
    console.log("Person:", new_person, " Ticket:", new_score);

}

console.log("Persons = ", person);
console.log("Ticket Draws = ", random_num);

window.alert("It's time to now pick a winner");
window.alert("Drumroll Please");
let winning_pos = 0;
let winner_count = 0;
let winner = lucky_draw(person.length);
winner_count++;

window.alert(`The Winner is ${winner}`);
console.log("winning_pos =", winning_pos);
console.log("Before splicing the array is ", person);

person.splice(winning_pos, 1);
console.log("Now these many are left : ", person);
console.log("person array length", person.length);
console.log("winner count ", winner_count)

while (person.length >= 1 && winner_count < 3) {
    window.alert("It's time to pick another winner");
    window.alert("Drumroll Please");
    winner = lucky_draw(person.length);
    winner_count++;
    window.alert(`The Winner is ${winner}`);

    person.splice(winning_pos, 1);
    console.log("Now these many are left : ", person);

}




function lucky_draw(temp_num) {
    // let temp_num = maxNum;

    let temp_win_pos = Math.floor(Math.random() * temp_num + 0);
    console.log("Winning Position is: ", temp_win_pos + 1);

    let winner_person = person[temp_win_pos];
    console.log("Winning Person is: ", winner_person);
    winning_pos = temp_win_pos; //This is not the best way to do it

    return (winner_person)



}




// let person = {
//     "name": 'name',
//     "number": 1
// }

// const array_obj = [person]

// console.log(`Array of Person Object = ${array_obj}`)

// 
