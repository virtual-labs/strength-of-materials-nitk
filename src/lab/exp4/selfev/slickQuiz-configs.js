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
            "q": "A rectangular beam of length I supported at its two ends carries a central concentrated load W at its centre. The maximum deflection occurs </br>",
            "a": [
                {"option": "At the ends",      "correct": false},
                {"option": "At 1/3 from both ends",      "correct": false},
                {"option": "At 1/4 from both ends",      "correct": false},		// no comma here
				{"option": "At mid span",      "correct": true}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: At mid span</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "When a beam deflects into a uniform strength then its width will vary proportional to ",
            "a": [
                {"option": "I/2R",               "correct": false},
                {"option": "I^2 /8R",   "correct": true},
				{"option": "I/8R",               "correct": false},
				{"option": "I^2 /2d", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: I^2 /8R</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The deflection of any rectangular beam simply supported, is",
            "a": [
                {"option": "Directly proportional to the cube of its length",           "correct": false},
                {"option": "Inversely proportional to its width",                  "correct": false},
                {"option": "Directly proportional to its weight",  "correct": false},		
                {"option": "Inversely proportional to the cube of its depth",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Inversely proportional to the cube of its depth</p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For simply supported beams, the maximum permitted deflection is ",
            "a": [
                {"option": "1/350 of the span",               "correct": false},
                {"option": "1/325 of the span",   "correct": true},
				{"option": "1/375 of the span",               "correct": false},
				{"option": "1/400 of the span", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1/325 of the span</p>" // no comma here
        },
		
         	
		
        
      // no comma here
    ]
};
