var playing = false;
var score;
// if we click on start/reset
document.getElementById("startreset").onclick = function () {
  //    if we are playing
  if (playing == true) {
    location.reload(); //reload page
  } else {
    //    if we are not playing

    // change mode to playing
    playing = true;

    //      set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    //      show countdown box
    document.getElementById("time").style.display = "block";
    //      reduce time by 1s in loops
    //      change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";
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
