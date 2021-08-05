const chalk = require('chalk');
var readlineSync = require("readline-sync");


var score = 0 ;

var userName = readlineSync.question("May I know your name? : ");
console.log(chalk.underline.yellow("Welcome "+userName+"!\n"));

console.log(chalk.yellowBright.bgMagenta.bold("----------------------THIS IS 'BROOKYLN NINE NINE' TRIVIA QUIZ!!!!---------------------\n"));
console.log(chalk.italic.bold("Instructions : ")+chalk.italic("The game consists of 3 questions in level One\n")+ chalk.italic("5 questions in level Two\n")+chalk.italic("Just enter the options only for round One!\n")+chalk.italic("And a bonus question that can only be accessed after acing the two levels!\n\n")+chalk.italic.bold.underline("  ::: GOOD LUCK! ::: \n"));

//question bank 
var levelOne = [
    { question : "What hidden talent did Terry have? ? \na) Magical\nb) Musical\nc) Artistic\nd) Comical \n",
       answer : "c",
    },
    {
      question : "Which member of the squad likes to stay in the office rather than in the line of fire? \na) Jake\nb) Terry\nc) Amy\nd) Rosa\n",
      answer : "b",
    },
    {
      question : "Who has won the most Halloween Heists? \na) Gina\nb)Jake\nc) Holt\nd) Amy\n",
      answer : "c",
    }];

var levelTwo = [
  {
    question :"What is the real name of the Pontiac Bandit?\n" ,
    answer : "Doug Joudy",
  },
  {
    question : "What was the name of Charles' adapted son?\n",
    answer : "Nikolaj",
  },
  {
    question : "Who breaks a computer mouse in half with their bare hands?\n",
    answer : "Rosa",
  },
  {
    question : "What is Jake's favorite movie??\n",
    answer : "die hard",
  },
  {
    question : "What's popular outro phrase after the end-credit scene?\n",
    answer : "not a doctor",
  }];

var bonus = [
  {
    question : "What other show shares the same producer with 'Brooklyn Nine-Nine'?\n",
    answer : "Parks & Recreation"
,
  }
];

//function to check the answer 
function quiz(question,answer) {
  var userAnswer = readlineSync.question(chalk.bgGray(question));
    
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log(chalk.green ("::Yay!! CORRECT! :: ") );
    score++;
  }else {
    console.log(chalk.redBright(" :: WRONG ANSWER ! ::  "));
    console.log(chalk.bold("The correct answer is : ",answer));
  }
  //console.log("your score is  : ", score);
}

//console.log(questionBank.length);
//loop to OUTPUT these questions 

for ( var i = 0; i<(levelOne.length) ; i++){
  var currentQuestion = levelOne[i];
   quiz(currentQuestion.question,currentQuestion.answer);
  console.log("Your score is : " , score);
  console.log("---------------------------------------------------------\n");


  if (score>=3 ) {
    console.log(chalk.bold.yellowBright.bgCyan("---YOU MADE IT TO THE NEXT LEVEL!---\n"));
 
 for ( var j = 0 ; j<levelTwo.length ; j++){
   quiz(levelTwo[j].question,levelTwo[j].answer);
   console.log("Your score is : " , score);
   console.log("---------------------------------------------------------\n")

 }
  } //else {console.log("nect time ")}
  if (score>=8) {
    console.log(chalk.bold.yellowBright.bgMagenta("\nYOU SEEM LIKE A TRUE FAN! : BONUS QUESTION!!!\n")) ;
    for ( var k = 0 ; k<bonus.length ; k++){
      quiz(bonus[k].question,bonus[k].answer);
      console.log("score is : ", score );
    }
  } //else {console.log("next time")   }

 } 

   if (score === 9 )
   {
     console.log(chalk.italic.bold.cyan("\nYOU'RE THE OG FAN! "));
   } else if(score===7) {
     console.log(chalk.italic.bold.cyan("NOT BAD, THIS IS THE SIGN TO REWATCH THE SHOW"));
   } else {
     console.log(chalk.italic.bold.cyan("OOPS, THIS IS THE SIGN TO REWATCH THE SHOW"));
   }




console.log(chalk.bold.underline.yellow("\n+++++++ THANKS FOR PLAYING! ++++++\n\n\n\n"));
