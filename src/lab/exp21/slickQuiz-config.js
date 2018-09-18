// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the angle between the two faces of the diamond indenter used in Vickers hardness test?",
            "a": [
                {"option": "132&deg;" ,      "correct": false},
                {"option": "136&deg;",  "correct": true},
                {"option": "140&deg;" ,    "correct": false },
                {"option": "144&deg;",		 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 136&deg;</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The load to be applied on materials depends on ______________",
            "a": [
                
                {"option": "Young's modulus",    "correct": false},
				{"option": "Yield ",    "correct": false},
				{"option": "hardness ",    "correct": true},
                {"option": "solid", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: hardness</p>" // no comma here
        },
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the shape of indenter used in the Vickers hardness test? ",
 
            "a": [
                {"option": "Triangular based pyramid",           "correct": false},
                {"option": "Pentagonal based pyramid ",           "correct": false},
                {"option": "Hexagonal based pyramid ",           "correct": false},
                {"option": "Square based pyramid",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Square based pyramid</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the HV value of diamond under Vickers hardness test?",
 
            "a": [
                {"option": "8000HV",            "correct": false},
                {"option": "9000HV",            "correct": false},
                {"option": "10000HV",  			"correct": true},
                {"option": "11000HV",            "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 10000HV</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "The minimum distance to be maintained between the indentations to avoid interaction between the work hardened region is  ",
 
            "a": [
                {"option": "5.5",           "correct": false},
                {"option": "4.5",              "correct": false},
                {"option": "3.5",  "correct": false},
                {"option": "2.5",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 2.5</p>" // no comma here
        }
   // no comma here
    ]
};
