//View - responsible for any code which result in the DOM
//being changed.
//The purpose of this function is to update the view/presentation
// of the HTML DOM elements which it targets.
//AS a result of this, it belongs in the view.
//Function Declaration.
function updateDiv() {
    //Assigning target element to variable.
    var container = document.getElementById('usednum');
    //Assigning target element to variable.
    var containerFinMessage = document.getElementById("finmessage");
    //string for target container is kept in here as opposed to adding hardcded string
    //into the create text node function.
    var messageStr = "All Numbers Called";
    //Here I check the value of the boolean conditionial
    //which I have set in the model.
    if (booleanCheck != 1) {
        //Only when this function is ran do we increment the conditionial
        //check value as to ensure it does not the application
        //runs this function more than once.
        booleanCheck++;
        //This line appends a child text node to the target element
        //which was assigned to a variable above.
        //Inside that target node, a new text node is created, and the
        //contents of the called number array has the join method applied.
        //With string data to seperate the value of each
        //index value in the array.
        container.appendChild(document.createTextNode(bingoNum.join(", ")));
        //This acts int he same manner as above however, I am simply
        //passing a variable which contains the message string into it.
        containerFinMessage.appendChild(document.createTextNode(messageStr));
    }
}

//Like the last version of this function, its purpose is to assess the current
//target value and distribute the correct value into it.

//Function Declaration.
function populateCard() {
    //loop initialisation.
    for (var x = 0; x < 24; x++) {
        //first if statement checks x's current value, this is reflects the
        //target element ID.
        if (x <= 4) {
            //Assigns return of the last value in the target array to the variable to
            //be destributed to target element ID.
            var bNum = popBNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from bNum in model.
            document.getElementById("square" + x).innerHTML = bNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 9) {
            //If conditional met, then value popped from target array and assigned to variable.
            var iNum = popINumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from iNum in model.
            document.getElementById("square" + x).innerHTML = iNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 13) {
            //If conditional met, then value popped from target array and assigned to variable.
            var nNum = popNNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from nNum in model.
            document.getElementById("square" + x).innerHTML = nNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 18) {
            //If conditional met, then value popped from target array and assigned to variable.
            var gNum = popGNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from gNum in model.
            document.getElementById("square" + x).innerHTML = gNum;
            //final else statement requires no form of conditonal check as by this point all other
            //possible outcomes have been assessed.
        } else {
            //Variable is assigned with the last item from the oNum array.
            var oNum = popONumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from gNum in model.
            document.getElementById("square" + x).innerHTML = oNum;
        }
    }
}
