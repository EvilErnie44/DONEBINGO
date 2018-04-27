// JavaScript source code
//This function ultimately will change the visual appearance of my HTML
//by looping over the iterable element.
function bingoCard1() {
//This is loop initialisation.
for (var i=0; i<24; i++) {
  //the iterator will assembled the string which identifies the
  //target container.
  //Once identified, the targets inner HTML is set to the
  //return value from the newNum() function in the model. 
document.getElementById("square"+i).innerHTML = newNum();
}
}
