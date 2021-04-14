class QuizQuestion {
    constructor() {
        this.title = createElement('h1');
        this.input1 = createInput(" ");
        this.input1Params = createElement('h4');
        this.input2 = createInput(" ");
        this.input2Params = createElement('h4');
        this.button = createButton('Submit');
        this.question = createElement('h2');
        this.question2 = createElement('h2');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4'); 
        this.option4 = createElement('h4');
        this.info = createElement('h4');
        this.guide = createElement('h4');
        this.guide1 = createElement('h4');
        this.guide2 = createElement('h4');
        this.guide3 = createElement('h4');
        this.results = createElement('h3');
        this.results2 = createElement('h3');

}

    hide() {
        this.title.hide();
        this.button.hide();
}

    display() {
        
        this.title.html("My Riddle");
        this.title.position(600, 90);

        this.question.html("~ Eva's mother had three children. The eldest is April, and the youngest is June.");
        this.question.position(280, 140);
        this.question2.html("What's the name of the third one?");
        this.question2.position(510, 170);

        this.guide.html("Hello there! this is a riddle I've given to you. Here, all you have to do, is to:");
        this.guide.position(20, 750);
        this.guide1.html("Read the question and the option, and choose the option you think is correct. Then, fill in your name, and then place the number in the input (right).")
        this.guide1.position(20, 780);
        this.guide2.html("After you're done, click on submit. This information will be sent to the database. When all the four players submit their information, the results will be anounced.");
        this.guide2.position(20, 810);
        this.guide3.html("If there's any wrong parameter placed in the input (eg. an Alphabet instead of a number), the correct answer may not be shown properly. Refresh the page, or check console (F12) for information.");
        this.guide3.position(20, 840);

        this.option1.html("1. May");
        this.option1.position(290, 210);
        this.option2.html("2. July");
        this.option2.position(290, 250);
        this.option3.html("3. Eva");
        this.option3.position(290, 290);
        this.option4.html("4. Alex");
        this.option4.position(290, 330);
        
        this.input1.position(320, 390);
        this.input1Params.html("Enter your name above ^ ");
        this.input1Params.position(320, 390);
        this.input2.position(870, 390);
        this.input2Params.html("Enter the option number ^");
        this.input2Params.position(870, 390);

        this.button.position(630, 450);

        this.button.mousePressed(() =>{
            this.button.hide();
            this.info.html("In Queue, checking your answer. Please wait...");
            this.info.position(520, 520);

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            
            this.input1.hide();
            this.input1Params.hide();
            this.input2.hide();
            this.input2Params.hide();
            
        })
}
    
    resultInfo() {

            if (gameState === 1) {

                this.info.hide();

               this.results.html("Those, who've answered correctly are shown in green, while those who haven't are shown in red.");
               this.results.position(310, 520); 
               this.results2.html("Thanks for playing, My Riddle V2 is coming soon!");
               this.results2.position(470, 540);
            }
    }
}