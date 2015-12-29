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
            "q": "What is the IS code for metals?",
            "a": [
                {"option": "IS 1708:1986",      "correct": false},
                {"option": "IS  2654:1977",      "correct": false},
                {"option": "IS 5242:1979",      "correct": true},		// no comma here
				{"option": "IS 2655:1964",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS 5242:1979</p>" // no comma here
        },
        {  // Question 2 - Multiple Choice, Single True Answer
            "q": "How is the double shear strength calculated?",
            "a": [
                {"option": "(2 * P) / A",      "correct": false},
                {"option": "P / (2 * A)",      "correct": true},
                {"option": "P / A",      "correct": false},		// no comma here
				{"option": "P / (0.5 * A)",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: P / (2*A)</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The material in the shear test fails due to",
            "a": [
                {"option": "Sudden impact forces acting",      "correct": false},
                {"option": "Surfaces go out of alignment with each other",      "correct": true},
                {"option": "Due to the bending action caused",      "correct": false},		// no comma here
				{"option": "None of these",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Surfaces go out of alignment with each other</p>" // no comma here
        },
		{  // Question 4 - Multiple Choice, Single True Answer
            "q": "The minimum length of the specimen required according to the code is",
            "a": [
                {"option": "Twice the diameter",      "correct": true},
                {"option": "Equal to diameter",      "correct": false},
                {"option": "Four times the diameter",      "correct": false},		// no comma here
				{"option": "None of these",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Twice the diameter</p>" // no comma here
        },
		{  // Question 5 - Multiple Choice, Single True Answer
            "q": "Direct shear test specimen is not affected by the length of the specimen(Say True or False).",
            "a": [
				{"option": "True",      "correct": true},		// no comma here
				{"option": "False",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        }
        
      // no comma here
    ]
};
