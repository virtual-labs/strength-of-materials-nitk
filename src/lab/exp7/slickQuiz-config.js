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
            "q": "Shear stress is caused by forces acting in",
            "a": [
                {"option": "Transverse direction",      "correct": false},
                {"option": "Perpendicular direction",     "correct": false},
                {"option": "Angular direction",      "correct": false },
                {"option": "Parallel opposite direction",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Parallel opposite direction</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Modulus of rigidity is found by shear test.( Say True of False)",
            "a": [
                
                {"option": "True",    "correct": false},
                {"option": "False", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: False </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which statement is correct </br></br> i) Shear stress is caused by forces which act perpendicular to area of c/s.</br> ii) If there is one c/s which resist failure, the material s said to be in single shear.</br> iii) Ultimate strength in double shear will be equal to minimum load divided by twice area of c/s.",
 
            "a": [
                {"option": "(i) is correct",           "correct": false},
                {"option": "(ii) & (iii) is correct",              "correct": false},
                {"option": "(ii) is correct ",  "correct": true},
                {"option": "(iii) is correct",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: (ii) is correct </p>" // no comma here
        },
		{ // Question 4- Multiple Choice, Multiple True Answers, Select All
            "q": "To obtain double shear in N/mm^2 given failure load (P) in kg, area of c/s( A)in mm^2 , which equation is correct",
 
            "a": [
                {"option": "(2 * P) / A",      "correct": false},
                {"option": "P / (2 * A)",      "correct": true},
                {"option": "(P / A)",      "correct": false},		// no comma here
				{"option": "P / (4 * A)",      "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: P / (2 * A) </p>" // no comma here
        },
		{ // Question 5 Multiple Choice, Multiple True Answers, Select All
            "q": "For which material Poisons ratio is more than unity.",
 
            "a": [
                {"option": "Steel",           "correct": false},
                {"option": "Copper",              "correct": false},
                {"option": "Aluminium ",          "correct": false},
				{"option": "None of the above",  "correct": true}				// no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: None of the above </p>" // no comma here
        }
   // no comma here
    ]
};
