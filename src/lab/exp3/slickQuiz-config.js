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
            "q": "If the length of a cantilever carrying an isolated load at its free end is doubled, the deflection of the free end will increase by",
            "a": [
                {"option": "1/8",      "correct": true},
                {"option": "3",     "correct": false},
                {"option": "2",      "correct": false },
                {"option": "8",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong</br>Ans: 1/8</p>" // no comma here
        },
		
		{ // Question 2 - Multiple Choice, Single True Answer
            "q": "The deflection of a cantilever beam loaded with uniformly distributed load is",
            "a": [
                {"option": "(qL^4)/(8EI)",      "correct": true},
                {"option": "(qL^3)/(8EI)",     "correct": false},
                {"option": "(qL^3)/(6EI)",      "correct": false },
                {"option": "(qL^4)/(4EI)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong</br>Ans: (qL^4)/(8EI)</p>" // no comma here
        },
       
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In a cantilever beam of length l subjected to a uniformly distributed load of w per unit length, the maximum deflection lies at the fixed end.( say True or False)",
 
            "a": [
                {"option": "False",           "correct": true},
                {"option": "True",              "correct": false}// no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong </br>Ans: False</p>" // no comma here
        },
		
		{// Question 4 - Multiple Choice, Single True Answer
            "q": "The shear force and bending moment are zero at the free end of a cantilever beam, if it carries a",
            "a": [
                {"option": "Point load at the free end",      "correct": false},
                {"option": "Uniformly distributed load over the whole length",     "correct": true},
                {"option": "Point load at the middle of its length",      "correct": false },
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Uniformly distributed load over the whole length</p>" // no comma here
        }
   // no comma here
    ]
};
