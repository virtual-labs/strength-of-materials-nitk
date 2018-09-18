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
            "q": "In the Izod impact test, the angle at which the pendulum is placed from the ground is______ degrees.</br>",
            "a": [
                {"option": "90",      "correct": true},
                {"option": "100",      "correct": false},
                {"option": "110",      "correct": false},		// no comma here
				{"option": "130",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 90</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How is the test piece supported? ",
            "a": [
                {"option": "At its two ends",               "correct": false},
                {"option": "Vertical cantilever",   "correct": true},
				{"option": "At an angle og 45&deg;",               "correct": false},
				{"option": "Any position", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Vertically</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which property of the metal is used to check in this test?",
            "a": [
                {"option": "Ductility",           "correct": false},
                {"option": "Toughness",                  "correct": true},
                {"option": "Brittleness",  "correct": false},		
                {"option": "Malleability ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Toughness</p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The initial energy of the hammer is ",
            "a": [
                {"option": "186 Joules",               "correct": false},
                {"option": "192 Joules",   "correct": false},
				{"option": "164 Joules",               "correct": true},
				{"option": "138 Joules", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 164 Joules</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "According to IS codes dimensions, the length of the test piece is _____. ",
            "a": [
                {"option": "85mm",               "correct": false},
                {"option": "75mm",   "correct": true},
				{"option": "65mm",               "correct": false},
				{"option": "55mm", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 75mm</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the depth of the notch of izod test specimen?",
            "a": [
                {"option": "2 mm",               "correct": true},
                {"option": "4 mm",   "correct": false},
				{"option": "6 mm",               "correct": false},
				{"option": "8 mm", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2 mm</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The toughness value of material A and material B are 60J and 5J respectively. Which of the following statements is more suitable?",
            "a": [
                {"option": "Material A is harder than material B",               "correct": false},
                {"option": "Material B is more brittle than material A",   "correct": true},
				{"option": "Material A is more tougher than material B",               "correct": false},
				{"option": "Material B is more ductile than material A", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Material B is more brittle than material A</p>" // no comma here
        }
		
         	
		
        
      // no comma here
    ]
};
