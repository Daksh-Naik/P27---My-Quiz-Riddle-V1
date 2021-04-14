class QuizBase {
    constructor() {}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async predefinedStart() {
        if (gameState === 0) {
            contestant = new QuizContestant()
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new QuizQuestion();
            question.display();
        }
    }

    play() {
        question.hide();
        question.title.html("Results :");
        QuizContestant.getContestantInfo();
        
        textSize(26);
        textFont("Comic Sans MS");
        fill(rgb(0, 255, 255));
        text("Results :", 370, 50);

        if(allContestants !== undefined) {
            
            var display_answer = 130;
           for(var plr in allContestants) {
               var correctAnswer = " 3";

               if (correctAnswer === allContestants[plr].answer) {
                   fill(rgb(0, 255, 0));
               } else { 
                   fill(rgb(255, 0, 0));
               }
                
                question.resultInfo()

                display_answer +=30;
                textSize(15); 
                text(allContestants[plr].name + " : " + allContestants[plr].answer, 560, display_answer);
                text("The correct answer is '3' : Eva!", 560, 600);
           }
        }
}

}