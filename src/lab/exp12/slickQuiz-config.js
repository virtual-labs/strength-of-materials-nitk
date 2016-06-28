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
            "q": "Identify the different types of failure of timber  specimen<br><img src=\"../images/q12-4.png\"\/>",
            "a": [
                {"option": "Simple tension, Splintering tension, Compression, Cross grain tension, Brash tension,        Horizontal shear",      "correct": false},
                {"option": "Splintering tension, Simple tension, Compression, Brash tension, Horizontal shear Cross grain tension",     "correct": false},
                {"option": "Simple tension, Cross grain tension , Splintering tension, Brash tension, Compression, Horizontal shear ",      "correct": true },
                {"option": "Compression, Cross grain tension , Splintering tension, Simple tension, Brash tension, Horizontal shear",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Simple tension, Cross grain tension , Splintering tension, Brash tension, Compression, Horizontal shear </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pure bending is observed ",
            "a": [
                
                {"option": "When there is internal shear acting in mid-span of specimen",    "correct": false},
				{"option": "When there is internal shear acting in quarter span of specimen",    "correct": false},
				{"option": "When there is no internal shear acting in quarter span of specimen",    "correct": false},
                {"option": "When there is no internal shear acting in mid-span of specimen", "correct": true} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: When there is no internal shear acting in mid-span of specimen</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Computation of bending stress using formula  f/y = M/I.</br> This formula is valid within elastic limit only (Say, True or False).",
 
            "a": [
                
                {"option": "True",  "correct": true},
                {"option": "False",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Write suitable answer</br>Failure of timber specimen in bending test is ",
 
            "a": [
                
                {"option": "Neck formation",    "correct": false},
				{"option": "Fracture",    "correct": true},
				{"option": "Excessive deflection",    "correct": false},
                {"option": "All the above", "correct": false}
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Fracture</p>" // no comma here
        }
		
		
   // no comma here
    ]
};
