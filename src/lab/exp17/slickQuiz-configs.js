
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Spring is an",
            "a": [
                {"option": "Elastic device",      "correct": false},
                {"option": "Plastic device",      "correct": false},
                {"option": "Elastic as well as plastic device",      "correct": true},		// no comma here
				{"option": "None",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Elastic device</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Shear stress in a close coiled helical spring is",
            "a": [
                {"option": "16WD / &pi;d<sub>3</sub>",               "correct": false},
                {"option": "32WD / &pi;d<sub>3</sub>",  			 "correct": false},
				{"option": "8WD / &pi;d<sub>3</sub>",               "correct": true},
				{"option": "None", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 8WD / &pi;d<sub>3</sub></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Angle of helix in a close coiled spring is ",
            "a": [
                {"option": " < 100",           "correct": true},
                {"option": " > 100",                  "correct": false},
                {"option": " = 100",  "correct": false},		
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: < 100</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A close coiled spring under axial load produces",
            "a": [
                
				{"option": "Bending stresses",               "correct": false},
				{"option": "Shear stresses",               "correct": true},
				{"option": "Tensile stresses",               "correct": false},
				{"option": "None", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Shear stresses</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Deflection in a spring should be",
            "a": [
                
				{"option": "Large",               "correct": true},
				{"option": "Medium",               "correct": false},
				{"option": "Small",               "correct": false},
				{"option": "None", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Large</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Maximum shear stress at proof load doesn’t depend on",
            "a": [
                
				{"option": "Mean coil diameter",               "correct": false},
				{"option": "Diameter of wire",               "correct": false},
				{"option": "Number of coils",               "correct": true},
				{"option": "Proof load", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Number of coils</p>" // no comma here
        }
		        
      // no comma here
    ]
};
