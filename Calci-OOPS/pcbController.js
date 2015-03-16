var pcbController = function () {
    this.calculationFinished = false;
    this.isNumValue1Done = false;
    this.isNumValue2Done = false;
    this.numValue1 = 0;
    this.numValue2 = 0;
    this.currentSymbol = "";
};

pcbController.prototype.operateNumber = function(screenElement, inputValue)
{
var displayControllerObject = new displayController();
var calculatorControllerObject = new calculatorController();
var output = "";
if ((this.calculationFinished === true) && (!isNaN(this.currentSymbol))) {
	        calculatorControllerObject.clear(event);
                this.calculationFinished = false;
		this.isNumValue1Done = false;
                displayControllerObject.display(inputValue, screenElement);
            } 
	else if ((this.calculationFinished === true) && (isNaN(this.currentSymbol))) {
                this.isNumValue1Done = true;
                output = this.numValue1 + inputValue;
                this.calculationFinished = false;
                displayControllerObject.display(output, screenElement);
            } 
        else if (this.currentSymbol === '') {
                calculatorControllerObject.inputDigits(event, screenElement);
            }
        else if (this.currentSymbol != '' && !this.isNumValue1Done) {
                this.isNumValue1Done = true;
                output = screenElement.value  + inputValue;
                this.numValue2 = inputValue;
                displayControllerObject.display(output, screenElement);
            }
        else if (this.currentSymbol != '' && this.isNumValue1Done) {
                this.numValue2 = this.numValue2 + inputValue.toString();
                output = screenElement.value + inputValue.toString();
                displayControllerObject.display(output, screenElement);
            }	
};
        
pcbController.prototype.useOperator = function (screenElement, inputValue)
{
    var displayControllerObject = new displayController();
    var calculatorControllerObject = new calculatorController();
    var output = "";
    switch (inputValue)
    {   
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            {
                this.useOperator(screenElement, "=");
            }
            
            this.numValue1 = screenElement.value;
//            buttonsControllerObject = this.numValue1;
            
            if (this.currentSymbol != "" && this.numValue2 === 0)
            {
                output = screenElement.value.substring(0,screenElement.value.length - 1) + inputValue;
                displayControllerObject.display(output, screenElement);
                this.currentSymbol = inputValue;
            }
            else
            {
                this.currentSymbol = inputValue;
                displayControllerObject.display(screenElement.value + this.currentSymbol, screenElement);
            }
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            this.numValue2 = 0;
            this.calculationFinished = false;
                    break;
         case "=":
            switch(this.currentSymbol)
            {
                case "/":
                    if (parseInt(this.numValue2))
                            {
                                displayValue = parseInt(calculatorControllerObject.divisionOperation(parseInt(this.numValue1) , parseInt(this.numValue2)),0);
                            }
                            break;
                case "*":
                            displayValue = calculatorControllerObject.multilpicationOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                case "+":
                            displayValue = calculatorControllerObject.sumOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                case "-":
                            displayValue = calculatorControllerObject.subtractionOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                case "%":
                            displayValue = calculatorControllerObject.modulusOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                default: 
                            displayValue =  "";
                            break;
              };
            displayControllerObject.display(displayValue, screenElement);

            this.numValue1 = screenElement.value;
            this.isNumValue1Done = false;
            this.calculationFinished = true;
            this.currentSymbol = '';
            break;
	    case "C":
                  calculatorControllerObject.clear(event);
                  break;
            }  
    };
