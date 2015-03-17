// Button Controller containing all button-related functionalities
var buttonsController = function () {
    this.isNumValue1Done = false;
    this.isNumValue2Done = false;
    this.calculationFinished = false;
    this.numValue1 = 0;
    this.numValue2 = 0;
    this.screenElement = "";
};

// OnClick event for the button 
buttonsController.prototype.btnClick = function(event)
{
    var inputValue;
    if (typeof event === "object") {
            inputValue = event.target.value;
            this.screenElement = event.target.parentNode.previousSibling.previousSibling;
        } 
    else {
        inputValue = event;
    }
	
    if (!isNaN (inputValue))
    {
        pcbControllerObject.operateNumber(this.screenElement ,inputValue);
    }
	
	else
        {
	       pcbControllerObject.useOperator(this.screenElement ,inputValue);	 
	}
         
}