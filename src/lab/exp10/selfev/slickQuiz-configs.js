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
            "q": "The ability of the material to resist stress without failure is called",
            "a": [
                {"option": "Strength",      "correct": true},
                {"option": "Hardness",      "correct": false},
                {"option": "Stiffness",      "correct": false},		// no comma here
				{"option": "Toughness",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Strength</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "During hardness test the indenter is usually a",
            "a": [
                {"option": "Ball",               "correct": false},
                {"option": "Pyramid",   "correct": false},
				{"option": "Cone",               "correct": false},
				{"option": "All of the above", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All of the above</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "For hardness test of copper in Brinell hardness tester, the diameter of ball is",
            "a": [
                {"option": "1 mm",           "correct": false},
                {"option": "3 mm",                  "correct": false},
                {"option": "5 mm",  "correct": true},		
                {"option": "7 mm ",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 5 mm</p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Property of hardness of material is resistance to ",
            "a": [
                {"option": "Scratching",               "correct": false},
                {"option": "ear",   "correct": false},
				{"option": "Indentation",               "correct": true},
				{"option": "All the above", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "5)	The ratio of test load to surface area of indentation ",
            "a": [
                {"option": "Shear strength of material",               "correct": false},
                {"option": "Indentation number",   "correct": true},
				{"option": "Brinell hardness number",               "correct": false},
				{"option": "None of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Brinell hardness number</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The value of distance between successive indentation is always lesser than distance of centre of indentation from edge of specimen(true or false)",
            "a": [
               
				{"option": "True",               "correct": false},
				{"option": "False", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Unit of Brinell hardness number is",
            "a": [
                {"option": "Pascal",               "correct": true},
                {"option": "Newton",   "correct": false},
				{"option": "No unit ",               "correct": false},
				{"option": "Kg", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Pascal</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Multiple True Answers, Select Any
            "q": "8)	Diameter of impression is found by",
            "a": [
                {"option": "Micrometer",               "correct": false},
                {"option": "Dial gauge",   "correct": false},
				{"option": "Scale ",               "correct": false},
				{"option": "Microscopic observation", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Microscopic observation</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick up correct statement",
            "a": [
                {"option": "A brittle materials has no plastic zone",               "correct": false},
                {"option": "A ductile material has large plastic zone",   "correct": false},
				{"option": "A rigid material has no plastic zone ",               "correct": false},
				{"option": "All are correct", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All are correct</p>" // no comma here
        }
		
         	
		
        
      // no comma here
    ]
};
