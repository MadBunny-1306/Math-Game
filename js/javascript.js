var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if we click on start/reset
document.getElementById("startreset").onclick = function () {
  //    if we are playing
  if (playing == true) {
    location.reload(); //reload page
  } else {
    //   if we are not playing

    //    change mode to playing
    playing = true;

    //      set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;

    //      show countdown box
    show("time");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    // hide gameover box
    hide("gameOver");

    //      change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    //     start countdown
    startCountdown();
  }
  //      generate new q&a
  generateQA();
};

//if we click on answer box
for (i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    //  if we are playing
    if (playing == true) {
      //    correct?
      if (this.innerHTML == correctAnswer) {
        //      yes
        //        increase the score by 1
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        //      hide wrong box and  show correct box for 1s
        hide("wrong");
        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);

        //        generate new q&a
        generateQA();
      } else {
        // wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// functions
// start counter
function startCountdown() {
  action = setInterval(function () {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining == 0) {
      // game over
      stopCountdown();

      show("gameOver");
      document.getElementById("gameOver").innerHTML =
        "<p>Game over!</p><p>Your score is " + score + ".</p>";

      hide("time");
      hide("correct");
      hide("wrong");
      playing = false;

      document.getElementById("startreset").innerHTML = "StartGame";
    }
  }, 1000);
}

// stop counter
function stopCountdown() {
  clearInterval(action);
}

// hide element
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

// show element
function show(Id) {
  document.getElementById(Id).style.display = "block";
}

//      generate questions and multiple answers
function generateQA() {
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;

  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1 + Math.round(3 * Math.random());

  document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer

  // fill other boxes with wrong answers

  var answers = [correctAnswer];
  // ovo je array, i sve sto se napise u [] dobice svoj index po redu, ono sto je na prvom mestu ima index 0, sledece je index 1 itd.

  for (i = 1; i < 5; i++) {
    if (i != correctPosition) {
      var wrongAnswer;
      do {
        wrongAnswer =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random()));
      } while (answers.indexOf(wrongAnswer) > -1);
      //wrong answer

      document.getElementById("box" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}
