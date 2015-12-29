
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
            "q": "In shear test conducted for mild steel rod( M.S.R), mild steel plate( M.S.P) and timber( T), which is the correct order of shear strength obtained",
            "a": [
                {"option": "M.S.R in double shear > M.S.P in double shear > Timber in single shear",      "correct": false},
                {"option": "Timber in single shear > M.S.R in double shear > M.S.P in double shear",      "correct": false},
                {"option": "M.S.P in double shear > M.S.R in double shear > Timber in single shear",      "correct": true},		// no comma here
				{"option": "M.S.R in double shear > Timber in single shear > M.S.P in double shear",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: M.S.P in double shear > M.S.R in double shear > Timber in single shear</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For two equal uniformly loaded spans, the interior reaction is _____the shear at that location.",
            "a": [
                {"option": "Half",               "correct": false},
                {"option": "Twice",  			 "correct": true},
				{"option": "5/8",               "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Twice</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Principle plane is a plane on which the shear stress is",
            "a": [
                {"option": "Maximum",           "correct": false},
                {"option": "Minimum",                  "correct": false},
                {"option": "Zero",  "correct": true},		
                {"option": "None of the above ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Zero</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Shear stress is maximum at the neutral axis. ( Say true or false)",
            "a": [
                
				{"option": "True",               "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        }
		
		
		
		
		
         	
		
        
      // no comma here
    ]
};
