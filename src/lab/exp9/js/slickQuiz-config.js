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
            "q": "The ratio of maximum shear stress and average shear stress for a rectangular section is",
            "a": [
                {"option": "1.5",      "correct": true},
                {"option": "2.0",     "correct": false},
                {"option": "1.0",      "correct": false },
                {"option": "2.5",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, Ans: 1.5</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Lap joint is a example for single shear (say true or false)",
            "a": [
                
                {"option": "True",    "correct": true},
                {"option": "False", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong, Ans: True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "When a body is subjected to a direct tensile stress in one plane, the maximum shear stress is __________ the maximum normal stress.",
 
            "a": [
                {"option": "Twice",           "correct": false},
                {"option": "One-half",              "correct": true},
                {"option": "Three times",  "correct": false},
                {"option": "Half",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, Ans: One-half</p>" // no comma here
        }
		
   // no comma here
    ]
};
