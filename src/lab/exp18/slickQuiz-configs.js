
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
            "q": "Modulus of elasticity of  leaf spring depends on",
            "a": [
                {"option": "Slope of load deflection curv",      "correct": false},
                {"option": "Original span",      "correct": false},
                {"option": "Thickness of the leaf spring",      "correct": false},		// no comma here
				{"option": "All the above",      "correct": true}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Leaf springs are designed on the basis of",
            "a": [
                {"option": "Maximum bending stresses",               "correct": false},
                {"option": "Maximum deflection",  			 "correct": false},
				{"option": "Maximum bending as well as maximum deflection",               "correct": true},
				{"option": "None", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Maximum bending as well as maximum deflection</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Proof load in the spring test is the ",
            "a": [
                {"option": "Load required to make the spring flat",           "correct": true},
                {"option": "Load required for the failure of the spring",                  "correct": false},
                {"option": "Initial minor load applied",  "correct": false},		
                {"option": "Maximum load before failure of the spring ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Load required to make the spring flat</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In the experiment spring is placed in ",
            "a": [
                {"option": "Pinned support", "correct": false},
				{"option": "Roller support", "correct": true},
				{"option": "Simply support",  "correct": false},
				{"option": "Hinge support", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Roller support</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What are the Forms of leaf spring?",
            "a": [
                {"option": "Cantilever type", "correct": false},
				{"option": "Simply supported ", "correct": false},
				{"option": "Overhanging type ",  "correct": false},
				{"option": "Both a and b", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both a and b</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The graph plotted to find stiffness of spring has deflection on X axis and Y axis has",
            "a": [
                {"option": "Skin stress", "correct": false},
				{"option": "Slope of the load ", "correct": true},
				{"option": "Number of load repetitions ",  "correct": false},
				{"option": "None of the above ", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Slope of the load</p>" // no comma here
        }
		
		
		
		
		
         	
		
        
      // no comma here
    ]
};
