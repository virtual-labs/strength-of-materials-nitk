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
            "q": "For which material the failure load is least?",
            "a": [
                {"option": "Wood",      "correct": true},
                {"option": "Mild-steel rod",      "correct": false},
                {"option": "Mild-steel plate",      "correct": false}		// no comma here
				        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Wood</p>" // no comma here
        },
        {  // Question 2 - Multiple Choice, Single True Answer
            "q": "What is Factor of Safety?",
            "a": [
                {"option": "Yield stress/ working stress",      "correct": false},
                {"option": "Ultimate Stress/ working stress",      "correct": true},
                {"option": "Load/ Area",      "correct": false},		// no comma here
				{"option": "Stress /strain",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Ultimate Stress/ working stress</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
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
		{  // Question 4 - Multiple Choice, Single True Answer
            "q": "Rate of loading for determination of shear strength parallel to the grain is",
            "a": [
                {"option": "0.4 mm per minute",      "correct": true},
                {"option": "0.1 mm per minute",      "correct": false},
                {"option": "0.8 mm per minute",      "correct": false},		// no comma here
				{"option": "0.6 mm per minute",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 0.4 mm per minute</p>" // no comma here
        },
		{  // Question 5 - Multiple Choice, Single True Answer
            "q": "The shear stress at any section of a shaft is maximum",
            "a": [
				{"option": "At top surface",      "correct": true},		// no comma here
				{"option": "At centre of section",      "correct": false},
				{"option": "At distance r/2 from centre",      "correct": false}, 
				{"option": "At distance 3r/4 from centre",      "correct": false} 				
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: At top surface</p>" // no comma here
        }
        
      // no comma here
    ]
};
