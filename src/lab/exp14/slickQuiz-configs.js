
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
            "q": "Modulus of rigidity is defined as ratio of ",
            "a": [
                {"option": "Long stress and long strain",      "correct": false},
                {"option": "Shear stress and shear strain",      "correct": true},
                {"option": "Volumetric stress and volumetric strain",      "correct": false},		// no comma here
				{"option": "Lateral stress and lateral strain ",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Shear stress and shear strain</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the purpose of weighing head in experiment?",
            "a": [
                {"option": "Apply twisting moment",               "correct": false},
                {"option": "Balance torque of drive unit",  			 "correct": false},
				{"option": "Both a and b",               "correct": true},
				{"option": "None of the these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both a and b</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which is the instrument used to measure twist in this experiment?",
            "a": [
                {"option": "Strain gauge",           "correct": false},
                {"option": "Extensometer",                  "correct": false},
                {"option": "Twistometer",  "correct": true},		
                {"option": "Troptometer",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Troptometer</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In the equation C = (T / &#x3B8;) * (L / J); (T / &#x3B8;) is",
            "a": [
                
				{"option": "Slope of graph of torque v/s twist",               "correct": true},
				{"option": "Ratio of twist",               "correct": false},
				{"option": "Yield point shear stress",               "correct": false},
				{"option": "Polar moment of inertia ", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Slope of graph of torque v/s twist</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The torsional rigidity of a shaft is expressed by the ",
            "a": [
                
				{"option": "Maximum torque it can transmit",               "correct": false},
				{"option": "Number of cycles it undergoes before failure",               "correct": false},
				{"option": "Elastic limit up to which it resist torsion, shear and bending stress",               "correct": false},
				{"option": "Torque required to produce a twist of one radian per unit length of shaft", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Torque required to produce a twist of one radian per unit length of shaft</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The maximum twisting moment a shaft can resist is the product of permissible shear stress and",
            "a": [
                
				{"option": "Polar modulus",               "correct": true},
				{"option": "Moment of inertia",               "correct": false},
				{"option": "Modulus of rigidity", "correct": false},
				{"option": "Polar moment of inertia",               "correct": false}// no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Polar modulus</p>" // no comma here
        }
		
		
		
		
		
         	
		
        
      // no comma here
    ]
};
