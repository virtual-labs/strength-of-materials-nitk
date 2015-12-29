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
            "q": "The beam will be subjected to pure bending when</br>",
            "a": [
                {"option": "SF is zero and BM constant",      "correct": true},
                {"option": "SF constant and BM zero",      "correct": false},
                {"option": "SF maximum and BM zero",      "correct": false},		// no comma here
				{"option": "SF zero and BM maximum",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:SF is zero and BM constant" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following assumption is wrong in pure bending theory",
            "a": [
                {"option": "Material is anisotropic and homogeneous",               "correct": false},
                {"option": "The resultant pull or thrust on transverse section of a beam is non-zero",   "correct": false},
				{"option": "Transverse section of beam remain plain before and after bending",               "correct": true},
				{"option": "d)	None of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Transverse section of beam remain plain before and after bending</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Bending stress develops due to the",
            "a": [
                {"option": "Effect of torsion",           "correct": false},
                {"option": "Curvature induced by the loads",                  "correct": true},
                {"option": "Action of shear",  "correct": false},		
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Curvature induced by the loads</p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a simple bending of beams, the stress in the beam varies",
            "a": [
                {"option": "Linearly",               "correct": true},
                {"option": "Parabolically",   "correct": false},
				{"option": "Hyperbolically",               "correct": false},
				{"option": "Elliptically", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Linearly</p>" // no comma here
        },
		
         { // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a beam of uniform strength, the bending stress developed is constant and is equal to the allowable stress at every section of the beam. (True or False)",
            "a": [
                {"option": "True",               "correct": true},
                {"option": "False",   "correct": false}
				 // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:true</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In the simple beam analysis, bending stresses vary________________ from top to bottom.",
            "a": [
                {"option": "Linearly",               "correct": true},
                {"option": "Longitudinally",   "correct": false},
				{"option": "Transversely",               "correct": false},
				{"option": "Parabolically", "correct": false} // no comma here
				 // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Linearly</p>" // no comma here
        }
		
        
      // no comma here
    ]
};
