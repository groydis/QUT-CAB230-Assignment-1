//selected variable is to leave the star icon black
var selected = "fas fa-star";
// deselected variable is to leave the star icon unfilled
var deselected = "far fa-star";
// 0 = false and 1 = true. If the star was clicked
var clicked = 0;

//starXOver() functions are to control behaviour for the rating stars when the mouse enters the star area.
//When the mouse enteres the star area,
//it will highlight the required stars as the mouse sits on top of the stars
function starOneOver() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");
  //If the stars have not been clicked, deselect all but the first star
  if (!clicked) {
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starTwoOver() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");
  //If the stars have not been clicked, deselect all but the second star
  if (!clicked) {
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starThreeOver() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");
  //If the stars have not been clicked, deselect all but the third star
  if (!clicked) {
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starFourOver() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");
  //If the stars have not been clicked, deselect all but the fourth star
  if (!clicked) {
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(deselected, selected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starFiveOver(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");
  //If the stars have not been clicked, select all stars
  if (!clicked) {
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(deselected, selected);
    starFive.className = starFive.className.replace(deselected, selected);
  }
}

//starXOut() functions are to control behaviour for the rating stars when the mouse exits the star area.
//All these functions will check if the stars have been clicked or the clicked variable is not 1
//Then it will deselect all stars
function starOneOut(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if(!clicked){
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starTwoOut(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (!clicked){
      starOne.className = starOne.className.replace(selected, deselected);
      starTwo.className = starTwo.className.replace(selected, deselected);
      starThree.className = starThree.className.replace(selected, deselected);
      starFour.className = starFour.className.replace(selected, deselected);
      starFive.className = starFive.className.replace(selected, deselected);
    }
}

function starThreeOut() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (!clicked) {
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starFourOut() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (!clicked) {
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starFiveOut(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (!clicked) {
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

//starXClicked() functions will set how many stars are highlighted when the star is clicked.
//It will first check if the stars have been clicked, if it has been clicked,
//it will set the clicked variable to false and then deselect all the stars
//If the variable is set to 0 or false, it will select the relevant stars and deselect the others
function starOneClicked() {

  //This function runs when the stars are clicked
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (clicked) {
    clicked = 0;
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  } else if (!clicked) {
    clicked = 1;
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starTwoClicked(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (clicked) {
    clicked = 0;
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  } else if (!clicked) {
    clicked = 1;
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starThreeClicked() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (clicked) {
    clicked = 0;
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  } else if (!clicked) {
    clicked = 1;
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  }

}

function starFourClicked() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (clicked) {
    clicked = 0;
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  } else if (!clicked) {
    clicked = 1;
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(deselected, selected);
    starFive.className = starFive.className.replace(selected, deselected);
  }
}

function starFiveClicked(){
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (clicked) {
    clicked = 0;
    starOne.className = starOne.className.replace(selected, deselected);
    starTwo.className = starTwo.className.replace(selected, deselected);
    starThree.className = starThree.className.replace(selected, deselected);
    starFour.className = starFour.className.replace(selected, deselected);
    starFive.className = starFive.className.replace(selected, deselected);
  } else if (!clicked) {
    clicked = 1;
    starOne.className = starOne.className.replace(deselected, selected);
    starTwo.className = starTwo.className.replace(deselected, selected);
    starThree.className = starThree.className.replace(deselected, selected);
    starFour.className = starFour.className.replace(deselected, selected);
    starFive.className = starFive.className.replace(deselected, selected);
  }
}
//searchByRating() currently will display an alert window indicating which star was highlighted.
//This will be used for searching and leaving reviews.
function searchByRating() {
  //Vars that identify the stars for changing the className
  var starOne = document.getElementById("one");
  var starTwo = document.getElementById("two");
  var starThree = document.getElementById("three");
  var starFour = document.getElementById("four");
  var starFive = document.getElementById("five");

  if (starFive.className === selected) {
    //alert("Star 5 is selected");
  } else
  if (starFour.className === selected) {
    //alert("Star 4 is selected");
  } else
  if (starThree.className === selected) {
    //alert("Star 3 is selected");
  } else
  if (starTwo.className === selected) {
    //alert("Star 2 is selected");
  } else
  if (starOne.className === selected) {
    //alert("Star 1 is selected");
  } else {
    //alert("No stars were selected");
  }

  window.location.href='searchresults.php';

}
