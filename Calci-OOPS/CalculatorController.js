// Calculator Controller containing controller functions for the calculator
var calculatorController = function ()
{
	this.calculatorElement = "";
	this.screenElement = "";
	this.calculatorElement = document.getElementById("calculator");
    var calculatorID = this.calculatorElement;
	var result = "";
	var btnController = new buttonsController();
    
	// Calls Button Controller's OnClick functionality on click of button
	calculatorID.onclick = function (event)
	{
	 	if (event.target.classList.contains("button")) {
            	btnController.btnClick(event);
        	}
     };

     // Addition operation 
	 this.sumOperation = function (numValue1, numValue2)
     {
     	result = numValue1 + numValue2;
     	return result;
     };

     // Subtraction operation 
	 this.subtractionOperation = function (numValue1, numValue2)
     {
     	result = numValue1 - numValue2;
     	return result;
     };
     
	 // Division operation 
     this.divisionOperation = function (numValue1, numValue2)
     {
     	result = numValue1 / numValue2;
     	return result;
     };

	 // Multiplication operation 
     this.multilpicationOperation = function (numValue1, numValue2)
     {
     	result = numValue1 * numValue2;
     	return result;
     };

     // Modulus operation 
	 this.modulusOperation = function (numValue1, numValue2)
     {
     	result = numValue1 % numValue2;
     	return result;
     };
     
	 // Clear functionality
     this.clear = function (event)
     {
	var screenElement = buttonsControllerObject.screenElement;        
        if (event.target.parentNode.childNodes[0].id === "displayElement") 
        screenElement = event.target.parentNode.childNodes[0];
		else if (event.target.parentNode.previousSibling.previousSibling.id === "displayElement")
		screenElement = event.target.parentNode.previousSibling.previousSibling;
        else if (typeof event === undefined)
        screenElement = screenElement;

        screenElement.value = "";
        pcbControllerObject.numValue1 = 0;
        pcbControllerObject.numValue2 = 0;
        pcbControllerObject.currentSymbol = "";
        pcbControllerObject.isNumValue1Done = false;
        pcbControllerObject.isNumValue2Done = false;
    };
 	
	// Appending digits for numValue1 and numValue2
     this.inputDigits = function (event, screen)
     {
    	var num = 0;
		if (typeof event === "object") {
            num = event.target.value;
        } else {
            num = event;
        }
        if (screen.value == "" && num == "0") {
            return;
        } else if (this.calculationFinished == true) {
            screen.value = num;
            this.calculationFinished = false;
        } else {
            screen.value += num;
        }
     };
     
 }; 
