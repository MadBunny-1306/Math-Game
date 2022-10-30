var playing = false;
var score;
var action;
var timeremaining;

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

    //      change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    //     start countdown
    startCountdown();
  }
};

//        timeleft?
//          yes - continue
//          no - gameover

//      generate new q&a

//if we click on answer box
//  if we are playing
//    correct?
//      yes
//        increase the score by one
//        show correct box for 1s
//        generate new q&a
//      no
//        show try again for 1s

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
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(action);
}

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}
function show(Id) {
  document.getElementById(Id).style.display = "block";
}
