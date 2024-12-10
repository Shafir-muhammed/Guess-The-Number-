'use strict';

let secretNum = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highScore = 0 ; 


// elements

const checkButton = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const messageLabel = document.querySelector(".message");
const body = document.querySelector("body");
const numberLabel = document.querySelector(".number");
const highScoreLabel = document.querySelector(".highscore");
const scoreLabel = document.querySelector(".score");
const againButton = document.querySelector(".again");







checkButton.addEventListener("click",()=>{
  const guess = +guessInput.value;
  console.log(guess);
  
  
  // When There Is no Guess
  
  if(!guess){
    messageLabel.textContent = "No number";
    
    
    
    /// When Player Wins
    
  }else if (guess === secretNum){
    messageLabel.textContent = "correct Number";
    body.style.backgroundColor = "#60b347";
    numberLabel.style.width = "30rem";
    numberLabel.textContent = secretNum;
    
    // highscore implement
    highScore = highScore < score ? score : highScore;
    highScoreLabel.textContent = highScore;
    
    
    // When Guess is too high
    
  }else {
      if(score > 1){
        messageLabel.textContent = guess > secretNum ? "Too high!" : "Too low!" ;
        score--;
        scoreLabel.textContent = score;
      }else {
        scoreLabel.textContent = 0;
        messageLabel.textContent = "You lose the game";
      }
    }
})
  
  ////////////////////////
  
  //////////////////////
  

// Resetting the game

againButton.addEventListener("click",function(){
  score = 20;
  secretNum = Math.floor((Math.random() * 20) + 1);
  messageLabel.textContent = "Start guessing...";
  scoreLabel.textContent = score;
    numberLabel.textContent = "?";
  guessInput.value = "";
    body.style.backgroundColor = "#222";
    numberLabel.style.width = "15rem";
  
})












/// deleted codes


//    }else if(guess > secretNum){
//    if(score > 1){
      
    
      
//     }else{
     
      
//     }
    
    
    // When Guess is too Low
    
//   }else if(guess < secretNum){
    
//     if(score > 1){
      
//     messageLabel.textContent = "Too low!";
//     score--;
//     scoreLabel.textContent = score;
      
//     }else{
     
//       scoreLabel.textContent = 0;
//       messageLabel.textContent = "You lose the game";
//     }
      
//   }
  
//
// })
