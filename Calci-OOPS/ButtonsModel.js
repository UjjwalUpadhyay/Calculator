// Button Model containing all the properties related to the button
var buttonsModel = function (size, className, material) {
    this.size = size;
    this.class = className;
    this.materialsUsed = material;
};

// Button Number JSON having properties defined for all the calculator number buttons 
var buttonsNumber = function (size, className, material, type) {
    buttonsModel.call(this, size, className, material);
    this.type = type;
    this.buttonsNumberJSON = 
        {
            "Zero": 
			{
				"Name": "Zero",
				"Value": "0",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
 			"One": 
			{
				"Name": "One",
				"Value": "1",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
		    "Two": 
		   {
				"Name": "Two",
				"Value": "2",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
            },
			"Three": 
			{
				"Name": "Three",
				"Value": "3",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Four": 
			{
				"Name": "Four",
				"Value": "4",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
			    "MaterialsUsed": this.materialsUsed
                },
		    "Five": 
		    {
			    "Name": "Five",
			    "Value": "5",
			    "Size": this.size,
			    "Class": this.class,
			    "Type": this.type,
			    "MaterialsUsed": this.materialsUsed
                },
		    "Six": 
		    {
				"Name": "Six",
				"Value": "6",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Seven": 
			{
				"Name": "Seven",
				"Value": "7",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Eight": 
			{
				"Name": "Eight",
				"Value": "8",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Nine": 
			{
				"Name": "Nine",
				"Value": "9",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                }
	};
};

// Button Operator JSON having properties defined for all the calculator operator buttons
var buttonsOperator = function (size, className, material, type) {
    buttonsModel.call(this, size, className, material);
    this.type = type;
    this.buttonsOperatorJSON = 
         {
              "Add": 
				{
					"Name": "Add Operator",
					"Value": "+",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
 			"Subtract": 
				{
					"Name": "Subtract Operator",
					"Value": "-",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Multiply": 
				{
					"Name": "Multiplication Operator",
					"Value": "*",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Divide": 
				{
					"Name": "Division Operator",
					"Value": "/",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Modulus": 
				{
					"Name": "Mod Operator",
					"Value": "%",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
		
			"Equals": 
				{
					"Name": "Equals Operator",
					"Value": "=",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                }
	};
};