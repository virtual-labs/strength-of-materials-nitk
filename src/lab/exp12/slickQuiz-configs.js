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
            "q": "Computation of bending stress using formula  f/y = M/I.</br> This formula is valid within elastic limit only.(Say True or False)",
            "a": [
                {"option": "True",      "correct": true },
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The selected wooden specimen shall not have a slope of grain more than __________ .",
            "a": [
                {"option": "1 in 20 parallel to longitudinal edges",               "correct": true},
                {"option": "1 in 30 parallel to the longitudinal edges",  			 "correct": false},
				{"option": "1 in 20 parallel to transverse edges",               "correct": false},
				{"option": "1 in 30 parallel to transverse edges", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1 in 20 parallel to longitudinal edges</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Static bending test on wood is used to determine",
            "a": [
                {"option": "Toughness of wood",           "correct": false},
                {"option": "Hardness of wood",            "correct": false},
                {"option": "Tensile strength",  			"correct": false},		
                {"option": "Elasticity of wood  ",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Elasticity of wood </p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "As per the standard the load is applied on a 5 X 5 X 75cm specimen at a rate of ",
            "a": [ 
				{"option": "2.5mm / minute",           "correct": true},
                {"option": "5mm / minute",                  "correct": false},
				{"option": "5mm / minute",               "correct": false},
				{"option": "1mm / minute", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2.5mm / minute</p>" // no comma here
        
		}
		
   // no comma here
    ]
};
