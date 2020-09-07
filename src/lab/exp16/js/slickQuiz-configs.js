
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
            "q": "In compression test, fracture in cast iron specimen would occur along",
            "a": [
                {"option": "Right angle to axis of specimen",      "correct": false},
                {"option": "Axis of load",      "correct": false},
                {"option": "An oblique plane",      "correct": true},		// no comma here
				{"option": "Parallel to axis of specimen",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: An oblique plane</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In compression testing increasing in buckling is due to ",
            "a": [
                {"option": "Increase in length to diameter ratio",               "correct": true},
                {"option": "Decrease in length to diameter ratio ",  			 "correct": false},
				{"option": "Doesn't depend on length to diameter ratio",               "correct": false},
				{"option": "No buckling ",	 "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Increase in length to diameter ratio</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Brittle materials are generally ",
            "a": [
                {"option": "weak-compression; strong-tension",           "correct": false},
                {"option": "weak-tension; strong -compression",                  "correct": true},
                {"option": "strong in both tension and compression",  "correct": false},		
                {"option": "weak in both tension and compression ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: weak-tension; strong -compression</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Gold, cast irons, copper are ductile materials.</br>Silver, concrete are brittle materials.(Say true or false)",
            "a": [
                
                {"option": "True",  "correct": false},		
                {"option": "False",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "The shape of specimen used in compression test is<ol><li>i. Cube </li><li>ii. Cylinder</li><li>iii. Cuboid</li><li>iv. Prism</li></ol></br>",
            "a": [
                {"option": "Only i",           "correct": false},
                {"option": "i & ii",                  "correct": true},
                {"option": "i, ii & iii",  "correct": false},		
                {"option": "All of the above ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: i & ii</p>" // no comma here
        }
		
		
		
		
		
         	
		
        
      // no comma here
    ]
};
