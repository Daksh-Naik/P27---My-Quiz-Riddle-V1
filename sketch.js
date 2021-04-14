// C27 Project 27 - WHTJR - MY QUIZ / MY RIDDLE V1 - Project
// At : 14/04/2021 - 13:00

var gameState;
var contestantCount, allContestants;
var database;
var quiz;
var question;
var contestant;

var gameState = 0;

function setup()  {
  createCanvas(850,400);

    console.log("https://console.firebase.google.com/project/project-37-whtjr-myquiz/database/project-37-whtjr-myquiz-default-rtdb/data");

    database = firebase.database();

  CreateThisQuizNow = new QuizBase();
  CreateThisQuizNow.getState();
  CreateThisQuizNow.predefinedStart();

}

function draw(){
  background(0, 136, 255);

  if(contestantCount === 4) {
    CreateThisQuizNow.update(1);
  }

  if(gameState === 1) {
    CreateThisQuizNow.play();
  }

}
