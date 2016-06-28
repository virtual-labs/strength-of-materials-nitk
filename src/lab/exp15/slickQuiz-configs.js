
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
            "q": "Ductile nature of material in compression testing is indicated by",
            "a": [
                {"option": "Formation of barrel shape",      "correct": true},
                {"option": "Formation of fracture",      "correct": false},
                {"option": "Neck formation",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Formation of barrel shape</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Compression test is preferred to tension test for determining the modulus of elasticity(Say True or False)",
            "a": [
               
				{"option": "True",               "correct": false},
				{"option": "False", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In compression testing increasing in buckling is due to",
            "a": [
                {"option": "Increase in length to diameter ratio",           "correct": true},
                {"option": "Decrease in length to diameter ratio ",                  "correct": false},
                {"option": "Doesn't depend on length to diameter ratio",  "correct": false},		
                {"option": "No buckling ",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Increase in length to diameter ratio</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following has no unit",
            "a": [
                {"option": "Modulus of rigidity",               "correct": false},
                {"option": "Compressive strength",  			 "correct": false},
				{"option": "Modulus of elasticity",               "correct": false},
				{"option": "Strain", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Strain</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Deformation /unit length in direction of force is known as",
            "a": [
                {"option": "Strain",               "correct": false},
                {"option": "Lateral strain",  			 "correct": false},
				{"option": "Linear strain",               "correct": true},
				{"option": "Unit strain", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Linear strain</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is the IS code used for compression test on hard metals ?",
            "a": [
                {"option": "IS 516-1959",               "correct": false},
                {"option": "IS 13780 -1993",  			 "correct": true},
				{"option": "IS 14858-2000",               "correct": false},
				{"option": "IS 2655-1964", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS 13780 -1993</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
