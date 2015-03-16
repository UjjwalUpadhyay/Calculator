var buttonsCreate = function (container)
{ 	
	var mainDivElement = document.getElementById("calculator");
	var buttonElement = document.createElement("div");
      //  var mainDivElement = document.getElementById();
        var buttonsNumberObject = new buttonsNumber("30", "button key", "plastic", "button");	
        var oKeys = document.createElement("div");
        oKeys.className = "keys";
        
        var oInputClear = document.createElement("input");
	oInputClear.type = "button";
        oInputClear.value = "C";
        oInputClear.className = "button clear";

        Object.keys(buttonsNumberObject.buttonsNumberJSON).forEach(function(key)
       	{
          var key = buttonsNumberObject.buttonsNumberJSON[key];
	  var oInputKey = document.createElement("input");
          oInputKey.className = key.Class;
          oInputKey.value = key.Value;
          oInputKey.type = key.Type;
          oKeys.appendChild(oInputKey);
       	});

       var buttonsOperatorObject = new buttonsOperator("30", "button operator", "plastic", "button"); 
       Object.keys(buttonsOperatorObject.buttonsOperatorJSON).forEach(function(key, value)
       	{
          var key = buttonsOperatorObject.buttonsOperatorJSON[key];
          var oInputKey = document.createElement("input");
          oInputKey.className = key.Class;
          oInputKey.value = key.Value;
          oInputKey.type = key.Type;
          oKeys.appendChild(oInputKey);
       	});
       
       container.appendChild(oInputClear);
       container.appendChild(oKeys);
       mainDivElement.appendChild(container); 

}
