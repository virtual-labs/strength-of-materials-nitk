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
            "q": "In bending equation M/I = f/y = E/R",
            "a": [
                {"option": "(A) Knowing deflection y experimentally, E can be found",      "correct": false},
                {"option": "(B) By knowing value of E, theoretical value of y can be computed",     "correct": false},
                {"option": "Both (A) and (B) correct",      "correct": true },
                {"option": "All are incorrect ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Both a and b correct</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Is extensometer required in bending test of mild steel",
            "a": [
                
                {"option": "Yes",    "correct": false},
				{"option": "Requires at initial stage only",    "correct": false},
				{"option": "Requires at final stage",    "correct": false},
                {"option": "No ", "correct": true} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: No</p>" // no comma here
        },
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is most elastic",
            "a": [
                
                {"option": "Rubber",    "correct": false},
				{"option": "Plastic",    "correct": false},
				{"option": "Steel",    "correct": true},
                {"option": "Brass", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Steel</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pure bending is observed",
            "a": [
                
                {"option": "When there is internal shear acting in mid-span of specimen",    "correct": false},
				{"option": "When there is internal shear acting in quarter span of specimen",    "correct": false},
				{"option": "When there is no internal shear acting in quarter span of specimen",    "correct": false},
                {"option": "When there is no internal shear acting in mid-span of specimen ", "correct": true} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: When there is no internal shear acting in mid-span of specimen</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "	Computation of bending stress using formula  f/y = M/I. This formula is valid within elastic limit only.(Say True or False)",
            "a": [
                
                
				{"option": "True",    "correct": true},
                {"option": "False", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
		
        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Write suitable answer, Failure of mild steel specimen in bending test is ",
 
            "a": [
                
                {"option": "Neck formation",              "correct": false},
                {"option": "Fracture",  "correct": false},
                {"option": "Excessive deflection",          "correct": true} // no comma here
            ],
            
			"correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Excessive deflection</p>" // no comma here
        }
		
   // no comma here
    ]
};
