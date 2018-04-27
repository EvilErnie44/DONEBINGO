//Controller - controls the flow of the program. 
//The first line of code runs the below functions on the
//event of the window loading.
//It defines the sequence in which the functions will be ran.
window.onload = function() {
//This function call starts the process of generating the caller
//number object.
genRandNum1();
//This line bines the event to invoke function call to the target elements ID.
document.getElementById("BtnCall").onclick = updateDiv;
}
