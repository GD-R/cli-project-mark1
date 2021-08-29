let read_input = require("readline-sync");
let score = 0;

let user = read_input.question("What is your name: ");
console.log("Welcome to the Quiz - Lets See How well you know Gandharva R? " );

let questions = ["Where do i live? ", "Where do i work? ", "What is my favriot food? ", "What is my favriot color? "];

let answers = ["Bangalore", "CGI", "Dose", "Black"];

function play (question,answer) {
  let ans = read_input.question(question);
  if(ans.toUpperCase() === answer.toUpperCase())
  {
    console.log("Correct Answer");
    score++;
    console.log("Your Score is " + score);
  }
  else 
  {
    console.log("Wrong Answer");
    console.log("Your Score is " + score);
  }
}

for(let i = 0; i < questions.length; i++) {
  play(questions[i],answers[i]);
}

console.log("Your Final Score is " + score);
