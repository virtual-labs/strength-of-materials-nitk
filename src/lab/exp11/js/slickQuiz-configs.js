
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
            "q": "In bending test on mild steel dial indicators are used to",
            "a": [
                {"option": "Find force applied ",      "correct": false},
                {"option": "Find value of stresses",      "correct": false},
                {"option": "Record value of deflection",      "correct": true},		// no comma here
				{"option": "None of these",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Record value of deflection</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Type of support used to fix the specimen in bending test on mild steel is ",
            "a": [
                {"option": "Hinge",               "correct": false},
                {"option": "Roller",  			 "correct": true},
				{"option": "Fixed",               "correct": false},
				{"option": "Cantilever", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Roller</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "When simply supported beam is subjected to centre concentrated load W",
            "a": [
                {"option": "Occurs at centre with value of WL/6 and  (WL^3)/58 * EI",           "correct": false},
                {"option": "Both maximum bending moment and maximum deflection occurs at central cross section",                  "correct": true},
                {"option": "Both maximum bending moment and maximum deflection occurs at 1/3rd span point",  "correct": false},		
                {"option": "Occurs at 1/3rd span with value of WL/4  and   (WL^3)/58*EI ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both maximum bending moment and maximum deflection occurs at central cross section</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "As compared to uniaxial tension or compression, the strain energy stored in bending is only",
            "a": [
                {"option": "&frac14;",               "correct": false},
				{"option": "&frac12;",               "correct": false},
				{"option": "&frac15;",               "correct": false},
				{"option": "&frac13;", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: &frac14;</p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick up correct assumption of theory of simple bending",
            "a": [
                {"option": "Resultant pull or thrust on transverse section of beam is zero",               "correct": false},
				{"option": "Material of beam is homogenous and isotropic",               "correct": false},
				{"option": "Transverse section of the beam remain plain before and after bending",               "correct": false},
				{"option": "All the above are correct", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above are correct</p>" // no comma here
        },
		
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In simple bending theory, one of assumption is that material of beam is isotropic. Assumption means that",
            "a": [
                {"option": "Normal stress varies linearly in material",               "correct": false},
				{"option": "Normal stress remain constant in all direction",               "correct": false},
				{"option": "Elastic constants are same in all directions",               "correct": true},
				{"option": "Elastic constants varies linearly in material", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Elastic constants are same in all directions</p>" // no comma here
        },
		
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Rod is loaded in tension and pulled until it separates in to two pieces, it is described as fracture rather than rupture.( Say true or false)",
            "a": [
               
				{"option": "True",               "correct": false},
				{"option": "False", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        }
  
      // no comma here
    ]
};
