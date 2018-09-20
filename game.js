// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

// receive the collection of elements as dots[]
function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you

    // 'contextmenu' is the righ-click mouse event
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE
function makeHide (evt) {
evt.preventDefault()
evt.target.classList.toggle('invisible')
updateCounts()



}
function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
 
   // find all the dots.  divs within the div.board
//  var dots = document.body.classList('board')[0].children;

var dots = document.getElementsByClassName('board')[0].children;
for (i = 0; i < dots.length; i++) {
    var dot = dots[i]; // get the first div element as dot
    // if it's got the class
    if (dot.classList.contains("green")) {
      totals['green']++;
    }
    if (dot.classList.contains('blue')) {
      totals["blue"]++;
    }
    if (dot.classList.contains("invisible")) {
      totals["invisible"]++;
    }

    //switch () { case a: case b: break; default: break; }
    // switch (dot.classList) {
    //   case "green"
    // }
  }
  
  // loop through each of them to see what classes they have
  // set the counts appropriately

 

  


  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
