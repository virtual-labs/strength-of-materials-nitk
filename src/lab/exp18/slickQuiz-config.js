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
            "q": "Leaf springs are used in",
            "a": [
                {"option": "Scooters",      "correct": false},
                {"option": "Bikes",     "correct": false},
                {"option": "Trucks",      "correct": true },
                {"option": "None",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Trucks</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Leaf springs will have",
            "a": [
                {"option": "All full length leaves",	 "correct": false},
				{"option": "All leaves of different lengths",	 "correct": false},
				{"option": "Few full length leaves with truncated leaves",	 "correct": true},				
                {"option": "None", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Few full length leaves with truncated leaves</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Maximum bending stress in a leaf spring is",
 
            "a": [
                {"option": "3WL / 4nbt<sub>2</sub>",           "correct": false},
                {"option": "3WL / 8nbt<sub>2</sub>",              "correct": false},
                {"option": "3WL/2nbt<sub>2</sub>",  "correct": true},
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 3WL/2nbt<sub>2</sub></p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Maximum deflection in a leaf spring is given by",
 
            "a": [
                {"option": "3WL<sub>3</sub> / 4Enbt<sub>3</sub>",           "correct": false},
                {"option": "3WL<sub>3</sub> / 8Enbt<sub>3</sub>",              "correct": true},
                {"option": "3WL<sub>3</sub> / 16Enbt<sub>3</sub>",  "correct": false},
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 3WL<sub>3</sub> / 8Enbt<sub>3</sub></p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Overlap in a leaf spring is",
 
            "a": [
                {"option": "L/n",           "correct": false},
                {"option": "L/2n",              "correct": true},
                {"option": "L/3n",  "correct": false},
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: L/2n</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "The unit of E is same is that of",
 
            "a": [
                {"option": "Stress, pressure & modulus of elasticity",           "correct": true},
                {"option": "Stress, strain & pressure",              "correct": false},
                {"option": "Strain, force & pressure",  "correct": false},
                {"option": "Stress, force & modulus of rigidity",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: One-half</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
